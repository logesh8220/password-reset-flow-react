import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { node } from './Config'

function Forgot() {
    const [isloading, setloading] = useState(false)
    const {handleChange,handleSubmit,values}  = useFormik({
        initialValues:{
                Email:"",
        },
        onSubmit: async (values) =>{
            try {
                setloading(true)
                let data = await axios.post(`${node.api}/user/forgot`,values)
                console.log(data)
                setloading(false)
                toast.success("Password link sent success")
              } catch (error) {
                console.log(error)
              }
        }
        
    })
  return (
    <div >
    <div style={{height:"200px"}}></div>
      <form onSubmit={handleSubmit} class="container col-lg-4 signin">
<div class="mb-3">
  <label  class="form-label">Email</label>
  <input type="email" class="form-control"  Name="Email" aria-describedby="emailHelp" onChange={handleChange} value={values.Email}/>
</div>
<button type="submit" class="btn btn-primary col-12">Submit</button>
<div class="text-center">
<Link to={'/login'}>Login</Link>
</div>
<div class="text-center">
    {
        
        isloading ? <div class="text-center">
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>:
<Link to={'/'} class="btn btn-primary col-12">Close</Link>
    }
</div>
</form>
  </div>
  )
}

export default Forgot