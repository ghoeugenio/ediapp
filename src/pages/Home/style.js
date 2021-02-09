import { StyleSheet } from 'react-native';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
    container: {
        backgroundColor: '#212121',
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
        alignItems: 'center',
    },
    topo: {
        backgroundColor: '#101010',
        paddingTop: 60,
    }
});