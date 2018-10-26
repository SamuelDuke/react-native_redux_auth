import React from 'react';
import {Text, TextInput, TouchableOpacity, View, StyleSheet} from 'react-native';

const Button = (props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={props.onPress}>
                <Text style={styles.button}>{props.children}</Text>
            </TouchableOpacity>
        </View>

    )
};

export default Button;

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    button: {
        backgroundColor: 'blue',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 12,
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        overflow: 'hidden',
        padding: 6,
        textAlign: 'center',
        marginTop: 10,
    },
});