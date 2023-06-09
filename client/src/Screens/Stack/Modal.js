import { Alert, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Button, FlatList, TextInput } from 'react-native';
import { Top_Half } from '../../Componentes/Home_Componentes/Top_Half';
import { AdicionarItem } from "/Projects/Relembre/client/src/Componentes/Modal_Componentes/AdicionarItem";
import { NovosItens } from "/Projects/Relembre/client/src/Componentes/Modal_Componentes/NovosItens";
import React, { useState, useEffect } from 'react';
import { Button2 } from "/Projects/Relembre/client/src/Componentes/Modal_Componentes/Button2";
import { useNavigation, NavigationContainer } from '@react-navigation/native';

export function Modal({ navigation, route }) {

    const { box, addElement, } = route.params;
    const navigation2 = useNavigation();
    const [texto, setTexto] = useState('PlaceHolder');
    const [tempo, setTempo] = useState('PlaceHolder');
    const [descricao, setDescricao] = useState('PlaceHolder');
    const [lista, setLista] = useState([
        { texto: 'Teste 1', key: '1' },
    ]);

    const AlterarDescricao = (valor) => {
        setDescricao(valor)
    }

    const AlterarTempo = (valor) => {
        setTempo(valor)
    }

    const AlterarTexto = (valor) => {
        setTexto(valor);
    }
    
    const apertarItem = (key) => {
        setLista(
            (prevLista) => {
                return prevLista.filter(texto => texto.key != key);
            }
        )
    };

    const submeterInformacao = (texto) => {
        setLista((prevLista) => {
            return [
                { texto: texto, key: Math.random().toString() },
                ...prevLista
            ]
        })
    }

    const adicionarElemento = (Text,descricao,tempo,lista) => {
        addElement(Text,descricao,tempo,lista)
        navigation2.navigate('Inicio',{
            lista: lista,
            tempo: tempo,
            descricao: descricao,
        })
    }

    return (
        <View style={styles.container}>
            <Top_Half />
            <View style={styles.box}>
                <View style={styles.listaInput}>
                    <TextInput
                        style={styles.input}
                        placeholder="Título do Lembrete"
                        onChangeText={AlterarTexto}
                    />
                    
                    <TextInput
                        style={styles.input}
                        placeholder="Descrição"
                        onChangeText={AlterarDescricao}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Tempo até os Produtos Esgotarem"
                        onChangeText={AlterarTempo}
                    />
                </View>
                <AdicionarItem funcao={submeterInformacao} />
                <View>
                    <FlatList
                        data={lista}
                        renderItem={({ item }) => (
                            <NovosItens props={item} funcao={apertarItem} />
                        )}
                    />
                </View>
            </View>

            <Button2 
            titulo={texto} 
            descricao={descricao}
            tempo={tempo}
            lista={lista}
            adicionarElemento={adicionarElemento}
            />
            <StatusBar style="auto" />
        </View>
    );
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white',
        
    },
    box: {
        padding: 15,
        height: 300,
        marginBottom: 70,

    },
    listaInput: {
        marginBottom: 15, 
    },

    input:{
        marginTop: 5,
        borderBottomWidth: 0.5,
        borderBottomColor: '#735702',
        borderStyle: "dashed",
        alignItems: "flex-start",


    }

});