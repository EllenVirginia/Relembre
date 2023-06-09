import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, } from 'react-native';
import React, { useState, useTransition } from 'react';
import { ListCard } from "/Projects/Relembre/client/src/Componentes/Home_Componentes/ListCard";
import { Button1 } from "/Projects/Relembre/client/src/Componentes/Home_Componentes/Button1";
import { Top_Half } from "/Projects/Relembre/client/src/Componentes/Home_Componentes/Top_Half";

export function Home({ navegation, route }) {
  
  
  const { lista, tempo, descricao} = route.params

  const [box, setBox] = useState([

  ])

  const [val, SetVal] = useState(2);
  const [exmplo, setExemplo] = useState(box);

  const addElement = (titulo,descricao,tempo,lista) => {
    setBox((prevBox) => {
      return [
        {
          titulo: titulo,
          descricao: descricao,
          tempo: tempo,
          lista: lista, 
          key: Math.random().toString()
        },
        ...prevBox
      ]
      // Create no App ficara aqui
    })
  }

  const RemoverElemento = (key) => {
    const OldBox = box.filter((box) => box.key != key)
    setBox(OldBox)
    console.log(box.length);
    // delete no app ficara aqui
  }

  return (
    <View style={styles.container}>
      <Top_Half />
      <ListCard box={box} RemoverElemento={RemoverElemento} lista={lista} tempo={tempo} descricao={descricao} />
      <Button1 box={box} addElement={addElement} />
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
