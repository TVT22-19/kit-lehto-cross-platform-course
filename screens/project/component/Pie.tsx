import {Card} from "react-native-paper";
import {PieChart} from "react-native-chart-kit";
import {DataValue} from "../../../service/types";
import {Styles} from "../../../styles";

export default function Pie(props: { title: string, width: number, height: number, data: DataValue }) {

    const colors = [
        "#e74c3c",
        "#2ecc71",
        "#3498db",
        "#e67e22",
        "#f1c40f",
    ]

    const mappedData = Object.entries(props.data).map((value, index) => ({
        name: value[0],
        count: value[1],
        color: colors[index % 5],
        legendFontColor: "#7F7F7F",
        legendFontSize: 15
    })).sort((a, b) => a.count - b.count).reverse()

    return (
        <Card style={[Styles.pieCardContainer]}>
            <Card.Title title={props.title}/>
            <Card.Content>
                <PieChart
                    data={mappedData}
                    width={props.width}
                    height={props.height}
                    chartConfig={{
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    }}
                    accessor="count"
                    backgroundColor="#fff"
                    paddingLeft="0"/>
            </Card.Content>
        </Card>
    )
}