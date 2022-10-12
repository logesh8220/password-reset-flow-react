import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { node } from './Config'

function Reset() {
    const {Token,Id} = useParams()
    const {handleChange,handleSubmit,values}  = useFormik({
        initialValues:{
                Password:"",
                confirmPassword:"",
        },
        onSubmit: async (values) =>{
            let reset = {
                values,
                Token,
                Id
            }
            console.log(reset)
            try {
                let data = await axios.post(`${node.api}/user/reset`,reset)
                alert("password rest success")
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
  <label  class="form-label">Password</label>
  <input type="password" class="form-control"   Name="Password" aria-describedby="emailHelp" onChange={handleChange} value={values.Password}/>
</div>
<div class="mb-3">
  <label  class="form-label">ConfirmPassword</label>
  <input type="password" class="form-control" aria-describedby="emailHelp"/>
</div>
<button type="submit" class="btn btn-primary col-12">Submit</button>
<div class="text-center">
<Link to={'/login'}>Login</Link>
</div>
<div class="text-center">
<Link to={'/'} class="btn btn-primary col-12">Close</Link>
</div>
</form>
  </div>
  )
}

export default Reset