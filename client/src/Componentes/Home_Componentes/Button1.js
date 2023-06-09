import { StyleSheet, View, TouchableOpacity, } from 'react-native';
import React, { useState, useTransition, useEffect } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation, NavigationContainer } from '@react-navigation/native';

export function Button1({ box, addElement,}) {

    const navigation = useNavigation();

    return (
        <View>
            <TouchableOpacity style={styles.add}
                onPress={() => navigation.navigate('Modal',{
                    box: box,
                    addElement: addElement,
                })}
            >
                <Ionicons name="md-add-circle" size={70} color="#735702" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    add: {
        marginBottom: 40,
        borderRadius: 50,
        marginTop: 10,
    },
});
