import {View} from "react-native";
import {Button, TextInput} from "react-native-paper";
import {Styles} from "../styles";
import {useState} from "react";
import {useAuth} from "../hooks/useAuth";
import {useLogin} from "../service/auth";
import {User} from "../service/types";

export default function LoginScreen() {

    const {saveToken} = useAuth()!!

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [user, setUser] = useState<User>()

    const loginMutation = useLogin()

    if (loginMutation.status === "error" && user) {
        console.log(`Error: ${loginMutation.error.message}`)
        setUser(undefined)
    }

    if (loginMutation.status === "success" && user) {
        console.log(`Token: ${loginMutation.data.token}`)
        saveToken(loginMutation.data.token)
        setUser(undefined)
    }

    const onLogin = () => {
        if (username.trim().length < 3) {
            console.log(`Username: ${username}`)
            return
        }

        if (password.trim().length < 3) {
            console.log(`Password: ${password}`)
            return
        }

        console.log("Defined")

        setUser({username, password})

        loginMutation.mutate({
            username: username,
            password: password
        })
    }

    return (
        <View style={Styles.container}>
            <TextInput placeholder="Username" value={username}
                       onChangeText={text => setUsername(text)}/>
            <TextInput placeholder="Password" value={password}
                       onChangeText={text => setPassword(text)} secureTextEntry/>
            <Button mode="contained" onPress={onLogin} disabled={loginMutation.status === "loading"}>
                {loginMutation.status === "loading" ? "Loading..." : "Login"}
            </Button>
        </View>
    )
}