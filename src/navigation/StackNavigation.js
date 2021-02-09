import React from "react";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";

import Home from "../pages/Home";
import Cadastro from "../pages/Cadastros";

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen name="EDIAPP"
                component={Home}
                options={{
                    headerTitleAlign: 'center',
                    headerTintColor: '#212121',
                    headerStyle: { backgroundColor: '#ffeb3b' }
                }} />
            <Stack.Screen
                name="Cadastro"
                component={Cadastro}
                options={{
                    headerTintColor: '#000',
                    cardStyleInterpolator:
                        CardStyleInterpolators.forHorizontalIOS,
                }} />
        </Stack.Navigator>
    );
}

const CadastroStackNavigator = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen
                name="Cadastro"
                component={Cadastro}
                options={{
                    headerTintColor: '#000',
                    cardStyleInterpolator:
                        CardStyleInterpolators.forHorizontalIOS,
                }} />
        </Stack.Navigator>
    );
}

export { HomeStackNavigator, CadastroStackNavigator };