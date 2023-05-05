import { useCallback } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

import * as SplashScreen from 'expo-splash-screen'

// import custom component
import Card from './Card';

SplashScreen.preventAutoHideAsync();

export const CardMenu = ({ data, onPress }) => {
    const [fontsLoaded] = useFonts({
        'BentonSans-Bold':
            require('./assets/fonts/BentonSansBold.otf'),
        'BentonSans-Book':
            require('./assets/fonts/BentonSansBook.otf')
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded])

    if (!fontsLoaded) {
        return null;
    }

    return (
        <Card style={styles.card} onPress={onPress}>
            <View style={{ marginRight: 20 }} onLayout={onLayoutRootView}>
                <Image
                    source={require('./assets/menu.png')}
                    style={styles.image}
                />
            </View>

            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text style={styles.name}>
                    {data.name}
                </Text>
                <Text style={styles.category}>
                    {data.category}
                </Text>
            </View>

            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Text style={styles.price}>
                    ${data.price}
                </Text>
            </View>
        </Card>
    )
}

const styles = StyleSheet.create({
    card: {
        display: 'flex',
        flexDirection: 'row',
        marginVertical: 10,
        marginHorizontal: 5
    },
    image: {
        resizeMode: 'contain',
        width: 100,
        height: 100,
        borderRadius: 10
    },
    name: {
        fontWeight: 400,
        fontSize: 16,
        fontFamily: 'BentonSans-Bold',
        marginTop: 10
    },
    category: {
        fontWeight: 400,
        fontSize: 14,
        opacity: 0.5,
        fontFamily: 'BentonSans-Book',
        marginTop: 5
    },
    price: {
        fontFamily: 'BentonSans-Bold',
        fontSize: 22,
        fontWeight: 400,
        color: '#FEAD1D'
    }
})