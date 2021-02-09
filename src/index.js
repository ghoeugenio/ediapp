import React from 'react';

import { NavigationContainer, StackActions } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { StatusBar, Text, TouchableOpacity, Button, View } from 'react-native';

import { HomeStackNavigator, CadastroStackNavigator } from './navigation/StackNavigation';

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
                    headerTintColor: '#000',
                    cardStyleInterpolator:
                        CardStyleInterpolators.forHorizontalIOS,
                }} />

        </Stack.Navigator>
    );
}

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeStackNavigator} />
            <Tab.Screen name="Cadastro" component={CadastroStackNavigator} />
        </Tab.Navigator>
    );
};

export default function App() {

    return (

        <NavigationContainer>

            <StatusBar
                barStyle="light-content"
                hidden={false}
                backgroundColor="#101010"
                translucent={true} />

            <BottomTabNavigator />

        </NavigationContainer>
    );
}

