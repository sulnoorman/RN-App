import { StatusBar } from "expo-status-bar"
import { useFonts } from "expo-font"
import { useState, useEffect, useCallback } from "react"
import * as SplashScreen from 'expo-splash-screen'
import Button from "../Button"
import { 
    View,
    Text,
    Image,
    StyleSheet
 } from "react-native"

import { deleteData, getDataById } from "../Services/crud"

SplashScreen.preventAutoHideAsync()

export const DetailMenu = ({ route, navigation }) => {
    const { idMenu } = route.params
    const [data, setData] = useState({})

    const [fontsLoaded] = useFonts({
        'BentonSans-Black': 
            require('../assets/fonts/BentonSansBlack.otf'),
        'BentonSans-Bold': 
            require('../assets/fonts/BentonSansBold.otf'),
        'BentonSans-Book': 
            require('../assets/fonts/BentonSansBook.otf')
    });

    useEffect(() => {
        getDataById(idMenu)
            .then(item => {
                setData(item[0])
            }).catch(err => {
                console.log(err)
            })
    }, [])

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync()
        }
    }, [fontsLoaded])

    if (!fontsLoaded) {
        return null;
    }

    const handleEdit = () => {
        navigation.navigate("EditMenu", { idMenu: idMenu })
    }
 
    const handleDelete = () => {
        deleteData(idMenu)
            .then(success => {
                alert('Success')
            })
            .catch(err => {
                alert('Error')
            })
    }

    return (
        <View style={styles.container} onLayout={onLayoutRootView}>
            <StatusBar style="dark" />
            
            <Image source={require('../assets/menu.png')} style={styles.imageHeader} />
            <Button icon={'chevron-back-outline'} style={styles.iconBack} onClick={() => navigation.goBack()} />

            <View style={styles.card}>
                <View style={{ flexDirection: 'row', gap: 10, justifyContent: 'flex-end' }}>
                    <Button icon={'create'} style={styles.action} onClick={handleEdit} />
                    <Button icon={'trash'} style={styles.action} onClick={handleDelete} />
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1, gap: 5 }}>
                        <Text style={styles.name}>{data.name}</Text>
                        <Text style={styles.category}>{data.category}</Text>
                    </View>
                    <View style={{ justifyContent: 'center' }}>
                        <Text style={styles.price}>${data.price}</Text>
                    </View>
                </View>

                <View>
                    <Text style={styles.description}>{data.description}</Text>
                </View>
            </View> 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FEFEFF'
    },
    imageHeader: {
        height: 500,
        width: '100%'
    },
    iconBack: {
        position: 'absolute',
        top: 70,
        left: 33
    },
    card: {
        backgroundColor: 'white',
        padding: 33,
        borderTopLeftRadius: 30,
        borderTopEndRadius: 30,
        marginTop: -30,
        flex: 1
    },
    action: {
        backgroundColor: '#f5d7c6'
    },
    name: {
        fontSize: 24,
        // fontWeight: 'bold',
        fontFamily: 'BentonSans-Bold'
    },
    category: {
        fontSize: 18,
        fontFamily: 'BentonSans-Book'
    },
    price: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#FEAD1D'
    },
    description: {
        marginVertical: 20
    }
})