import {FlatList, View} from "react-native";
import {Button} from "react-native-paper";
import {Styles} from "../styles";
import {useUserProjects} from "../service/projects";

export default function ProjectsScreen() {

    const {data, status, error} = useUserProjects(1)

    return (
        <View style={Styles.container}>
            <FlatList data={data || []}
                      renderItem={({item}) => <Button style={{marginBottom: 8}} mode="contained">{item.name}</Button>}/>
        </View>
    )
}