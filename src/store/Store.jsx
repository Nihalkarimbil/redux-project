import { configureStore } from '@reduxjs/toolkit';
import CartSlice from './slices/CartSlice';

const Store = configureStore({
    reducer:{
        cart: CartSlice,
        
    },
     devTools: process.env.NODE_ENV !== 'production'
   
})
export default Store