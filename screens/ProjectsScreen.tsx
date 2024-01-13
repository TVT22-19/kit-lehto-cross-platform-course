import {FlatList, View} from "react-native";
import {Button, Text} from "react-native-paper";
import {Styles} from "../styles";
import {useUserProjects} from "../service/projects";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../types";
import {useAuth} from "../hooks/useAuth";
import {User} from "../service/types";
import base64 from 'react-native-base64'

export default function ProjectsScreen({navigation}: NativeStackScreenProps<RootStackParamList>) {

    const {token} = useAuth()!!

    const user = JSON.parse(base64.decode(token.split(".")[1])) as User

    const {data} = useUserProjects(user.id || 1)

    return (
        <View style={Styles.container}>
            {(data || []).length > 0 ? <FlatList data={data} renderItem={({item}) => (
                <Button style={Styles.buttonOuterMargin} mode="contained" onPress={() => {
                    navigation.navigate("Project", {
                        id: item.id
                    });
                }}>{item.name}</Button>
            )}/> : <Text style={Styles.noProjectsText}>You don't have any project</Text>}
        </View>
    )
}