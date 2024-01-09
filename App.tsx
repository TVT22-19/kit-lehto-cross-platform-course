import {StatusBar} from 'expo-status-bar';
import {Appbar, PaperProvider} from 'react-native-paper';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MapScreen from "./screens/MapScreen";
import SettingsScreen from "./screens/SettingsScreen";
import {useState} from "react";

import * as Location from 'expo-location';
import {LocationObject} from 'expo-location';
import {MapType} from "react-native-maps";

export default function App() {

    const [location, setLocation] = useState<LocationObject | undefined>();
    const [selectedType, setSelectedType] = useState<MapType>("standard")

    const Stack = createNativeStackNavigator();

    return (
        <PaperProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Map" screenOptions={{
                    header: (props) => (
                        <Appbar.Header>
                            {props.back ? <Appbar.BackAction onPress={() => props.navigation.goBack()}/> : null}
                            <Appbar.Content title={props.route.name}/>
                            {props.route.name === "Map" && <Appbar.Action icon="crosshairs-gps" onPress={async () => {
                                let {status} = await Location.requestForegroundPermissionsAsync();

                                if (status !== "granted") {
                                    return;
                                }

                                setLocation(await Location.getCurrentPositionAsync({}));
                            }}/>}
                            {props.route.name === "Map" && <Appbar.Action icon="cog" onPress={() => {
                                props.navigation.navigate("Settings");
                            }}/>}
                        </Appbar.Header>
                    )
                }}>
                    <Stack.Screen name="Map">
                        {props => <MapScreen {...props} location={location!} mapType={selectedType}/>}
                    </Stack.Screen>
                    <Stack.Screen name="Settings">
                        {props => <SettingsScreen {...props} selectedType={selectedType}
                                                  setSelectedType={setSelectedType}/>}
                    </Stack.Screen>
                </Stack.Navigator>
            </NavigationContainer>
            <StatusBar style="auto"/>
        </PaperProvider>
    )
}