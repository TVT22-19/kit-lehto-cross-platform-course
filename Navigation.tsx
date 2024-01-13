import {Appbar} from "react-native-paper";
import LoginScreen from "./screens/LoginScreen";
import ProjectsScreen from "./screens/ProjectsScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {RootStackParamList} from "./types";
import {useAuth} from "./hooks/useAuth";
import {View} from "react-native";
import ProjectScreen from "./screens/project/ProjectScreen";

export function Navigation() {

    const Stack = createNativeStackNavigator<RootStackParamList>()

    const {clearToken, isAuthorized} = useAuth()!!

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                header: (props) => <Appbar.Header mode="center-aligned">
                    {props.back && <Appbar.BackAction onPress={() => props.navigation.goBack()}/>}
                    <Appbar.Content title={props.route.name}/>
                    {isAuthorized && <Appbar.Action icon="logout" onPress={() => clearToken()}/>}
                </Appbar.Header>
            }}>
                {
                    isAuthorized !== undefined ? isAuthorized ? <>
                        <Stack.Screen name="Projects" component={ProjectsScreen}/>
                        <Stack.Screen name="Project" component={ProjectScreen} initialParams={{id: undefined}}/>
                    </> : <>
                        <Stack.Screen name="Login" component={LoginScreen}/>
                    </> : <View/>
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}