import { TextInput, View } from "react-native"

export const Input = ({
    placeholder,
    value,
    name, 
    onChangeText,
    numeric,
    multiline
}) => {
    return (
        <View style={{
            backgroundColor: 'white',
            elevation: 3,
            borderRadius: 15,
            shadowColor: '#171717',
            shadowOpacity: 0.2,
            shadowRadius: 1,
            paddingHorizontal: 20,
            paddingVertical: 15            
        }}>
            <TextInput 
                style={multiline ? { height: 100 } : null}
                textAlignVertical={multiline ? 'top' : 'auto'}
                editable
                multiline={multiline ? true : false}
                cursorColor={'#53E88B'}
                placeholder={placeholder}
                value={value}
                id={name}
                keyboardType={numeric ? 'numeric' : 'default'}
                onChangeText={onChangeText}
            />
        </View>
    )
}

// ** belum ada import komponen-komponennya