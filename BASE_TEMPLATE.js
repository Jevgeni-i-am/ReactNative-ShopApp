//BASE TEMPLATE FOR DIFFERENT PAGES


import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from './constants/Colors';

const NAME = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.text}>HERE IS THE TEXT WHAT YOU WANT</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: Colors.textcolor,
        fontSize:20,
    }
});

export default NAME





