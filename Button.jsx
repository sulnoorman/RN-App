import { useCallback } from "react"
import { Text, Pressable, StyleSheet } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { useFonts } from "expo-font"

import * as SplashScreen from 'expo-splash-screen'

SplashScreen.preventAutoHideAsync()

const Button = ({
    icon,
    title,
    style,
    onClick
}) => {
    const [fontsLoaded] = useFonts({
        'BentonSans-Bold': require("./assets/fonts/BentonSansBold.otf")
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
        <Pressable
            style={[styles.button, style]}
            onPress={onClick}
            onLayout={onLayoutRootView}
        >
            {icon ? (
                <Ionicons name={icon} size={24} color={'#DA6317'} />
            ) : (
                <Text style={styles.title}>{title}</Text>
            )}
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 16,
        backgroundColor: 'white',
        paddingVertical: 12,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontFamily: 'BentonSans-Bold',
        color: 'black',
        fontSize: 18
    }
})

export default Button

//  ** belum ada import komponen-komponennya