import React from 'react';

import { SafeAreaView, ScrollView } from 'react-native';

import { Home_Styles, Home_Text } from './style';

export default function Home() {

    var semana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
    var d = new Date();

    return (
        //<SafeAreaView>
        <Home_Styles>
            <Home_Text>
                {semana[d.getDay()]}
            </Home_Text>
        </Home_Styles>
        //</SafeAreaView>

    );
}