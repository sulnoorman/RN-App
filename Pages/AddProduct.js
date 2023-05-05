import { useState, useCallback } from "react"
import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { Input } from "../Input";
import Button from "../Button";

import * as SplashScreen from 'expo-splash-screen'

import { addData } from "../Services/crud";

SplashScreen.preventAutoHideAsync()

export const AddProduct = ({ navigation }) => {
    const [fontsLoaded] = useFonts({
        'BentonSans-Black':
            require('../assets/fonts/BentonSansBlack.otf'),
        'BentonSans-Bold':
            require('../assets/fonts/BentonSansBold.otf'),
        'BentonSans-Book':
            require('../assets/fonts/BentonSansBook.otf')
    });

    const [data, setData] = useState({
        name: '',
        category: '',
        description: '',
        price: 0
    })

    const handleChangeInput = (name, value) => {
        setData({
            ...data,
            [name]: value
        });
    };

    const handleSubmit = () => {
        if (!data.name || !data.category || !data.price || !data.description) {
            alert('Mohon masukan data dengan benar')
        } else {
            addData(data).then(success => {
                alert('Success')
            }).catch(err => {
                alert('Alert');
            })
        }
    };

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded])

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View style={styles.container} onLayout={onLayoutRootView}>
            <StatusBar style="dark" />
            <Button
                icon={'chevron-back-outline'}
                style={styles.iconBack}
                onClick={() => navigation.goBack()}
            />

            <View style={{ gap: 10 }}>
                <Text style={styles.textHeader}>Fill Data Product</Text>
                <Text style={styles.subHeader}>
                    This data will be displayed in the menu product
                </Text>
            </View>

            <View style={{ flex: 1, gap: 16, flexDirection: 'column' }}>
                <Input
                    value={data.name}
                    placeholder={'Product Name'}
                    onChangeText={text => handleChangeInput('name', text)}
                />
                <Input
                    value={data.category}
                    placeholder={'Product Category'}
                    onChangeText={text => handleChangeInput('category', text)}
                />
                <Input
                    value={data.price == 0 ? '' : data.price}
                    placeholder={'Product Price'}
                    onChangeText={text => handleChangeInput('price', text)}
                />
                <Input
                    value={data.description}
                    placeholder={'Product Description'}
                    onChangeText={text => handleChangeInput('description', text)}
                    multiline={true}
                />

                <Button title={'Submit'} onClick={handleSubmit} style={styles.button} />

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 33,
        paddingTop: 70,
        paddingHorizontal: 31,
        backgroundColor: '#FEFEFF'
    },
    iconBack: {
        backgroundColor: '#f5d8c6',
        width: 50,
        paddingHorizontal: 0
    },
    textHeader: {
        fontFamily: 'BentonSans-Bold',
        fontSize: 25
    },
    textSubHeader: {
        fontFamily: 'BentonSans-Book',
        fontSize: 16
    },
    button: {
        marginTop: 20,
        height: 50,
        backgroundColor: '#53E88B'
    }
})