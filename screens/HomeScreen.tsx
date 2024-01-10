import {useTheme} from "../context/ThemeContext";
import {View} from "react-native";
import {Text} from "react-native-paper";
import Styles from "../Styles";

export default function HomeScreen() {

    const {isDarkMode} = useTheme()
    const style = isDarkMode ? Styles.dark : Styles.light

    return (
        <View style={[Styles.container, style]}>
            <Text style={style}>Wellcome to home</Text>
        </View>
    )
}