/*this screen shows whlist app is booting up and figuring out 
whether the user is authenticated or not. 
This will be super fast,  chances are we won't even 
see that screen when the app starts */

import React, { useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";

import Colors from '../constants/Colors';
import * as authActions from '../store/actions/auth'



const StartupScreen = props => {
    const dispatch = useDispatch()

    useEffect(() => {
        const tryLogin = async () => {

            const userData = await AsyncStorage.getItem('userData')

            if (!userData) {
                props.navigation.navigate('Auth')
                return
            }
            const transformedData = JSON.parse(userData)
            const { token, userId, expiryDate } = transformedData
            const expirationDate = new Date(expiryDate)

            if (expirationDate <= new Date() || !token || !userId) {
                props.navigation.navigate('Auth')
                return
            }

            const expirationTime = expirationDate.getTime() - new Date().getTime()
            props.navigation.navigate('Shop')
            dispatch(authActions.authenticate(userId, token, expirationTime))
        }
        tryLogin()
    }, [dispatch])
    return (
        <View style={styles.screen}>
            <ActivityIndicator
                size="large"
                color={Colors.primary}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: Colors.textcolor,
        fontSize: 20,
    }
});

export default StartupScreen





