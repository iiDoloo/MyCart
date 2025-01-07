import { useState } from 'react'
import './App.css'
import MainPage from './components/MainPage'
import Products from './components/Products'
import { Provider } from 'react-redux'
import store from './store/store'
import NavBar from './components/NavBar'

function App() {

  return (
    <>
    <Provider store={store}>
      <NavBar></NavBar>
      <MainPage></MainPage>
      <Products></Products>
      </Provider>
    </>
  )
}

export default App
