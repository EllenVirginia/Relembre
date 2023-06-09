import { StyleSheet, Text, View, } from 'react-native';

export function Relembre() {

    return (
        <View style={styles.Relembre}>
            <Text style={styles.text1}>Re|Lembre</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    Relembre: {
        justifyContent: "center",
        alignItems:"center" ,
        marginBottom: 15,
        marginLeft: 130,
    },
    text1: {
        fontSize: 25,
    },
});
