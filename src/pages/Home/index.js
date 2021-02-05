import React from 'react';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';


import styles from './style';

export default function Home() {

    var semana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
    var mes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
    var hora = ["Bom dia", "Boa tarde", "Boa noite"];
    var d = new Date();

    function cump() {
        if ((d.getUTCHours() >= 9) && (d.getUTCHours() < 16)) {
            return hora[0];
        }
        else if ((d.getUTCHours() >= 16) && (d.getUTCHours() < 21)) {
            return hora[1];
        }
        else {
            return hora[2];
        }
    }


    return (
        <ScrollView style={styles.container}>

            <View>
                <Text style={styles.cump}>
                    {cump()}
                </Text>

                {/*<Text style={styles.textDay}>
                     {semana[d.getDay()]}, {d.getDate()} de {mes[d.getUTCMonth()]} de {d.getUTCFullYear()}
                </Text>*/}
            </View>

            <View style={styles.viewTitle}>
                <Text style={styles.textTitle}>
                    HOJE É PEITO & TRÍCEPS
                </Text>
            </View>

            <TouchableOpacity style={styles.buttonGT}>
                <Text style={styles.buttonGText}>
                    GERAR TREINO
                    </Text>
            </TouchableOpacity>

            <ScrollView style={styles.viewTraining}>
                <Text></Text>
            </ScrollView>

        </ScrollView>
    );
}