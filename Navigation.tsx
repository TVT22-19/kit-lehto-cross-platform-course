import {Appbar} from "react-native-paper";
import LoginScreen from "./screens/LoginScreen";
import ProjectsScreen from "./screens/ProjectsScreen";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {RootStackParamList} from "./types";
import {useAuth} from "./hooks/useAuth";

export function Navigation() {

    const Stack = createNativeStackNavigator<RootStackParamList>()

    const {clearToken, isAuthorized} = useAuth()!!

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login"
                             screenOptions={{
                                 header: (props) => <Appbar.Header mode="center-aligned">
                                     <Appbar.Content title={props.route.name}/>
                                     {isAuthorized && <Appbar.Action icon="logout" onPress={() => {
                                         props.navigation.replace("Login")
                                         clearToken();
                                     }}/>}
                                 </Appbar.Header>
                             }}>
                <Stack.Screen name="Login" component={LoginScreen}/>
                <Stack.Screen name="Projects" component={ProjectsScreen}/>
                {/*<Stack.Screen name="Project" component={LoginScreen} initialParams={{id: undefined}}/>*/}
            </Stack.Navigator>
        </NavigationContainer>
    )
}