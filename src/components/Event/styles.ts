import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    contener: {
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    },

    textEvent: {
        display: "flex",
        alignItems: "center",
        flex: 1,
        textAlign: "left",
        fontSize: 16,
        color: "black",
        padding: 10,
        gap:15,
        borderBottomWidth: 1,
        borderBottomColor:"black"
    },

    button: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f10ded",
        borderRadius: 8,
        width: 45,
        height: 45,
    },

    buttonText: {
        fontSize: 17,
        color: "white",
    }

})