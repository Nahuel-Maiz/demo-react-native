import React from "react";
import { View, Text, StyleSheet, Button, TouchableHighlight, TextInput  } from "react-native";

const Formulario = () => {
    return (
        <View>
            <Text style={styles.label}>Tareas:</Text>
            <TextInput style={styles.input}></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    label: {
        fontWeight: 'bold',
        fontSize: 10,
        marginTop: 20
    },
    input: {
        marginTop: 10,
        height: 50,
        borderColor: '#e1e1e1',
        borderWidth: 1,
        borderStyle: 'solid'
    }
})

export default Formulario;