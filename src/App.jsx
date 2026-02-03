import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Products from './pages/Products'
import Layout from './Layout/Layout'
import Login from './pages/Login'




function App() {


  // hoisting
  return (
    <> 
      <Routes>
        <Route element={<Layout />}>
        <Route index element={<Home/>}/>
        <Route path='product' element={<Products/>}/> 
        

        </Route>
        
        <Route path='login' element={<Login/>}/>


      </Routes>

    </>
  )
}

export default App