import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { StatusBar } from 'react-native';

import Home from './pages/Home';
import Cadastro from './pages/Cadastros';

const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <Drawer.Navigator
            drawerStyle={{
                backgroundColor: '#4C4A48',
                width: wp('50%'),
            }}
            drawerContentOptions={{
                activeTintColor: '#FFEB3B',
            }}
        >

            <Drawer.Screen name="Home" component={Home}></Drawer.Screen>
            <Drawer.Screen name="Cadastro" component={Cadastro}></Drawer.Screen>

        </Drawer.Navigator>
    );
}

export default function App() {
    return (

        <NavigationContainer>
            <StatusBar barStyle="light-content" hidden={false} backgroundColor="#101010" translucent={true} />
            <MyDrawer />
        </NavigationContainer>
    );
}

