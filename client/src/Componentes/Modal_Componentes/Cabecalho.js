import React  from "react";
import { StyleSheet, Text, View } from "react-native";

export  function Cabecalho () {
    return (
        <View style={styles.header}>
            <Text style={styles.titulo}>Itens</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 38,
        backgroundColor: 'coral'
    },
    titulo: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    }
})