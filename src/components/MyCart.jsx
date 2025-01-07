import React from 'react'
import { cartActions } from '../store/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
const MyCart = () => {
    const dispatch = useDispatch()
    const ourSelector = useSelector((state)=>state.cart.items)
    const handleItemRemove = (itemId)=>{
        console.log("item id from my c  art : ",itemId)
        dispatch(cartActions.removeItemFromCart(itemId))
    }
  return (
    <div><h1>MyCart</h1>
    {ourSelector.map((item,i)=>{return(
            <ul key={i}>
            <li>{item.name}</li>
            <li>{item.quantity}</li>
            <li>{item.price} DH per Item</li>
            <li>Total Price : {item.totalPrice}</li>
            <button onClick={()=>{handleItemRemove(item.itemId)}}>-</button></ul>
    )})}
    </div>
  )
}

export default MyCart