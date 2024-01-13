import {Dimensions, ScrollView, View} from "react-native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../types";
import {usePieMetric} from "../../service/metrics";
import {Styles} from "../../styles";
import Pie from "./component/Pie";
import {DataValue} from "../../service/types";
import {Card} from "react-native-paper";

export default function ProjectScreen({route}: NativeStackScreenProps<RootStackParamList, "Project">) {

    const {id} = route.params

    const width = Number((Dimensions.get("window").width - 32).toFixed())
    const height = 220

    const {data} = usePieMetric(id!)

    return (
        <View style={Styles.container}>
            <ScrollView>
                <Card>
                    <Card.Cover source={{
                        uri: `https://img.fstats.dev/timeline/${id}?theme=light&format=png&mode=week&width=${width}&height=${height - 16}`
                    }} width={width} height={height}/>
                </Card>
                {data && <>
                    <Pie data={data.metric_pie.minecraft_version} title="Minecraft Version" width={width}
                         height={height}/>
                    <Pie data={formatOnlineMode(data.metric_pie.online_mode)} title="Online Mode" width={width}
                         height={height}/>
                    <Pie data={data.metric_pie.mod_version} title="Mod Version" width={width} height={height}/>
                    <Pie data={formatOperationSystem(data.metric_pie.os)} title="Operation System" width={width}
                         height={height}/>
                    <Pie data={data.metric_pie.location} title="Location" width={width} height={height}/>
                    <Pie data={data.metric_pie.fabric_api_version} title="Fabric API" width={width} height={height}/>
                </>}
            </ScrollView>
        </View>
    )
}

const formatOnlineMode = (data: DataValue) => (Object.fromEntries(
    Object.entries(data).map(([value, count]) => {
        if (value === "true") value = "Online";
        if (value === "false") value = "Offline";
        return [value, count];
    })
) as DataValue);

const formatOperationSystem = (data: DataValue) => (Object.fromEntries(
    Object.entries(data).map(([value, count]) => {
        if (value === 'l') value = "Linux"
        if (value === 'm') value = "MacOS"
        if (value === 'w') value = "Windows"
        if (value === 'o') value = "Other"
        return [value, count];
    })
) as DataValue);