import React from 'react'
<<<<<<< HEAD
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import BuyCredits from './pages/BuyCredits'
import Result from './pages/Result'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/buycredits' element={<BuyCredits/>}/>
        <Route path='/result' element={<Result/>}/>
=======
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Result from './pages/Result'
import BuyCredits from './pages/BuyCredits'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <div className='min-h-screen bg-slate-100'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/result' element={<Result/>}/>
        <Route path='/buycredits' element={<BuyCredits/>}/>
>>>>>>> bfd9f49f88d9fd8cf41bcdcae49f99d6af971de2
      </Routes>
    </div>
  )
}

export default App