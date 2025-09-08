import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        paddingTop:"-50%",
        flex: 1,
        backgroundColor: '#ff8080',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10,
    },

    titulo_container: {
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 20,

    },

    contener_person: {
        display: 'flex',
        flexDirection:"column",
        justifyContent: 'center',
        width: "90%"
    },

    contener_input: {
        width: '100%',
        gap: '5',
        flexDirection: "row",
        marginBottom: 20,
        justifyContent: "space-between"
    },

    text_titul: {
        fontSize: 28,
        fontWeight: "bold",
        color: "black",
        paddingBottom: 20,
        marginLeft:-100,
    },

    input: {
        flex: 1,
        textAlign: 'left',
        color: "black",
        borderWidth: 2,
        borderColor: "black",
        borderRadius: 8,
        backgroundColor:"black"
    },

    button: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
        borderRadius: 8,
        width: 45,
        height: 45,
    },

    buttonText: {
        fontSize: 17,
        color: "white",
    },

    area: {
        width:"100%",
        borderWidth:2,
        borderRadius:8,
        borderColor: "black",
        paddingBottom:"170%",
        paddingLeft:"3%",
    }

});
