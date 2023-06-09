import React from "react";
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useState } from 'react';

export function AdicionarItem({ funcao }) {

    const [texto, setTexto] = useState('');

    const pegarMudança = (val) => {
        setTexto(val);
    }
    
    return (
        <View >
            <TextInput
                style={styles.input}
                placeholder="Novo Item..."
                onChangeText={pegarMudança}
            />

            <View style={styles.centro}>
            <TouchableOpacity
                onPress={() => funcao(texto)}
            >
                <View style={styles.botaoDec}>
                    <Text style={styles.textoDec}>Adicionar Item</Text>
                </View>

            </TouchableOpacity>

            </View>
            
           


        </View>

    )
}

const styles = StyleSheet.create({

    centro: {
        alignItems: "center",
        justifyContent: "center",

    },

    input: {
        marginBottom: 15,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#735702',


    },

    botaoDec:{
       backgroundColor: "#F2B705",
       height: 40,
        width: 200,
        alignItems: "center",
        justifyContent:"center",
        borderRadius: 15, 


    },

    textoDec:{
        fontSize: 18,
        color: "white",

    }
})