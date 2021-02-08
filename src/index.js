import React from 'react';

import { NavigationContainer, StackActions } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { StatusBar, Text, TouchableOpacity, Button, View } from 'react-native';

import Home from './pages/Home';
import Cadastro from './pages/Cadastros';

const Stack = createStackNavigator();

function MyStack() {

    return (

        <Stack.Navigator>

            <Stack.Screen
                name="EDIAPP"
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
                    headerTintColor: '#000'
                }} />

        </Stack.Navigator>
    );
}

export default function App() {

    return (

        <NavigationContainer>

            <StatusBar
                barStyle="light-content"
                hidden={false}
                backgroundColor="#101010"
                translucent={true} />

            <MyStack />

        </NavigationContainer>
    );
}

