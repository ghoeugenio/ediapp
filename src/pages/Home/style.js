import { StyleSheet } from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
    container: {
        backgroundColor: '#212121',
    },
    appbar: {
        backgroundColor: '#ffeb3b',
    },
    cump: {
        paddingTop: 30,
        color: '#fff',
        paddingLeft: 20,
        fontSize: 30
    },
    textDay: {
        paddingTop: 0,
        paddingLeft: 20,
        textAlign: 'left',
        color: '#ffeb3b',
        fontFamily: 'serif',
    },
    viewTitle: {
        backgroundColor: '#424242',
        position: 'relative',
        marginHorizontal: 50,
        borderRadius: 8,
        marginTop: 20,
    },
    textTitle: {
        margin: 20,
        color: '#ffeb3b',
        textAlign: 'center',
        fontSize: 20,
    },
    viewTraining: {

    },
    buttonGT: {
        flex: 1,
        marginHorizontal: 100,
        alignItems: 'center',
        backgroundColor: '#ffeb3b',
        borderRadius: 5,
        marginTop: 20,
    },
    buttonGText: {
        fontSize: 20,
        color: '#212121',
    },
    topo: {
        backgroundColor: '#101010',
        paddingTop: 60,
    }
});