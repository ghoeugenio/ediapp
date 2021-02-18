import React from 'react';

import { Text, View } from 'react-native';

import Menuzim, { Menuzin } from '../../navigation/StackNavigation';

const Feed = () => {

    return (
        <View style={{ flex: 1 }}>
            <Menuzin />
            <Text style={{ textAlign: 'center', paddingTop: 50 }}>
                Treino
            </Text>
        </View>
    );
}

export default Feed;