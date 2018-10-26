import React from 'react';
import { Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native';

const FormTextInput = (props) => {
    return(
        <View style={styles.container}>
            <Text style={styles.label}>{props.label}</Text>
            <TextInput
                style={styles.input}
                onChangeText={props.onChangeText}
                value={props.value}
                placeholder={props.label}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 5,

    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        padding: 5,
    },
    input:{
        padding: 5,
        paddingLeft: 5,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 15,
        fontSize: 20,
    }
});

export default FormTextInput;