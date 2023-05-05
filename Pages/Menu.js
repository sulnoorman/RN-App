import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { getAllData } from "../Services/crud";

// import components from react native
import {
    View,
    FlatList,
    ScrollView,
    SafeAreaView,
    StyleSheet
} from "react-native";

// import custom components
import Button from "../Button";
import InputSearch from "../InputSearch";
import { StatusBar } from "expo-status-bar";
import { CardMenu } from "../CardMenu";

const Menu = () => {
    const navigation = useNavigation();
    const [dataMenu, setDataMenu] = useState([]);
    const [dataFilter, setFilterData] = useState([]);

    useEffect(() => {
        getAllData()
            .then(data => {
                setDataMenu(data)
            })
    }, [dataMenu])

    const filterData = search => {
        const filter = dataMenu.length !== 0 && dataMenu.filter(item => {
            return item.name.toLowerCase().includes(search.toLowerCase());
        });

        setFilterData(filter)
    }

    return (
        <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
            <SafeAreaView>
                <StatusBar style='dark' />

                <View style={styles.container}>
                    <View style={{ flexDirection: 'row', gap: 20 }}>
                        <InputSearch onSearch={filterData} />
                        <Button
                            title={'tambah'}
                            icon={'add'}
                            style={{ backgroundColor: '#f5d8c6' }}
                            onClick={() => navigation.navigate('AddProduct')}
                        />
                    </View>

                    <View>
                        <FlatList
                            data={dataFilter && dataFilter.length > 0 ? dataFilter : dataMenu}
                            renderItem={({ item }) =>
                                <CardMenu
                                    data={item}
                                    onPress={() => navigation.navigate('DetailMenu', {
                                        idMenu: item.id
                                    })}
                                />
                            }
                            scrollEnabled={false}
                            keyExtractor={item => item.id}
                            horizontal={false}
                        />
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

export default Menu

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 33,
        paddingTop: 70,
        paddingHorizontal: 31,
        backgroundColor: '#FEFEFE'
    }
})

// ** belum ada import komponen-komponennya apa aja