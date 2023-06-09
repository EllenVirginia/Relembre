import { StyleSheet, Text, View, } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export function Config() {

    return (
        <View>
            <View style={styles.top}>
                <Ionicons name="settings-sharp" size={45} color="black" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    top: {
        marginTop: 35,
        width: "90%",
        height: 80,
        justifyContent: "flex-start",
        marginLeft: 15,
        marginHorizontal: 20,
    },
});
