import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import UsersList from './Components/UsersList'
import Navbar from './Components/Navbar'
import Userdetail from './Components/Userdetail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Routes>
        {/* <Route path='/nav' element={<Navbar/>}/> */}
      <Route path='/' element= {<Home/>}/>
      <Route path='/about' element={<About/>}/>
        <Route path='/userlist' element={<UsersList/>}/>
           <Route path='/userdet/:id' element={<Userdetail/>}/>
    </Routes>
     

    </>
  )
}

export default App
