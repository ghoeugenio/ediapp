import React, { useState } from 'react';
import { Text, View, ScrollView, FlatList, SafeAreaView, TouchableOpacity } from "react-native";

import GradientButton from 'react-native-gradient-buttons';

import styles from './style';

const DATA = [
    {
        id: '1',
        title: 'ABC',
    },
    {
        id: '2',
        title: 'ABCD'
    },
    {
        id: '3',
        title: 'ABCDE',
    }
];

const Item = ({ item, onPress, style }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
        <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
);

const Cadastro = () => {

    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";

        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.id)}
                style={{ backgroundColor }}
            />
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>
                Escolha a rotina de treinos
            </Text>
            <View style={styles.botao}>
                <GradientButton
                    style={{ marginVertical: 8, marginTop: 20 }}
                    textStyle={{ fontSize: 30, color: '#212121' }}
                    gradientBegin="#ffff5d"
                    gradientEnd="#ffeb3b"
                    gradientDirection="diagonal"
                    height={80}
                    width={200}
                    radius={15}
                    impact
                    impactStyle='Light'
                    onPressAction={() => alert('You pressed me!')}
                >
                    A B C
                </GradientButton>

                <GradientButton
                    style={{ marginVertical: 8, marginTop: 20 }}
                    textStyle={{ fontSize: 30, color: '#212121' }}
                    gradientBegin="#ffff5d"
                    gradientEnd="#ffeb3b"
                    gradientDirection="diagonal"
                    height={80}
                    width={200}
                    radius={15}
                    impact
                    impactStyle='Light'
                    onPressAction={() => alert('You pressed me!')}
                >
                    A B C D
                </GradientButton>

                <GradientButton
                    style={{ marginVertical: 8, marginTop: 20 }}
                    textStyle={{ fontSize: 30, color: '#212121' }}
                    gradientBegin="#ffff5d"
                    gradientEnd="#ffeb3b"
                    gradientDirection="diagonal"
                    height={80}
                    width={200}
                    radius={15}
                    impact
                    impactStyle='Light'
                    onPressAction={() => alert('You pressed me!')}
                >
                    A B C D E
                </GradientButton>
            </View>

        </SafeAreaView>
    );
}

export default Cadastro;