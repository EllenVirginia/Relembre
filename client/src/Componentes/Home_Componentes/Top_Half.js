import { StyleSheet, Text, View, } from 'react-native';
import { Config } from './Config';
import { Relembre } from './Relembre';

export function Top_Half() {

    return (
        <View style={styles.general}>
            <Config/>
            <Relembre/>
        </View>
    );
}

const styles = StyleSheet.create({
    general: {
        flexDirection: "row",
        height: 180,
        width: "100%",
    }
});
