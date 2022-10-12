import React from 'react'
import { Outlet } from 'react-router-dom'
import { toast } from 'react-toastify'
import Login from './Login'

function Protectedoute() {
    if(window.localStorage.length>0){
        toast.success("Your Session Expired")
    }
  return (
    window.localStorage.length>0?<Outlet/>:<Login/>
  )
}

export default Protectedoute
