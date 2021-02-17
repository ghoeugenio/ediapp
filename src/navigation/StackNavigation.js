import React from "react";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";

import { TouchableOpacity } from "react-native-gesture-handler";

import { Entypo } from '@expo/vector-icons';

import Home from "../pages/Home";
import Cadastro from "../pages/Cadastros";
import Treinos from "../pages/Treinos";
import Feed from "../pages/Feed";


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
                    headerRight: () => (
                        <TouchableOpacity
                            onPress={() => alert('bnutao')}
                            title='info'>
                            <Entypo style={{ marginRight: 4 }} name="dots-three-vertical" size={22} color="#212121" />

                        </TouchableOpacity>
                    )
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

const TreinoStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Treinos' />
        </Stack.Navigator>
    );
}

const FeedStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Feed"
                component={Feed} />
        </Stack.Navigator>
    );
}

export { HomeStackNavigator, CadastroStackNavigator, FeedStackNavigator };