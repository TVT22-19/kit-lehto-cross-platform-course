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

    const {data} = useUserProjects(1)

    const {token} = useAuth()!!

    const user = JSON.parse(base64.decode(token.split(".")[1])) as User

    return (
        <View style={Styles.container}>
            <Text style={{textAlign: "center", fontSize: 18, fontWeight: "bold"}}>Project owned
                by: {user.username}</Text>
            <FlatList data={data || []}
                      renderItem={({item}) => (
                          <Button style={{marginBottom: 8}} mode="contained" onPress={() => {
                              navigation.navigate("Project", {
                                  id: item.id
                              })
                          }}>{item.name}</Button>
                      )}/>
        </View>
    )
}