import React, {useState} from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {StyleSheet, View, Text, Button} from "react-native";
import PolyLine from "@mapbox/polyline";

const styles = StyleSheet.create({
    searchInput: {
        position: "absolute",
        bottom: -300,
        backgroundColor: "red",
    }
})

export default function GoogleMapsPlacesInput({setPointCoordinates}) {
    const [addressNameFrom, setAddressNameFrom] = useState()
    const [addressNameTo, setAddressNameTo] = useState()
    const [addressFrom, setAddressFrom] = useState({})
    const [addressTo, setAddressTo] = useState({})
    console.log(addressTo)

    const api_key = 'AIzaSyBIbvODfdRDkwP6U_w6nABU5Z6BIxJllqE'
    const getRouteDirections = async () => {
        try {
            await geoCodeFrom()
            await geoCodeTo()
            const response = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${addressFrom.lat},${addressFrom.lng}&destination=${addressTo.lat},${addressTo.lng}&key=${api_key}`)
            const json = await response.json()
            console.log(PolyLine.decode(json.routes[0]))
            const points = PolyLine.decode(json.routes[0].overview_polyline.points);
            const pointCords = points.map(point => {
            return {latitude: point[0], longitude: point[1]
                }
            })
            setPointCoordinates(pointCords)

        } catch (error) {
            console.log(error)
        }
    }

    const geoCodeFrom= async () => {
        try {
            const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${addressNameFrom}&key=${api_key}`)
            const json = await response.json()
            setAddressFrom(json.results[0].geometry.location)

        } catch (error) {
            console.log(error)
        }
    }

    const geoCodeTo = async () => {
        try {
            const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${addressNameTo}&key=${api_key}`)
            const json = await response.json()
            setAddressTo(json.results[0].geometry.location)

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View>
            <View style={{width: 300, marginLeft: 55, marginTop: 20}}>
                <GooglePlacesAutocomplete
                    placeholder='Откуда'
                    onPress={(data, details = null) => {
                        setAddressNameFrom(data.description);
                    }}
                    query={{
                        key: 'AIzaSyBIbvODfdRDkwP6U_w6nABU5Z6BIxJllqE',
                        language: 'en',
                        components:'country:uz',
                    }}
                    style={styles.searchInput}
                />
            </View>
            <View style={{width: 300, marginLeft: 55, marginTop: 50}}>
                <GooglePlacesAutocomplete
                    placeholder='Куда'
                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        setAddressNameTo(data.description);
                    }}
                    query={{
                        key: 'AIzaSyBIbvODfdRDkwP6U_w6nABU5Z6BIxJllqE',
                        language: 'en',
                        radius: '15',
                        components:'country:uz',
                    }}
                    style={styles.searchInput}
                />
            </View>
            <View style={{position: 'absolute', marginTop: 680, width: 200, marginLeft: 100}}>
                <Button
                    onPress={() => getRouteDirections()} title="Book ride"
                    />
            </View>
        </View>
    );
}

