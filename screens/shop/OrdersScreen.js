import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, Platform, View,  ActivityIndicator } from 'react-native';
import Colors from '../../constants/Colors';
import { useSelector, useDispatch } from "react-redux";
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from "../../components/UI/CustomHeaderButton";
import OrderItem from "./../../components/shop/OrderItem";
import * as ordersActions from "../../store/actions/orders"

const OrdersScreen = props => {
    const [isLoading, setIsLoading] = useState(false)
    const orders = useSelector(state => state.orders.orders)
    const dispatch = useDispatch()

    useEffect(() => {
        setIsLoading(true)
        dispatch(ordersActions.fetchOrders()).then(() => {
            setIsLoading(false)
        })
    }, [dispatch])

    if (isLoading) {
        return <View style={styles.centered}><ActivityIndicator size="large" color={Colors.primary} /></View>
    }
    if (orders.length === 0) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>No orders found. Maybe start ordering some products?</Text>
            </View>
        )
    }
    return (
        <FlatList
            style={styles.screen}
            data={orders}
            renderItem={itemData =>
                <OrderItem
                    items={itemData.item.items}
                    amount={itemData.item.totalAmount}
                    date={itemData.item.readableDate}
                />}
        />
    );
}

OrdersScreen.navigationOptions = navData => {
    return {
        headerTitle: "Your orders",
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

    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: Colors.background,

    },
    screenView: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: Colors.textcolor,
        fontSize: 20,
    },
    centered: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default OrdersScreen





