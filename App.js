import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import ShopNavigation from './navigation/ShopNavigation';
import productsReducer from './store/reducers/products'


const rootReducer = combineReducers({
  products: productsReducer
})

const store = createStore(rootReducer)

export default function App() {
  return (
    <Provider store={store}>
      <ShopNavigation />
    </Provider>
  );
}

