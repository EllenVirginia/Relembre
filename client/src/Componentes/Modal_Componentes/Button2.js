import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import React, { useState, useTransition, useEffect } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation, NavigationContainer } from '@react-navigation/native';

export function Button2({ titulo, lista,descricao, tempo, adicionarElemento,}) {


    return (
        <View style={styles.butaoPosicionamento}>
            <TouchableOpacity
                onPress={() => adicionarElemento(titulo,descricao,tempo,lista)}
            >
                <View style={styles.butaoSkin}>
                    <Text style={styles.TextSkin}>Criar Lembrete</Text>
                </View>

            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    butaoPosicionamento : {
        marginTop: 130,
        alignItems: "center",
        justifyContent: "center",
    },
    TextSkin : {
        fontSize: 20,
        color: "white",

    },
    butaoSkin : {
        height: 40,
        width: 200,
        backgroundColor: "#F2B705",
        alignItems: "center",
        justifyContent:"center",
        borderRadius: 15, 

    }
});
