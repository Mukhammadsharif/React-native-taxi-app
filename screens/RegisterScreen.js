import React, {useState} from "react";
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Background from "../components/Background";
import Logo from "../components/Logo";
import TextInput from "../components/TextInput";
import emailValidator from "../helpers/emailValidator";
import passwordValidator from "../helpers/passwordValidator";
import phoneNumberValidator from "../helpers/phoneNumberValidator";
import BackButton from "../components/BackButton";
import nameValidator from "../helpers/nameValidator";
import {theme} from "../components/theme";
import { signUpUser } from "../api/auth-api";

export default function RegisterScreen({ navigation }) {
    const [name, setName] = useState({value: '', error: ''})
    const [email, setEmail] = useState({value: '', error: ''})
    const [password, setPassword] = useState({value: '', error: ''})
    const [phoneNumber, setPhoneNumber] = useState({value: '+', error: ''})
    const [loading, setLoading] = useState(false)

    const onSignupPressed = async () => {
        const nameError = nameValidator(name.value)
        const emailError = emailValidator(email.value)
        const passwordError = passwordValidator(password.value)
        const phoneNumberError = phoneNumberValidator(phoneNumber.value)
        if (emailError || passwordError || nameError || phoneNumberError) {
            setName({...name, error: nameError})
            setEmail({...email, error: emailError})
            setPassword({...password, error:passwordError})
            setPhoneNumber({...phoneNumber, error: phoneNumberError})
        }
        setLoading(true)
        const response = await signUpUser({
            name: name.value,
            email: email.value,
            password: password.value,
            phoneNumber: phoneNumber.value
        })
        if (response.error){
            alert(response.error)
        } else {
            alert(response.user.displayName)
        }
        setLoading(false)
    }
    return (
        <Background>
            <BackButton goBack={navigation.goBack}/>
            <Logo />
            <Navbar>Create Account</Navbar>
            <TextInput
                label="Name"
                onChangeText={(text) => setName({value:text, error: ''})}
                value={name.value}
                error={name.error}
                errorText={name.error}
            />
            <TextInput
                label="Email"
                onChangeText={(text) => setEmail({value:text, error: ''})}
                value={email.value}
                error={email.error}
                errorText={email.error}
            />
            <TextInput
                label="Phone number"
                onChangeText={(text) => setEmail({value:text, error: ''})}
                value={phoneNumber.value}
                error={phoneNumber.error}
                errorText={phoneNumber.error}
            />
            <TextInput
                label="Password"
                onChangeText={(text) => setPassword({value:text, error: ''})}
                value={password.value}
                error={password.error}
                secureTextEntry
                errorText={password.error}
            />
            <Button mode="contained"
                    loading={loading}
                    onPress={onSignupPressed}>
                Sign up
            </Button>
            <View style={styles.row}>
                <Text>Already have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                    <Text style={styles.link}>Login</Text>
                </TouchableOpacity>
            </View>
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