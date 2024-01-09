import {Pressable, StyleSheet, Text} from "react-native";
import {RowProps} from "./types";

export default function Row(props: RowProps) {

    const backgroundColor = props.student.id === props.selectedId ? "#c0c0c0" : "#f5f5f5"

    return (
        <Pressable onPress={() => props.select(props.student.id)}>
            <Text style={[styles.listText, {backgroundColor}]}>
                {props.student.firstname}, {props.student.lastname}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    listText: {
        padding: 8,
        margin: 8
    }
})