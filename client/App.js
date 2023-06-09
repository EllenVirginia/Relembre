import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { Home } from "./src/Screens/Stack/Home";
import { Details } from "./src/Screens/Stack/Details"
import { Modal } from "./src/Screens/Stack/Modal"


const Stack = createStackNavigator();
const RootStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen
          name="Inicio"
          component={Home}
          options={{ headerShown: false }}
          initialParams={{
            descricao: "descricao",
            tempo: "Tempo estimado",
            lista: [{ texto: 'Teste 1', key: '1' },]
          }}
        />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen options={{ headerShown: false }} name="Modal" component={Modal} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>

  );
}



const styles = StyleSheet.create({
});
