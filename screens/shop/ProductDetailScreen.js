
import React from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';
import Colors from '../../constants/Colors';
import { useSelector, useDispatch } from "react-redux";
import * as cartActions from '../../store/actions/cart'

const ProductDetailScreen = props => {
    // We need product id (come with props after onViewDetail() from ProductsOverviewScreen)
    const productId = props.navigation.getParam('productId')
    //This is how we extract single product and then single product can be used here
    const selectedProduct = useSelector(state => state.products.availableProducts.find(prod => prod.id === productId))

    const dispatch = useDispatch()
    //props.navigation.setParam('')
    return (
        <ScrollView >
            <View style={styles.container}>
                <Text style={{ fontFamily: "opensansbold" }}>{selectedProduct.title}</Text>

                <Image
                    style={styles.image}
                    source={{ uri: selectedProduct.imageUrl }}
                />

                <Text style={styles.price}>$ {selectedProduct.price.toFixed(2)}</Text>
                <Text style={styles.description}>{selectedProduct.description}</Text>
                <View style={styles.buttonContainer}>
                    <Button
                        title="Add To Card"
                        color={Colors.primary}
                        onPress={props.onAddToCard}
                    />
                </View>
            </View>
        </ScrollView>
    );
}

ProductDetailScreen.navigationOptions = navData => {
    return {
        headerTitle: navData.navigation.getParam('productTitle')
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        alignItems: 'center',
        justifyContent: 'center',

    },
    imageContainer: {
        width: '100%',
        height: '90%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden'
    },
    buttonContainer: {
        marginVertical: 10,
        alignItems: "center"
    },

    image: {
        width: "100%",
        height: 300,
    },
    price: {
        fontSize: 20,
        color: "#888",
        textAlign: "center",
        marginVertical: 20,
        fontFamily: "opensans"
    },
    description: {
        color: Colors.textcolor,
        fontSize: 14,
        textAlign: "center",
        marginHorizontal: 20,
        fontFamily: "opensans"
    }
});

export default ProductDetailScreen





