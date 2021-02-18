import React, { useState } from "react";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";

import { TouchableOpacity } from "react-native-gesture-handler";
import { Menu, Provider } from 'react-native-paper';

import { Entypo } from '@expo/vector-icons';

import Home from "../pages/Home";
import Cadastro from "../pages/Cadastros";
import Treinos from "../pages/Treinos";
import Feed from "../pages/Feed";


const Stack = createStackNavigator();

const Menuzin = () => {

    const [visible, setVisible] = useState(false);

    const toogleMenu = () => {
        if (!visible) {
            setVisible(true)
        }
        else {
            setVisible(false)
        }
    }

    return (
        <Provider>
            <Menu
                visible={visible}
                anchor={
                    <TouchableOpacity
                        onPress={() => toogleMenu()}
                        title='info'>
                        <Entypo style={{ marginRight: 4 }} name="dots-three-vertical" size={18} color="#212121" />
                    </TouchableOpacity>}>

                <Menu.Item onPress={() => alert('opcao um')} title={'opcao um'} />
                <Menu.Item onPress={() => alert('opcao dois')} title={'opcao dois'} />
            </Menu>
        </Provider>

    );

}

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
                        <Menuzin />
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

export { HomeStackNavigator, CadastroStackNavigator, FeedStackNavigator, TreinoStackNavigator, Menuzin };