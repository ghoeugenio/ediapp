import { StyleSheet } from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
    container: {
        backgroundColor: '#212121',
    },
    text: {
        textAlign: 'center',
        color: '#ffeb3b',
        padding: 60,
        fontFamily: 'serif',
    }
});