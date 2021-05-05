
import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import ProductItem from '../../components/shop/Productitem';

const ProductsOverviewScreen = props => {
    const products = useSelector(state => state.products.availableProducts)
    return (
        <FlatList
            data={products}
            keyExtractor={item => item.id}
            renderItem={itemData => <ProductItem
                image={itemData.item.imageUrl}
                title={itemData.item.title}
                price={itemData.item.price}
                onViewDetail={() => { }}
                onAddToCard={() => { }}
            />

            }
        />
    );
}

ProductsOverviewScreen.navigationOptions = {
    headerTitle: "All products"
}


export default ProductsOverviewScreen





