import {StatusBar} from 'expo-status-bar';
import {Button, Image, Modal, StyleSheet, View} from 'react-native';
import {useState} from "react";

export default function App() {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(!modalVisible)}>
                <View style={styles.modalView}>
                    <Image source={{
                        uri: "https://i.pinimg.com/originals/8a/92/d2/8a92d20efb710b410b216cec4f204fad.jpg",
                        width: 250,
                        height: 250
                    }}/>
                    <Button title="Close" onPress={() => setModalVisible(!modalVisible)}/>
                </View>
            </Modal>

            <Button title="Open Modal" onPress={() => setModalVisible(true)}/>

            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    }
});
