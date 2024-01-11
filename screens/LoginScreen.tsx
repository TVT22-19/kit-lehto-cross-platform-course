import {View} from "react-native";
import {Button, TextInput} from "react-native-paper";
import {Styles} from "../styles";
import {useState} from "react";

interface LoginFormData {
    username: string,
    password: string
}

export default function LoginScreen() {

    const [formData, setFormData] = useState<LoginFormData>()

    const onLogin = () => {
        if (!formData || formData?.password.length < 2 || formData?.username.length < 2) return
        // TODO Authorization
    }

    return (
        <View style={Styles.container}>
            <TextInput placeholder="Username"/>
            <TextInput placeholder="Password" secureTextEntry/>
            <Button mode="contained" onPress={onLogin}>Login</Button>
        </View>
    )
}