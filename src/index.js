import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from './pages/Home';
import Cadastro from './pages/Cadastros';

const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <Drawer.Navigator drawerStyle={{
            backgroundColor: '#4C4A48',
            width: 240,
        }}>

            <Drawer.Screen name="Home" component={Home}></Drawer.Screen>
            <Drawer.Screen name="Cadastro" component={Cadastro}></Drawer.Screen>

        </Drawer.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <MyDrawer />
        </NavigationContainer>
    );
}

