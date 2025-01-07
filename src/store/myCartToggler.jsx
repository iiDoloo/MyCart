import { createSlice } from "@reduxjs/toolkit";
const mycartSlice = createSlice({
    name:"mycart",
    initialState : {
        cartIsVisible: false
    },
    reducers:{
        toggleCart(state,action){
            state.cartIsVisible = !state.cartIsVisible
        }
    }
})
export const cartSliceActions = mycartSlice.actions
export default mycartSlice