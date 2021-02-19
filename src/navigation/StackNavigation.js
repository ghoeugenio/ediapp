import React, { useState } from "react";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";

import { TouchableOpacity } from "react-native-gesture-handler";
import { Menu, Provider, Text } from 'react-native-paper';

import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import Home from "../pages/Home";
import Cadastro from "../pages/Cadastros";
import Treinos from "../pages/Treinos";


const Stack = createStackNavigator();

const HomeStackNavigator = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen
                name="EDIAPP"
                component={Home}
                options={{
                    headerTitleAlign: 'center',
                    headerTintColor: '#212121',
                    headerStyle: { backgroundColor: '#ffeb3b' },
                }} />
        </Stack.Navigator>
    );
}

const TreinoStackNavigator = ({ navigation }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Treinos'
                component={Treinos}
                options={{
                    headerTitleAlign: 'center',
                    headerTintColor: '#212121',
                    headerStyle: { backgroundColor: '#ffeb3b' },
                    headerRight: () => (
                        <TouchableOpacity style={{ marginRight: 20 }} onPress={() => navigation.navigate('Novo Treino')}>
                            <AntDesign name="pluscircleo" size={24} color="black" />
                        </TouchableOpacity>
                    )
                }} />
            <Stack.Screen
                name="Novo Treino"
                component={Cadastro}
                options={{
                    headerTintColor: '#000',
                    headerTitleAlign: 'center',
                    headerStyle: { backgroundColor: '#ffeb3b' },
                    cardStyleInterpolator:
                        CardStyleInterpolators.forHorizontalIOS,
                }} />
        </Stack.Navigator>
    );
}

export { HomeStackNavigator, TreinoStackNavigator };