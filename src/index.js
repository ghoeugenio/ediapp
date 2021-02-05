import * as React from 'react';

import { NavigationContainer, DrawerActions, useNavigation } from '@react-navigation/native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';

import { Appbar } from 'react-native-paper';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { StatusBar, Text, TouchableOpacity, Button, View } from 'react-native';

import Home from './pages/Home';
import Cadastro from './pages/Cadastros';
import style from './pages/Home/style';

const Drawer = createDrawerNavigator();

function Feed({ navigation }) {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Feed Screen</Text>
            <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
            <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
        </View>
    );
}

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem
                label="Close drawer"
                onPress={() => props.navigation.closeDrawer()}
            />
            <DrawerItem
                label="Toggle drawer"
                onPress={() => props.navigation.toggleDrawer()}
            />
        </DrawerContentScrollView>
    );
}

function MyDrawer() {
    return (
        <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Cadastro" component={Feed} />
        </Drawer.Navigator>
    );
}

function Bar({ navigation }) {

    return (
        <Appbar.Header style={style.appbar}>

            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
                <Text>Botao</Text>
            </TouchableOpacity>

        </Appbar.Header>
    );
}


export default function App() {

    return (

        <NavigationContainer>

            <StatusBar barStyle="light-content" hidden={false} backgroundColor="#101010" translucent={true} />

            <Bar />

            <MyDrawer />

        </NavigationContainer>
    );
}

