import { Ionicons } from "@expo/vector-icons"
import { View, TextInput, StyleSheet } from "react-native"

const InputSearch = ({ onSearch }) => {
    return (
        <View style={styles.input}>
                <Ionicons name='search' size={30} color={'#DA6317'} />
                <TextInput 
                    cursorColor={'#DA6317'}
                    placeholder='What do you want to order'
                    placeholderTextColor={'#DA6317'}
                    style={{ fontSize: 16}}
                    maxLength={10}
                    onChangeText={onSearch}
                    clearButtonMode='always'
                />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        borderRadius: 15,
        backgroundColor: '#f5d8c6',
        paddingHorizontal: 20,
        paddingVertical: 15
    }
})

export default InputSearch

//  ** belum ada import komponennya (ionicons, dll)