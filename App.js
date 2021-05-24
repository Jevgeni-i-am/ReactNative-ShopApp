import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import ShopNavigation from './navigation/ShopNavigation';
import productsReducer from './store/reducers/products'
import { fetchFonts } from "./assets/fonts/FetchFonts";
import AppLoading from 'expo-app-loading';
import { enableScreens } from 'react-native-screens';
//that's the function to pass to create store as a second argument.
// composeWithDevTools SHOULD REMOVE BEFORE DEPLOY APP
// import { composeWithDevTools } from 'redux-devtools-extension';
import cartReducer from './store/reducers/cart'
import ordersReducer from './store/reducers/order'


const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer,
  
})

const store = createStore(rootReducer, /*composeWithDevTools()*/)

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />)
  }
  return (
    <Provider store={store}>
      <ShopNavigation />
    </Provider>
  );
}

