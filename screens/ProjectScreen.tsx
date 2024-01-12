import {Dimensions, View} from "react-native";
import {Text} from "react-native-paper";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../types";
import {Styles} from "../styles";
import {LineChart} from "react-native-chart-kit";
import {useLineMetric} from "../service/metrics";

export default function ProjectScreen({route}: NativeStackScreenProps<RootStackParamList, "Project">) {

    const {id} = route.params

    const {data} = useLineMetric(id!)

    const labels: string[] = Object.keys(data?.metric_line || [])

    const datas: number[] = Object.values(data?.metric_line || []);

    return (
        <View style={Styles.container}>
            <Text>Project: {id}</Text>
            {(datas.length > 0 && labels.length > 0) && <LineChart
                chartConfig={{
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    backgroundColor: "#e26a00",
                    backgroundGradientFrom: "#fb8c00",
                    backgroundGradientTo: "#ffa726",
                    decimalPlaces: 0,
                }}
                withDots={false}
                withInnerLines={false}
                withOuterLines={false}
                verticalLabelRotation={110}
                fromZero
                bezier
                segments={5}
                style={{
                    borderRadius: 16
                }}
                data={{
                    labels: labels.slice(labels.length - 51, labels.length - 1),
                    datasets: [
                        {
                            data: datas.slice(datas.length - 51, datas.length - 1)
                        }
                    ]
                }}
                width={Dimensions.get("window").width - 32}
                height={220}
            />}
        </View>
    )
}