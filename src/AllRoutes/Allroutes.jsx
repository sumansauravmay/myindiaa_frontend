import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Product from '../Components/Product/Product'
import Register from '../Components/Register/Register'
import Login from '../Components/Login/Login'
import Cart from '../Components/Cart/Cart'

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Product/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
    </Routes>
  )
}

export default Allroutes
