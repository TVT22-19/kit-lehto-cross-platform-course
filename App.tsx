import {Appbar, PaperProvider} from "react-native-paper";
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "./screens/LoginScreen";


export default function App() {

    const Stack = createNativeStackNavigator()

    return (
        <PaperProvider>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{
                    header: (props) => <Appbar.Header mode="center-aligned">
                        <Appbar.Content title={props.route.name}/>
                    </Appbar.Header>
                }}>
                    <Stack.Screen name="Login" component={LoginScreen}/>
                    {/*<Stack.Screen name="Projects" component={}/>*/}
                    {/*<Stack.Screen name="Project" component={} initialParams={{ id: undefined }}/>*/}
                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
}