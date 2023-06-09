import { StyleSheet, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Card } from "./Card";
import { useNavigation, NavigationContainer } from '@react-navigation/native';

export function ListCard({ box, RemoverElemento, lista, descricao, tempo }) {
    return (
        <FlatList
            numColumns={1}
            data={box}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => (
                <Card titulo={item.titulo} 
                RemoverElemento={RemoverElemento} 
                box={box} 
                item={item.key} 
                lista={item.lista}
                tempo={item.tempo}
                descricao={item.descricao} />
            )
            }
        />
    );
}

const styles = StyleSheet.create({
    add: {
        marginBottom: 40,
        borderRadius: 50,
        marginTop: 10,
    },
});
