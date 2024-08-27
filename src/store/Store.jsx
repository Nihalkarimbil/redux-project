import { configureStore } from '@reduxjs/toolkit';
import CartSlice from './slices/CartSlice';
import ProductSlice from './slices/ProductSlice';

const Store = configureStore({
    reducer:{
        cart: CartSlice,
        product:ProductSlice,
    },
     devTools: process.env.NODE_ENV !== 'production'
   
})
export default Store