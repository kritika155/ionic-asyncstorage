import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        padding: 20
    },
    textHeader: {
        fontSize: 35,
        textAlign: 'center',
        margin: 10,
        color: '#2471A3'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#1A5276'
    },
    TextInputStyle: {
        textAlign: 'center',
        height: 40,
        width: '100%',
        borderWidth: 1,
        borderColor: '#2471A3',
        borderRadius: 10,
        color: '#1A5276'
    },
    button: {
        width: '100%',
        height: 40,
        padding: 10,
        backgroundColor: '#2471A3',
        borderRadius: 7,
        marginTop: 10
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
    },
});