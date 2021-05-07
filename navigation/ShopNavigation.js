import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from "react-navigation-stack"
import Colors from '../constants/Colors';
import ProductsOverviewScreen from "./../screens/shop/ProductsOverviewScreen";
import ProductDetailScreen from "./../screens/shop/ProductDetailScreen";
import CartScreen from '../screens/shop/CartScreen';




const ProductsNavigator = createStackNavigator({
    ProductsOverview: ProductsOverviewScreen,
    ProductDetail: ProductDetailScreen,
    Cart:CartScreen
   
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === "android" ? Colors.primary : ""
        },
        headerTitleStyle:{
            fontFamily:"opensansbold"
        },
        //IOS only
        headerBackTitleStyle:{
            fontFamily:"opensans"
        },
        headerTintColor: Platform.OS === "android" ? Colors.headerTint : Colors.primary
    }
})

export default createAppContainer(ProductsNavigator)