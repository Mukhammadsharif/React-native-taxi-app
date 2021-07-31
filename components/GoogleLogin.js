// import React from "react";
// import {View, StyleSheet, TouchableOpacity, Platform} from 'react-native'
// import { Text } from 'react-native-paper'
// import GoogleLogo  from '../assets/google.png'
// import { theme } from '../theme'
// import firebase from "firebase/app";
// import Google from 'expo-google-app-auth'
// import {ANDROID_GOOGLE_CLIENT_ID, IOS_GOOGLE_CLIENT_ID} from "../config";
//
//
// export default function GoogleLogin(){
//     const signInWithGoogle = async () => {
//         try {
//             const result = await Google.logInAsync({
//                 clientId:
//                     Platform.OS === 'android'
//                     ? ANDROID_GOOGLE_CLIENT_ID
//                     : IOS_GOOGLE_CLIENT_ID,
//                 scopes: ['profile', 'email']
//             })
//             if (result.type === 'success'){
//                 const credential = firebase.auth.GoogleAuthProvider.credential(
//                     // result.idToken,
//                     // result.accessToken
//                 )
//                 await firebase.auth().signInWithCredential(credential)
//             } else {
//                 alert('Something went wrong')
//             }
//         } catch ({ message }) {
//             alert(message)
//         }
//     }
//
//
//     return(
//         <View style={styles.container}>
//            <View style={styles.divider}>
//                <Text style={styles.dividerText}>Or</Text>
//            </View>
//             <View style={styles.buttonsContainer}>
//                <TouchableOpacity onPress={signInWithGoogle}>
//                    <GoogleLogo />
//                    <Text style={styles.buttonText}>Sign in with Google</Text>
//                </TouchableOpacity>
//             </View>
//         </View>
//     )
// }
// const styles = StyleSheet.create({
//     container: {
//         width: '100%',
//         alignItems: 'center'
//     },
//     divider: {
//         position: 'relative',
//         width: '96%',
//         height: 1,
//         backgroundColor: theme.colors.text,
//         marginVertical: 20,
//         alignItems: 'center',
//         justifyContent: 'center'
//     },
//     dividerText: {
//         position: 'absolute',
//         backgroundColor: theme.colors.tint,
//         color: theme.colors.text,
//         paddingHorizontal: 16,
//         paddingVertical: 8
//     },
//     buttonsContainer: {
//         alignItems: 'center',
//         justifyContent: 'center',
//         flexDirection: 'row',
//         marginBottom: 12
//     },
//     buttonText: {
//         fontSize: 24,
//         fontWeight: 16
//     }
// })