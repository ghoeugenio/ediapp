import React from 'react';

import { NavigationContainer, StackActions } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { StatusBar, Text, TouchableOpacity, Button, View } from 'react-native';

import { HomeStackNavigator, CadastroStackNavigator, FeedStackNavigator } from './navigation/StackNavigation';

import { Feather, FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {

    return (

        <Tab.Navigator
            tabBarOptions={{
                style: { backgroundColor: "#ffeb3b" }
            }}
        >

            <Tab.Screen
                name="Home"
                component={HomeStackNavigator}
                options={{
                    tabBarIcon: () => (
                        <FontAwesome name="home" size={26} color="#212121" />
                    ),
                }}
            />

            <Tab.Screen
                name="Feed"
                component={FeedStackNavigator}
                options={{
                    tabBarIcon: () => (
                        <FontAwesome name="feed" size={26} color="#212121" />
                    ),
                }}
            />

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

