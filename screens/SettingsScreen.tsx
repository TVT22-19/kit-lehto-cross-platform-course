import {View} from "react-native";
import {Switch, Text} from "react-native-paper";
import {useTheme} from "../context/ThemeContext";
import Styles from "../Styles";

export default function SettingsScreen() {

    const {isDarkMode, toggleDarkMode} = useTheme()
    const style = isDarkMode ? Styles.dark : Styles.light

    return (
        <View style={[Styles.container, style]}>
            <View style={Styles.switchContainer}>
                <Text style={[Styles.maxSizeText, style]}>Dark mode</Text>
                <Switch style={style} value={isDarkMode} onValueChange={toggleDarkMode}/>
            </View>
        </View>
    )
}