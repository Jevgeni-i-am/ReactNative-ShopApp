import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import authReducer from './store/reducers/auth'
import NavigationContainer from "./navigation/NavigationContainer";
import productsReducer from './store/reducers/products'
import { fetchFonts } from "./assets/fonts/FetchFonts";
import AppLoading from 'expo-app-loading';
//that's the function to pass to create store as a second argument.
// composeWithDevTools SHOULD REMOVE BEFORE DEPLOY APP
// import { composeWithDevTools } from 'redux-devtools-extension';
import cartReducer from './store/reducers/cart'
import ordersReducer from './store/reducers/order'
import ReduxThunk from 'redux-thunk'


const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer,
  auth: authReducer,

})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk)/*composeWithDevTools()*/)

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
      <NavigationContainer />
    </Provider>
  );
}

