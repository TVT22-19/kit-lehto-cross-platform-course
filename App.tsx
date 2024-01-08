import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {useEffect, useState} from "react";

interface HeartRate {
    lower: string,
    upper: string
}

export default function App() {

    const [ageString, setAgeString] = useState("")
    const [heartRate, setHeartRate] = useState<HeartRate>({
        lower: "",
        upper: ""
    })

    useEffect(() => {
        const age = Number(ageString)
        return age > 0 ? setHeartRate({
            lower: ((220 - age) * 0.65).toFixed(),
            upper: ((220 - age) * 0.85).toFixed()
        }) : setAgeString("");
    }, [ageString])

    return (
        <View style={styles.container}>
            <TextInput style={styles.input}
                       placeholder="Enter your age"
                       defaultValue="0"
                       value={ageString}
                       onChangeText={text => setAgeString(text)}
                       keyboardType="numeric"/>
            {ageString !== "" && <Text>{heartRate.lower}-{heartRate.upper}</Text>}
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        gap: 8
    },
    input: {
        borderColor: "gray",
        width: "50%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    },
});