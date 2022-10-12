import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'

function Home() {
    let navigateto = useNavigate()
    let removetoken =()=>{
        window.localStorage.clear()
        navigateto('/')
    }
  return (
    <div>
        <div style={{marginTop:"20%"}}></div>
        <h1 class='text-center'>Login success</h1>
        <div class="text-center">
        <Link to={'/login'} class='text-center' onClick={removetoken}>LogOut</Link>

        </div>
    </div>
  )
}

export default Home