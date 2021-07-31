import React, {useState} from "react";
import MapView, {Marker, Polyline} from 'react-native-maps';
import {StyleSheet, View} from "react-native";
import Geolocation from '@react-native-community/geolocation';


const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
        height: 800,
        marginRight: -20
    },
});

export default function MyApp({pointCoordinates}) {
    const [latitude, setLatitude] = useState(37.78825)
    const [longitude, setLongitude] = useState(-122.4324)


    Geolocation.getCurrentPosition(data =>{
        setLatitude(data.coords.latitude)
        setLongitude(data.coords.longitude)
    });
        return (
            <View style ={styles.container}>
                <MapView
                    style={styles.map}
                    region={{
                        latitude: latitude,
                        longitude: longitude,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                    showsUserLocation={true}
                >
                    <Marker
                        coordinate={{ latitude : latitude , longitude : longitude }}
                        title="Я"
                        description="Моё местоподлжение"
                    />
                    <Polyline
                        coordinates={pointCoordinates}
                        strokeWidth={8}
                        strokeColor="red"
                    />
                </MapView>
            </View>
        );
}