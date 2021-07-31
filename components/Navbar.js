import React from "react";
import { StyleSheet } from "react-native";
import { Text } from 'react-native-paper'
import { theme } from "./theme";

export default function Navbar(props) {
    return (
        <Text style={styles.navbar} {...props} />
    )
}

const styles = StyleSheet.create({
    navbar: {
        fontSize: 21,
        color: theme.colors.primary,
        fontWeight: 'bold',
        paddingVertical: 12
    }
})