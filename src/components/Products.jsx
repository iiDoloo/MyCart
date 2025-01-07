import React, { useEffect } from 'react'
import { useSelector, useDispatch} from "react-redux";
import { cartActions } from '../store/cartSlice'
const Products = () => {
    const dispatch = useDispatch()
    const ourSelector = useSelector((state)=>state.cart.items)
    const productsList = [{
        id:1,
        title:"Product 1 ",
        price:200,
        description:"This is a product"
    },
    {
        id:2,
        title:"Product 2 ",
        price:200,
        description:"This is a product"
    },
    {
        id:3,
        title:"Product 3 ",
        price:200,
        description:"This is a product"
    }]
    const handleItemAdd = (indItem)=>{
        console.log("item index :",indItem)
        console.log(productsList[indItem])
        dispatch(cartActions.addItemToCard(productsList[indItem]))
    }
    useEffect(()=>{console.log(ourSelector)},[ourSelector])
  return (
    <div><h2>Products</h2>
        {productsList.map((x,i)=>{return(
            <div key={i}>
            <h4>{x.title}</h4>
            <p>{x.price}</p>
            <p>{x.description}</p>
            <button onClick={()=>{handleItemAdd(i)}}>Add to cart</button>
            </div>
        )})}
    </div>
  )
}

export default Products