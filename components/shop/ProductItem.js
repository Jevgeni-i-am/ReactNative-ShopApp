// this is just component we can use in ther components to get the right styling 
// and layout out of the box, so this component here will be responsible for using 
// certain RN components and laying them out and styling them n a certain way
import React from 'react';
import {
    StyleSheet, Text, View,  Image, TouchableOpacity,
    TouchableNativeFeedback, Platform
}
    from 'react-native';
import Colors from '../../constants/Colors';
import Card from "./../UI/Card";


const ProductItem = props => {

    let TouchableCmp = TouchableOpacity
    if (Platform.OS === "android" && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback
    }

    return (
        <Card style={styles.product}>
            <View style={styles.touchable}>
                <TouchableCmp onPress={props.onSelect} useForeground>
                    <View>
                        <View style={styles.imageContainer}>
                            <Image
                                style={styles.image}
                                source={{ uri: props.image }}
                            />
                        </View>

                        <View style={styles.infoContainer}>
                            <Text style={styles.title}>{props.title}</Text>
                            <Text style={styles.price}>$ {props.price}</Text>
                        </View>

                        <View style={styles.actions}>
                         {props.children}
                        </View>
                    </View>
                </TouchableCmp>
            </View>
        </Card>

    );
}
//Shadow works only in IOS, elevation on Android
const styles = StyleSheet.create({
    product: {
        height: 300,
        margin: 20,
    },
    touchable: {
        overflow: "hidden",
        borderRadius: 10,

    },
    imageContainer: {
        width: '100%',
        height: '70%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden'
    },

    image: {
        width: "100%",
        height: "100%"
    },

    infoContainer: {
        flex: 1,
        alignItems: 'center',
        height: '17%',
        padding: 10
    },

    title: {
        color: Colors.textcolor,
        fontSize: 18,
        marginVertical: 2,
        fontFamily: "opensansbold"

    },
    price: {
        fontSize: 15,
        color: "#888",
        padding: 10,
        fontFamily: "opensans"
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '23%',
        paddingHorizontal: 20,
        paddingBottom: 8

    }
});

export default ProductItem





