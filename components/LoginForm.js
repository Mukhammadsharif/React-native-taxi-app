import React from "react";
import {View, StyleSheet, Button} from "react-native";
import {Input} from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";


export default function SignupForm() {
    return (
        <View style={styles.container}>
            <Input
                placeholder='Username'
                leftIcon={
                    <Icon
                        name='user'
                        size={24}
                        color='black'
                    />
                }
                disabled={false}
            />
            <Input
                placeholder='Password'
                leftIcon={
                    <Icon
                        name='user'
                        size={24}
                        color='black'
                    />
                }
                disabled={false}
            />
            <Button
                onPress={{}}
                title="Log in"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 60,
        marginVertical: 70
    }
})