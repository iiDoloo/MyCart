import {createSlice} from '@reduxjs/toolkit'
const cartSlice =  createSlice ({
    name :'cart',
    initialState : {
        items :[],
        totalQuantity:0,
 
    },
    reducers :{
        addItemToCard(state,action){
            const newItem = action.payload
            const existingItem = state.items.find(item=>item.itemId===newItem.id)
            state.totalQuantity++
            if(!existingItem){
                state.items.push({
                    itemId:newItem.id,
                    price:newItem.price,
                    quantity :1,
                    totalPrice:newItem.price,
                    name:newItem.title
                })
            }else{
                existingItem.quantity++;
                existingItem.totalPrice=existingItem.totalPrice + newItem.price
            }
        },
        removeItemFromCart(state,action){
            console.log(action)
            const id = action.payload
            const existingItem = state.items.find(item=>item.itemId ===id)
            state.totalQuantity--
            console.log("quantity",existingItem)
            if(existingItem.quantity===1){
                state.items =state.items.filter(item=>item.itemId!==id)
 
            }else{
                existingItem.quantity--;
                existingItem.totalPrice=existingItem.totalPrice - existingItem.price
 
            }
        }
    }
})
export const cartActions =cartSlice.actions;
export default cartSlice