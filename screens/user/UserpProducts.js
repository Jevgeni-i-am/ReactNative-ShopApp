import React from 'react';
import { FlatList, Button, Platform, Alert, View, Text, StyleSheet } from "react-native";
import ProductItem from "../../components/shop/ProductItem";
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from "../../components/UI/CustomHeaderButton";
import Colors from '../../constants/Colors';
import * as productActions from '../../store/actions/products'

const UserProductScreen = props => {

    const userProducts = useSelector(state => state.products.userProducts)
    const dispatch = useDispatch()

    const editProductHandler = (id) => {
        props.navigation.navigate('EditProduct', { productId: id })
    }
    const deleteHandler = (id) => {
        Alert.alert('Are you sure?', 'Do you really want to delete this item?', [
            { text: 'No', style: 'default' },
            {
                text: 'Yes', style: 'destructive',
                onPress: () => {
                    dispatch(productActions.deleteProduct(id))
                }
            }
        ])
    }

    if (userProducts.length === 0) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>No products found. Maybe start creating some?</Text>
            </View>
        )
    }
    return (
        <FlatList
            data={userProducts}
            keyExtractor={item => item.id}
            renderItem={
                itemData => (
                    <ProductItem
                        image={itemData.item.imageUrl}
                        title={itemData.item.title}
                        price={itemData.item.price}
                        onSelect={() => {
                            editProductHandler(itemData.item.id)
                        }}
                    >
                        <Button
                            color={Colors.primary}
                            title="Edit"
                            onPress={() => {
                                editProductHandler(itemData.item.id)
                            }}
                        />
                        <Button
                            color={Colors.primary}
                            title="Delete"
                            onPress={deleteHandler.bind(this, itemData.item.id)}

                        />

                    </ProductItem>)}
        />

    );
}

UserProductScreen.navigationOptions = navData => {
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
        headerRight: (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                    title="Add"
                    iconName={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
                    onPress={() => {
                        navData.navigation.navigate('EditProduct')
                    }} />
            </HeaderButtons>
        ),
        headerTitle: "You'r products",
    }
};


export default UserProductScreen





