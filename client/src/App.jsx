import React from 'react'
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
      </Routes>
    </div>
  )
}

export default App