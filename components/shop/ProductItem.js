// this is just component we can use in ther components to get the right styling 
// and layout out of the box, so this component here will be responsible for using 
// certain RN components and laying them out and styling them n a certain way
import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import Colors from '../../constants/Colors';


const ProductItem = props => {
    return (
        <View style={styles.product}>
            <Image
                style={styles.image}
                source={{ uri: props.image }}
            />
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.price}>$ {props.price}</Text>
            <View style={styles.actions}>
                <Button
                    title="View Details"
                    onPress={props.onViewDetail}
                />
                <Button
                    title="To Card"
                    onPress={props.onAddToCard}
                />
            </View>
        </View>
    );
}
//Shadow works only in IOS
const styles = StyleSheet.create({
    product: {
        flex: 1,
        backgroundColor: Colors.textHoneydew,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "black",
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        height: 300,
        margin: 20,
    },
    title: {
        color: Colors.textcolor,
        fontSize: 18,
        marginVertical: 4
    },
    price: {
        fontSize: 14,
        color: "#888"
    },
    image: {
        width: "100%",
        height: "60%"
    },
    actions: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    }
});

export default ProductItem





