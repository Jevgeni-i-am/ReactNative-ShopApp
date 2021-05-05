import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation'
import Colors from '../constants/Colors';
import ProductsOverviewScreen from "./../screens/shop/ProductsOverviewScreen";
import { createStackNavigator } from "react-navigation-stack"

const ProductsNavigator = createStackNavigator({
    ProductsOverview: ProductsOverviewScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === "android" ? Colors.primary : ""
        },
        headerTintColor: Platform.OS === "android" ? Colors.headerTint : Colors.primary
    }
})

export default createAppContainer(ProductsNavigator)