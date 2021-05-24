import React from 'react';
import { FlatList, StyleSheet, Text, Platform, View } from 'react-native';
import Colors from '../../constants/Colors';
import { useSelector } from "react-redux";
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from "../../components/UI/CustomHeaderButton";
import OrderItem from "./../../components/shop/OrderItem";

const OrdersScreen = props => {
    const orders = useSelector(state => state.orders.orders)
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
    }
});

export default OrdersScreen





