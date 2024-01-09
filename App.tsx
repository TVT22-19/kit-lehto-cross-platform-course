import {StatusBar} from 'expo-status-bar';
import {FlatList, StyleSheet, View} from 'react-native';
import {useEffect, useState} from "react";
import {Appbar, PaperProvider, Searchbar} from "react-native-paper";
import Row from "./components/Row";
import {Student} from "./types";

export default function App() {

    const [items, setItems] = useState<Student[]>(students)
    const [selectedId, setSelectedId] = useState<number | undefined>()
    const [filtered, setFiltered] = useState<Student[]>()
    const [searchRequest, setSearchRequest] = useState("")

    useEffect(() => {
        setFiltered(items.filter(value => value.firstname.includes(searchRequest) || value.lastname.includes(searchRequest)))
    }, [searchRequest])

    return (
        <PaperProvider>
            <Appbar.Header mode="center-aligned" elevated>
                <Appbar.Content title="List Page"/>
            </Appbar.Header>
            <View style={styles.container}>
                <Searchbar value={searchRequest} onChangeText={text => setSearchRequest(text)}/>
                <FlatList data={filtered} keyExtractor={item => item.id.toString()}
                          extraData={selectedId} renderItem={({item}) =>
                    <Row student={item} selectedId={selectedId!} select={(id) => setSelectedId(id)}/>
                }/>
            </View>
            <StatusBar style="auto"/>
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        gap: 16
    }
})

const students = [
    {
        id: 1,
        firstname: "Kit",
        lastname: "Lehto"
    }, {
        id: 2,
        firstname: "John",
        lastname: "Smith"
    }, {
        id: 3,
        firstname: "August",
        lastname: "Roundel"
    },
]