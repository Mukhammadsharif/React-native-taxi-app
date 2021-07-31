import React, {useState} from "react";
import { StyleSheet, View} from "react-native";
import {StatusBar} from "expo-status-bar";
import Button from "../components/Button";
import {logOut} from "../api/auth-api";
import Map from "../Map";
import SearchBar from "../SearchBar";

export default function HomeScreen() {
    const [pointCoordinates, setPointCoordinates] = useState([])
    console.log(pointCoordinates)
    return(
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.container}>
                <StatusBar style="auto"/>
                <Map pointCoordinates={pointCoordinates}/>
                <SearchBar setPointCoordinates={setPointCoordinates} />
            </View>
            <Button
            mode="outlined"
            onPress={() => logOut()}
            >Log out</Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40
    },
    content: {
        padding: 40,
    },
    list: {
        marginTop: 20,
    }
});