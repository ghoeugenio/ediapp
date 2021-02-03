import React from 'react';
import { ScrollView, Text } from 'react-native';

import styles from './style';

export default function Home() {

    var semana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
    var d = new Date();

    return (
        //<SafeAreaView>
        <ScrollView style={styles.container}>
            <Text style={styles.text}>
                {semana[d.getDay()]}
            </Text>
        </ScrollView>
        //</SafeAreaView>

    );
}