import React, {useState} from "react";
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Background from "../components/Background";
import Logo from "../components/Logo";
import TextInput from "../components/TextInput";
import emailValidator from "../helpers/emailValidator";
import passwordValidator from "../helpers/passwordValidator";
import BackButton from "../components/BackButton";
import {theme} from "../components/theme";
import {loginUser, signUpUser} from "../api/auth-api";

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState({value: '', error: ''})
    const [password, setPassword] = useState({value: '', error: ''})
    const [loading, setLoading] = useState(false)

    const onLoginPressed = async () => {
        const emailError = emailValidator(email.value)
        const passwordError = passwordValidator(password.value)
        if (emailError || passwordError) {
            setEmail({...email, error: emailError})
            setPassword({...password, error:passwordError})
        }
        setLoading(true)
        const response = await loginUser({
            email: email.value,
            password: password.value
        })
        if (response.error){
            alert(response.error)
        } else {
            navigation.navigate('Map')
        }
        setLoading(false)
    }
    return (
        <Background>
            <BackButton goBack={navigation.goBack}/>
            <Logo />
            <Navbar>Welcome</Navbar>
            <TextInput
                label="Email"
                onChangeText={(text) => setEmail({value:text, error: ''})}
                value={email.value}
                error={email.error}
                errorText={email.error}
            />
            <TextInput
                label="Password"
                onChangeText={(text) => setPassword({value:text, error: ''})}
                value={password.value}
                error={password.error}
                secureTextEntry
                errorText={password.error}
            />
            <View style={styles.forgotPassword}>
                <TouchableOpacity onPress={() => navigation.navigate('ResetPasswordScreen')}>
                    <Text style={styles.forgot}>Forgot your password?</Text>
                </TouchableOpacity>
            </View>
            <Button mode="contained"
                    loading={loading}
                    onPress={onLoginPressed}>
                Login
            </Button>
            <View style={styles.row}>
                <Text>Create an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
                    <Text style={styles.link}>Register</Text>
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
    },
    forgotPassword: {
        width: '100%',
        alignItems: 'flex-end',
        marginBottom: 24
    },
    forgot: {
        fontSize: 13,
        color: theme.colors.secondary
    }
})