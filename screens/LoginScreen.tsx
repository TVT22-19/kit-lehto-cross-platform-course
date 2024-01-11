import {View} from "react-native";
import {Button, TextInput} from "react-native-paper";
import {Styles} from "../styles";
import {useState} from "react";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../types";
import {useAuth} from "../hooks/useAuth";

interface LoginFormData {
    username: string,
    password: string
}

export default function LoginScreen({navigation}: NativeStackScreenProps<RootStackParamList>) {

    const {saveToken, isAuthorized} = useAuth()!!

    const [formData, setFormData] = useState<LoginFormData>({
        username: "",
        password: ""
    })

    const onLogin = () => {
        if (!formData || formData.password.length < 3 || formData.username.length < 3) return

        saveToken("token")

        navigation.replace("Projects")
    }

    return (isAuthorized ? <>{navigation.replace("Projects")}</> : <View style={Styles.container}>
            <TextInput placeholder="Username" error={formData.username.length < 3}
                       onChangeText={text => setFormData({
                           ...formData,
                           username: text
                       })} value={formData.username}/>
            <TextInput placeholder="Password" error={formData.password.length < 3}
                       onChangeText={text => setFormData({
                           ...formData,
                           password: text
                       })} value={formData.password} secureTextEntry/>
            <Button mode="contained" onPress={onLogin}>Login</Button>
        </View>
    )
}