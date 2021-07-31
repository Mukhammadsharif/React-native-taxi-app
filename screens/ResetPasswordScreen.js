import React, {useState} from "react";
import { StyleSheet } from 'react-native'
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Background from "../components/Background";
import Logo from "../components/Logo";
import TextInput from "../components/TextInput";
import emailValidator from "../helpers/emailValidator";
import BackButton from "../components/BackButton";
import { theme } from "../components/theme";
import {resetPassword} from "../api/auth-api";

export default function ResetPasswordScreen({ navigation }) {
    const [email, setEmail] = useState({value: '', error: ''})
    const [loading, setLoading] = useState()

    const onSubmitPressed = async () => {
        const emailError = emailValidator(email.value)
        if (emailError) {
            setEmail({...email, error: emailError})
        }
        setLoading(true)
        const response = await resetPassword({
            email: email.value
        })
        if(response.error){
            alert(response.error)
        } else {
            alert('Email with password has been sent.')
        }
        setLoading(false)
    }
    return (
        <Background>
            <BackButton goBack={navigation.goBack}/>
            <Logo />
            <Navbar>Restore Password</Navbar>
            <TextInput
                label="Email"
                onChangeText={(text) => setEmail({value:text, error: ''})}
                value={email.value}
                error={email.error}
                errorText={email.error}
                description='You will receive email with password reset link.'
            />
            <Button mode="contained"
                    onPress={onSubmitPressed}>
                Send Instructions
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
    },
    row: {
        flexDirection: 'row',
        marginTop: 4
    },
    link: {
        fontWeight: 'bold',
        color: theme.colors.primary
    }
})