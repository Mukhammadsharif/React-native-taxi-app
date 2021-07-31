import React from "react";
import { StyleSheet } from 'react-native'
import Navbar from "../components/Navbar";
import Paragraph from "../components/Paragraph";
import Button from "../components/Button";
import Background from "../components/Background";
import Logo from "../components/Logo";

export default function StartScreen({ navigation }) {
    return (
        <Background>
            <Logo />
            <Navbar>Login template</Navbar>
            <Paragraph>
                The easiest way to start with your amazing application
            </Paragraph>
            <Button mode="outlined"
            onPress={() => {
            navigation.navigate('LoginScreen')}
            }
            >Login</Button>
            <Button mode="contained"
             onPress={() => {navigation.navigate('RegisterScreen')}}>
                Sign up
            </Button>
        </Background>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    }
})