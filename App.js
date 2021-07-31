import * as React from 'react';
import {Button, View, StyleSheet, PermissionsAndroid} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import firebase from "firebase/app";
import { firebaseConfig } from "./config";
import {SafeAreaProvider} from "react-native-safe-area-context/src/SafeAreaContext";
import {useEffect, useState} from "react";
import { StatusBar } from 'expo-status-bar';
import Map from './Map'
import SearchBar from "./SearchBar";
import {LoginScreen, RegisterScreen, ResetPasswordScreen, StartScreen} from "./screens";
import AuthLoadingScreen from "./screens/AuthLoadingScreen";

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

function HomeScreen({ navigation }) {
    const [pointCoordinates, setPointCoordinates] = useState([])
    console.log(pointCoordinates)
    return (
       <View style={styles.container}>
           <StatusBar style="auto"/>
           <Map pointCoordinates={pointCoordinates}/>
           <SearchBar setPointCoordinates={setPointCoordinates} />
       </View>
    );
}


function NotificationsScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button onPress={() => navigation.goBack()} title="Go back home" />
        </View>
    );
}

const Drawer = createDrawerNavigator();

export default function App() {
    async function requestLocationPermission() {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("You can use the location");
                alert("Can I use location?");
            } else {
                console.log("location permission denied");
                alert("Location permission denied");
            }
        } catch (err) {
            console.warn(err);
        }
    }

    useEffect(() => {
        requestLocationPermission().then(r => console.log(r))
    })
    return (
        <SafeAreaProvider>
            <NavigationContainer style={styles.navigation}>
                <Drawer.Navigator initialRouteName="AuthLoadingScreen">
                    <Drawer.Screen name="AuthLoadingScreen" component={AuthLoadingScreen}/>
                    <Drawer.Screen name="Map" component={HomeScreen} />
                    <Drawer.Screen name="Notifications" component={NotificationsScreen} />
                    <Drawer.Screen name="StartScreen" component={StartScreen} />
                    <Drawer.Screen name="LoginScreen" component={LoginScreen} />
                    <Drawer.Screen name="RegisterScreen" component={RegisterScreen} />
                    <Drawer.Screen name="ResetPasswordScreen" component={ResetPasswordScreen} />
                </Drawer.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    navigation: {
        position: "absolute",
        top: -300,
        backgroundColor: "red"
    },
    container: {
        marginTop: 50
    }
})