import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, } from 'react-native';
import React, { useState, useTransition } from 'react';
import { Detalhes } from "/Projects/Relembre/client/src/Componentes/Details_Componentes/Detalhes";
import {Top_Half} from "/Projects/Relembre/client/src/Componentes/Home_Componentes/Top_Half";



export function Details({ route, navigation, }) {
  const { titulo, lista, tempo, descricao } = route.params;
  console.log(descricao)
  return (
    <View style={styles.container}>
      <Top_Half />
      <Detalhes titulo={titulo} lista={lista} tempo={tempo} descricao={descricao}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
});
