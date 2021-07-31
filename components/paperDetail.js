import React from "react";
import {View} from "react-native";
import {Provider} from "react-native-paper";
import {theme} from "./theme";
import Button from "./Button";


export default function PaperDetail() {
    return (
        <Provider theme={theme}>
            <View>
                <Button mode="contained">CLICK ME!</Button>
            </View>
        </Provider>
    )
}