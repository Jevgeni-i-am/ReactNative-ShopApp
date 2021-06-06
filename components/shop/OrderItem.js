import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Platform,
    Button
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CartItem from './CartItem';
import Colors from '../../constants/Colors';
import Card from "./../UI/Card";

const OrderItem = props => {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <Card style={styles.orderItem}>
            <View style={styles.summary}>
                <Text style={styles.totalAmount}>${props.amount}</Text>
                <Text style={styles.date}>{props.date}</Text>
            </View>
            <Button
                color={Colors.primary}
                title={showDetails ? 'Hide Details' : 'Show Details'}
                onPress={() => {
                    setShowDetails(prevState => !prevState);
                }}
            />
            {showDetails && (
                <View style={styles.detailItems}>
                    {props.items.map(cartItem => (
                        <CartItem
                            key={cartItem.productId}
                            quantity={cartItem.quantity}
                            amount={cartItem.sum}
                            title={cartItem.productTitle}
                        />
                    ))}
                </View>
            )}
        </Card >
    );
};

const styles = StyleSheet.create({
    orderItem: {
        margin: 20,
        padding: 10,
        alignItems: "center"
    },
    summary: {
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-around",
        marginBottom: 15
    },
    totalAmount: {
        fontFamily: 'opensansbold',
        fontSize: 16
    },
    data: {
        fontFamily: 'opensans',
        fontSize: 16,
        color: '#888',

    },
    detailsButton: {
        padding: 20
    },
    detailItems: { width: "100%" }
});

export default OrderItem;
