import React, { useEffect } from 'react'
import MyCart from './MyCart'
import { useSelector } from 'react-redux'


const NavBar = () => {
    const ourSelector = useSelector((state)=>state.cart.items)
    useEffect(()=>{console.log("reduce",ourSelector.reduce((acc, curV) => acc + curV.quantity,0,))},[ourSelector])
  return (
    <ul>
        <li>Redux Cart</li>
        <li>Cart Info : {ourSelector.reduce((acc, curV) => acc + curV.quantity,0,)} </li>
    </ul>
  )
}

export default NavBar