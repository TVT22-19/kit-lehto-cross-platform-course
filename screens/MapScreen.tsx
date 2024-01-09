import MapView, {MapType, Marker} from "react-native-maps";
import {StyleSheet} from "react-native";
import {LocationObject} from "expo-location";

export default function MapScreen(props: { location: LocationObject, mapType: MapType }) {
    return (
        <MapView style={styles.map} region={{
            latitude: props.location?.coords?.latitude || 27,
            longitude: props.location?.coords?.longitude || -211,
            longitudeDelta: 0.001,
            latitudeDelta: 0.001
        }} mapType={props.mapType}>
            {props.location && <Marker coordinate={props.location.coords}/>}
        </MapView>
    )
}

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%',
    },
});
