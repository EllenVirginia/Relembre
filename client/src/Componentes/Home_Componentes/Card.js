import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useState, useEffect } from 'react';
import { useNavigation, NavigationContainer } from '@react-navigation/native';

export function Card({ box, RemoverElemento, titulo, item, lista,tempo, descricao }) {
    const navigation = useNavigation();
    return (
        <View>
            <TouchableOpacity
                onPress={() => navigation.navigate('Details',{
                    titulo : titulo,
                    lista : lista,
                    tempo : tempo,
                    descricao : descricao
                })}
                style={styles.list}>
                <TouchableOpacity style={styles.Notification}>
                    <Ionicons name="ios-notifications-outline" size={30} color="black" />
                </TouchableOpacity>
                <Text style={styles.MinText}>{titulo}</Text>
                <TouchableOpacity style={{ justifyContent: "center", }}
                    onPress={() => RemoverElemento(item)}
                >
                    <Ionicons name="trash-outline" size={30} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={{ justifyContent: "center", }}>
                    <Ionicons name="ellipsis-vertical" size={30} color="black" />
                </TouchableOpacity>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    list: {
        backgroundColor: "#F2B705",
        flexDirection: "row",
        height: 80,
        marginTop: 20,
        width: 350,
        borderRadius: 30,
    },
    Notification: {
        justifyContent: "center",
        marginLeft: 5,
    },
    MinText: {
        fontSize: 20,
        marginTop: 15,
        marginLeft: 10,
        opacity: 0.7,
        color: "#735702",
        width: "67%"
    },

});
