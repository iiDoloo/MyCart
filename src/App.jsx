import { useState } from 'react'
import './App.css'
import Products from './components/Products'
import { Provider } from 'react-redux'
import store from './store/store'
import NavBar from './components/NavBar'
import MyCart from './components/MyCart'

function App() {

  return (
    <>
    <Provider store={store}>
      <NavBar></NavBar>
      <MyCart></MyCart>
      <Products></Products>
      </Provider>
    </>
  )
}

export default App
