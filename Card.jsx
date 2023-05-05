import { TouchableOpacity, StyleSheet } from "react-native";

const Card = ({style, children, onPress}) => {
    return (
        <TouchableOpacity 
            onPress={onPress}
            activeOpacity={1}
            style={[styles.card, style]}
        >
            {children}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        padding: 16,
        backgroundColor: '#fff',
        elevation: 10,
        borderRadius: 22,
        shadowColor: '#171717',
        shadowOpacity: 0.2,
        shadowRadius: 3 
    }
})

export default Card

// ** belum ada info import komponen