import {StatusBar} from 'expo-status-bar';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useEffect, useState} from "react";

import * as Location from 'expo-location';
import {LocationAccuracy} from 'expo-location';

interface Weather {
    temp: number,
    description: string,
    icon: string
}

interface Cords {
    latitude: number,
    longitude: number
}

export default function App() {

    const cords = useCords()
    const weather = useWeather(cords)

    return (
        <View style={styles.container}>
            <Text style={{fontSize: 24}}>Current weather</Text>
            {cords && <Text>{cords.latitude.toFixed(3)}, {cords.longitude.toFixed(3)}</Text>}
            {weather ? <View style={{flexDirection: "row"}}>
                <View style={{flexDirection: "column"}}>
                    <Text>{weather?.temp} °C</Text>
                    <Text>{weather?.description}</Text>
                </View>
                {weather.icon && <Image source={{
                    uri: `https://openweathermap.org/img/wn/${weather?.icon}@2x.png`,
                    width: 48,
                    height: 48
                }}/>}
            </View> : <Text>Loading...</Text>}
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 16,
        alignItems: "center",
        justifyContent: "center"
    },
});


const useWeather = (cords: Cords | undefined) => {
    const [weather, setWeather] = useState<Weather>()

    useEffect(() => {
        if (!cords) {
            return
        }

        const url = "https://api.openweathermap.org/data/2.5" +
            "/weather?" +
            `lat=${cords.latitude}` +
            `&lon=${cords.longitude}` +
            "&units=metric" +
            "&appid=" + process.env.EXPO_PUBLIC_API_KEY

        console.log(url)

        fetch(url)
            .then(res => res.json())
            .then((json) => {
                console.log(json)
                setWeather({
                    temp: json.main.temp,
                    description: json.weather[0].description,
                    icon: json.weather[0].icon
                })
            })
    }, [cords]);

    return weather
}

const useCords = () => {

    const [cords, setCords] = useState<Cords>()

    useEffect(() => {
        (async () => {
            const {status} = await Location.requestForegroundPermissionsAsync()
            console.log(status)
            try {
                if (status !== "granted") return

                const position = await Location.getCurrentPositionAsync({accuracy: LocationAccuracy.High})
                setCords(position.coords)
            } catch (error) {
                console.log(error)
            }
        })()
    }, []);

    return cords
};