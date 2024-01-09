import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import {Appbar, Button, PaperProvider, TextInput} from "react-native-paper";
import {useState} from "react";

interface User {
    login: string,
    password: string
}

export default function App() {

    const [isError, setIsError] = useState(false)
    const [formData, setFormData] = useState<User>({
        login: "",
        password: ""
    })

    const validateAndSubmit = () => {
        setIsError(true)
        if (formData.login.length > 0 && formData.password.length > 8) {
            setFormData({
                login: "",
                password: ""
            })
            setIsError(false)
        }
    }

    return (
        <PaperProvider>
            <Appbar.Header mode="center-aligned" elevated={true}>
                <Appbar.Content title="Login Page"/>
            </Appbar.Header>
            <View style={styles.container}>
                <TextInput label="Login" value={formData.login} onChangeText={text => setFormData({
                    ...formData,
                    login: text
                })} error={formData.login.length < 8 && isError}/>
                <TextInput label="Password" value={formData.password} onChangeText={text => setFormData({
                    ...formData,
                    password: text
                })} error={formData.password.length < 8 && isError} secureTextEntry/>
                <Button mode="contained" onPress={validateAndSubmit}>Authorize</Button>
            </View>
            <StatusBar style="auto"/>
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        gap: 16
    }
})