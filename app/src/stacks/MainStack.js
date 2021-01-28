import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Preload from '../screens/Preload';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import MainTab from '../stacks/MainTab';

//CRIA UMA STACK
const Stack = createStackNavigator();

/*STACK NAVIGATOR (NAVEGADOR DE TELAS)
initialRouteName="" --> Tela Inicial da Aplicação
screenOptions={
  headerShown: false  --> Esconde o cabeçalho da tela    
}

//STACK SCREEN (TELAS)
name="" --> Nome da tela
component   --> Componente da tela
*/
export default () => {
    return (
        <Stack.Navigator
            initialRouteName="Preload"
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Preload" component={Preload} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="MainTab" component={MainTab} />
        </Stack.Navigator>
    );
}
