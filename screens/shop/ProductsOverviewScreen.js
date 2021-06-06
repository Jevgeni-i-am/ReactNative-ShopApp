import React, { useState, useEffect, useCallback } from 'react';
import { FlatList, Button, Platform, ActivityIndicator, View, StyleSheet, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from "../../components/UI/CustomHeaderButton";
import ProductItem from '../../components/shop/ProductItem';
import * as cartActions from '../../store/actions/cart'
import Colors from '../../constants/Colors';
import * as productsActions from "../../store/actions/products"

const ProductsOverviewScreen = props => {
    const [isLoading, setIsLoading] = useState(false)
    const [isRefreshing, setIsRefreshing] = useState(false)
    const [error, setError] = useState()
    const products = useSelector(state => state.products.availableProducts)
    const dispatch = useDispatch()

    const loadProducts = useCallback(async () => {
        console.log('-------_______-_-_-_---------LOAD PRODUCTS FUNC STARTS-------_-_-________---------');
        setError(null)
        setIsRefreshing(true)
        try {
            await dispatch(productsActions.fetchProducts())
        }
        catch (err) {
            setError(err.message)
        }
        setIsRefreshing(false)
        console.log('-------_______-_-_-_---------LOAD PRODUCTS FUNC DONE-------_-_-________---------');
    }, [dispatch, setIsLoading, setError])

    //Subscriber for page reload
    useEffect(() => {
        const willFocusSub = props.navigation.addListener('willFocus', loadProducts)
        return () => {
            willFocusSub.remove()
        }
    }, [loadProducts])


    useEffect(() => {
        setIsLoading(true)
        loadProducts()
            .then(() => { setIsLoading(false) })
    }, [dispatch, loadProducts])

    const selectItemHandler = (id, title) => {
        props.navigation.navigate('ProductDetail', {
            productId: id,
            productTitle: title
        })
    }

    if (error) {
        return (
            <View style={styles.centered}>
                <Text>An error occured!!!</Text>
                <Button
                    title="Try again"
                    onPress={loadProducts}
                    color={Colors.primary} />
            </View>)
    }

    if (isLoading) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator size="large" color={Colors.primary} />
            </View>)
    }
    if (!isLoading && products.length === 0) {
        return (
            <View style={styles.centered}><Text>No products found. Maybe start adding some?!</Text></View>
        )
    }

    return (
        <FlatList
            onRefresh={loadProducts}
            refreshing={isRefreshing}
            data={products}
            keyExtractor={item => item.id}
            renderItem={itemData =>
                <ProductItem
                    image={itemData.item.imageUrl}
                    title={itemData.item.title}
                    price={itemData.item.price}
                    onSelect={() => { selectItemHandler(itemData.item.id, itemData.item.title) }}

                >
                    <Button
                        color={Colors.primary}
                        title="View Details"
                        onPress={() => { selectItemHandler(itemData.item.id, itemData.item.title) }}
                    />
                    <Button
                        color={Colors.primary}
                        title="To Card"
                        onPress={() => { dispatch(cartActions.addToCart(itemData.item)) }}
                    />
                </ProductItem >}
        />
    )
}

ProductsOverviewScreen.navigationOptions = navData => {
    return {
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                    title="Drawer Menu"
                    iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                    onPress={() => {
                        navData.navigation.toggleDrawer()
                    }} />
            </HeaderButtons>
        ),
        headerTitle: 'All Products',
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                    title="Cart"
                    iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
                    onPress={() => {
                        navData.navigation.navigate('Cart');
                    }} />
            </HeaderButtons>
        )
    };
};

const styles = StyleSheet.create({
    centered: { flex: 1, justifyContent: "center", alignItems: "center" }
})

export default ProductsOverviewScreen





