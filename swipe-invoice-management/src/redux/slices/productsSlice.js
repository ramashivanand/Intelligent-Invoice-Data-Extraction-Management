import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name:"products",
    initialState:[],
    reducers:{
        setProducts:(state,action) => action.payload,
        addProducts:(state,action) => {
            state.push(action.payload);
        },
        updateProduct:(state,action)=>{
            const index = state.findIndex((product)=> product.ProductName === action.payload.ProductName);
            if(index>=0)
            {
                state[index] = {...state[index],...action.payload};
            }
        }
    }
})

export const {setProducts,addProducts,updateProduct} = productsSlice.actions;
export default productsSlice.reducer;