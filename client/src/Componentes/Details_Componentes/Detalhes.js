import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import React, { useState, useTransition } from 'react';

export function Detalhes({ titulo, lista, tempo, descricao}) {

  const [produtos, setPrdotuos] = useState(lista)
  const [nameButton, setButton] = useState("Salvar alterações");
  const [funcaoT, setFunctionT] = useState(true)
  const [funcaoD, setFunctionD] = useState(true)
  const [funcaoTP, setFunctionTP] = useState(true)
  const [Descrição, setDescrição] = useState(descricao)
  const [temp, setTempo] = useState(tempo)
  const [titul, setTitulo] = useState(titulo)

  const ativar = () => {
    setFunctionT(!funcaoT)
  }
  const ativar2 = () => {
    setFunctionD(!funcaoD)
  }
  const ativar3 = () => {
    setFunctionTP(!funcaoTP)
  }

  const Salvar = () => {
    if (funcaoD == false && funcaoT == false && funcaoTP == false) {
      setFunctionT(!funcaoT)
      setFunctionD(!funcaoD)
      setFunctionTP(!funcaoTP)
    } else {
      if (funcaoD == false) {
        setFunctionD(!funcaoD)
      }
      if (funcaoT == false) {
        setFunctionT(!funcaoT)
      }
      if (funcaoTP == false) {
        setFunctionTP(!funcaoTP)
      }
    }
  }

  return (
    <View>
      <View style={styles.bigBox}>
        <View style={styles.viewBox1}>
          <Ionicons name="ios-notifications-outline" size={35} color="black"
            style={{ marginHorizontal: 10, }}
          />
          <View>
            {funcaoT ?
              <TouchableOpacity
                onPress={ativar}
              >
                <Text style={{ fontSize: 20, opacity: 0.5 }}>{titulo}</Text>
              </TouchableOpacity>
              :
              <TextInput
                multiline
                placeholder="Escreva Título"
                onChangeText={setTitulo}
              />
            }

            {funcaoD ?
              <TouchableOpacity
                onPress={ativar2}
              >
                <Text style={{ fontSize: 15, opacity: 0.5 }}>{descricao}</Text>
              </TouchableOpacity>
              :
              <TextInput
                multiline
                placeholder="Escreva a Descrição"
                onChangeText={setDescrição}
              />
            }
          </View>
        </View>
        <Text style={{ marginHorizontal: 129, fontSize: 15, textAlign: "justify", marginTop: 20, opacity: 0.5, }}>Produtos:</Text>
        <FlatList
          styles={{ marginBottom: 10, }}
          data={lista}
          renderItem={({ item }) => (
            <View style={styles.List}>
              <Text style={{ opacity: 0.5, }}>{item.texto}</Text>
            </View>
          )}
        />
        {funcaoTP ?
          <TouchableOpacity
            onPress={ativar3}
            style={styles.time}
          >
            <Text style={{ fontSize: 15, opacity: 0.8, marginTop: 10, }}>Tempo restante: {tempo}</Text>
          </TouchableOpacity>
          :
          <View style={styles.input}>
            <TextInput
              multiline
              placeholder="Quanto Falta?"
              onChangeText={setTempo}
            />
          </View>
        }
      </View>
      <View>
        <TouchableOpacity
          onPress={Salvar}
        >
          <View style={{ marginTop: 60,marginLeft: 29, backgroundColor: "#735702", justifyContent: "center", alignItems: "center", borderRadius: 10, height: 40, width: 250,}}>
            <Text style={{ fontSize: 25, color: "black", opacity: 0.6, }}>Salvar</Text>
          </View>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />


    </View>
  );
}

const styles = StyleSheet.create({
  bigBox: {
    backgroundColor: "#F2B705",
    width: "90%",
    height: 350,
    borderRadius: 40,
  },
  viewBox1: {
    flexDirection: "row",
    alignItems: "center",
    height: "20%"
  },
  List: {
    marginLeft: 40,
    marginBottom: 5,

  },
  time: {
    marginLeft: 40,
    marginBottom: 15,
    height: 45,
  },
  input: {
    marginLeft: 40,
    marginBottom: 15,
    height: 45,
  }
});
