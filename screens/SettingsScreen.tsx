import {Text} from "react-native-paper";
import {View} from "react-native";
import {Picker} from "@react-native-picker/picker";
import {Dispatch} from "react";
import {MAP_TYPES, MapType} from "react-native-maps";

export default function SettingsScreen(props: { selectedType: MapType, setSelectedType: Dispatch<MapType> }) {
    return (
        <View style={{margin: 16}}>
            <Text>Map type</Text>
            <Picker selectedValue={props.selectedType} onValueChange={(item) => props.setSelectedType(item)}>
                {Object.values(MAP_TYPES).map(value => <Picker.Item key={value} label={value} value={value}/>)}
            </Picker>
        </View>
    )
}
