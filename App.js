import { StatusBar } from 'expo-status-bar';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import jogo from "./src/pages/jogo";

const Stack = createNativeStackNavigator();


export default function App(){
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
        >
          <Stack.Screen name="jogo" component={jogo}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
}