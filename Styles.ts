import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    },
    light: {
        backgroundColor: "#f5f5f5",
        color: "#333"
    },
    dark: {
        backgroundColor: "#333",
        color: "#f5f5f5"
    },
    switchContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    maxSizeText: {
        flexGrow: 1
    }
})