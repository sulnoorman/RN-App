import { StatusBar } from "expo-status-bar"
import { useState, useEffect, useCallback } from "react"
import { StyleSheet, Text, View } from "react-native"
import { useFonts } from "expo-font"
import Button from "../Button"
import { Input } from "../Input"
import { getDataById, updateData } from "../Services/crud"

import * as SplashScreen from 'expo-splash-screen'

SplashScreen.preventAutoHideAsync()

export const EditMenu = ({ route, navigation }) => {
    const [fontsLoaded] = useFonts({
        'BentonSans-Black':
            require('../assets/fonts/BentonSansBlack.otf'),
        'BentonSans-Bold':
            require('../assets/fonts/BentonSansBold.otf'),
        'BentonSans-Book':
            require('../assets/fonts/BentonSansBook.otf')
    });

    const { idMenu } = route.params

    const [data, setData] = useState({
        name: '',
        category: '',
        price: '0',
        description: ''
    })

    useEffect(() => {
        getDataById(idMenu)
            .then(item => {
                setData({
                    name: item[0].name,
                    category: item[0].category,
                    description: item[0].description,
                    price: item[0].price
                })
            }).catch(err => {
                console.log(err)
            })
    }, [])

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded])

    if (!fontsLoaded) {
        return null;
    }

    const handleChangeInput = (name, value) => {
        setData({
            ...data,
            [name]: value
        })
    }

    const handleSubmit = () => {
        if (!data.name || !data.category || !data.description) {
            alert('Mohon masukkan data dengan benar')
        } else {
            updateData(idMenu, data)
                .then(success => {
                    alert('Success')
                }).catch(err => {
                    alert('Error')
                })
        }
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
                <Text style={styles.textHeader}>Edit Data Product</Text>
                <Text style={styles.textSubHeader}>
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
                    value={data.price}
                    placeholder={'Product Price'}
                    onChangeText={text => handleChangeInput('price', text)}
                />
                <Input
                    value={data.description}
                    placeholder={'Product Description'}
                    onChangeText={text => handleChangeInput('description', text)}
                />

                <Button
                    title={'Submit'}
                    textColor='white'
                    onClick={handleSubmit}
                    style={styles.button}
                />
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
        backgroundColor: '#53E88B',
        heigth: 50
    }
})