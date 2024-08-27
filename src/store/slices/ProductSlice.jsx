import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const initialState={
    data:[],
    status:'none'

}
const ProductSlice=createSlice({
    name:'product',
    initialState:initialState,
    reducers:{
        // fetchproducts(state,action){
        //     state.data = action.payload
        // }
    },
    extraReducers:(builder)=>{
       builder
       .addCase(getProducts.fulfilled,(state,action)=>{
        state.data=action.payload
        state.status='none'
       })
       .addCase(getProducts.pending,(state)=>{
        state.status='Loading'
       })
       .addCase(getProducts.rejected,(state)=>{
        state.status='error'
       })
    }
})

// export const {fetchproducts}=ProductSlice.actions
export default ProductSlice.reducer


export const getProducts=createAsyncThunk('product/get', async ()=>{
    const data = await fetch('https://fakestoreapi.com/products')
    const result = await data.json() 
    return result
})

// export function getProducts() {
//     return async function getProductThunk(dispatch, getState) {
//         const data = await fetch('https://fakestoreapi.com/products')
//         const result = await data.json() 
//         dispatch(fetchproducts(result))
//     }
// }