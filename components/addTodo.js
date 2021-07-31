import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

export default function AddTodo({ submitHandler }) {
    const [text, setText] = useState('')

    const changeHandler = (value) => {
        setText(value)
    }
    return (
        <View>
            <TextInput
            style={styles.input}
            placeholder='new todo...'
            onChangeText={changeHandler}
            value={text}
            />
            <Button
            onPress={() => submitHandler(text, setText)}
            title='Add Todo'
            color='coral'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        borderBottomWidth: 1,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomColor: '#ddd',
        width: 300
    }
})