import {StatusBar} from 'expo-status-bar';
import {Appbar, PaperProvider} from "react-native-paper";
import ThemeProvider, {useTheme} from "./context/ThemeContext";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import Styles from "./Styles";

export default function App() {

    const Stack = createNativeStackNavigator()

    return (
        <PaperProvider>
            <ThemeProvider>
                <NavigationContainer>
                    <StatusBar/>
                    <Stack.Navigator initialRouteName="Home" screenOptions={{
                        header: (props) => {
                            const {isDarkMode} = useTheme()
                            const style = isDarkMode ? Styles.dark : Styles.light
                            return (
                                <Appbar.Header style={style} dark={isDarkMode}>
                                    {props.back && <Appbar.BackAction onPress={() => props.navigation.goBack()}/>}
                                    <Appbar.Content title={props.route.name}/>
                                    {!props.back &&
                                        <Appbar.Action icon="cog"
                                                       onPress={() => props.navigation.navigate("Settings")}/>}
                                </Appbar.Header>
                            );
                        }
                    }}>
                        <Stack.Screen name="Home" component={HomeScreen}>
                        </Stack.Screen>
                        <Stack.Screen name="Settings" component={SettingsScreen}>
                        </Stack.Screen>
                    </Stack.Navigator>
                </NavigationContainer>
            </ThemeProvider>
        </PaperProvider>
    );
}