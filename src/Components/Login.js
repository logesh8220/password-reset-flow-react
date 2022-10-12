import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Toastify } from 'toastify'
import { node } from './Config'
import 'react-toastify/dist/ReactToastify.css';

function Login() {
    const navigateto = useNavigate()
    const [isloading, setloading] = useState(false)
    const { handleChange, handleSubmit, values } = useFormik({
        initialValues: {
            Email: "",
            Password: "",
        },
        onSubmit: async (values) => {
            try {
                setloading(true)
                let data = await axios.post(`${node.api}/user/login`, values)
                setloading(false)
                console.log(data.data.Token)
                console.log(data)
                if (data.status == 200) {
                    window.localStorage.setItem("token", data.data.Token)
                    navigateto('/home')
                    toast.success("Login Success")
                }

            } catch (error) {
                console.log(error)
                setloading(false)
                toast.success(error.response.data.message)
            }
        }

    })
    return (
        <div >
            <div style={{ height: "200px" }}></div>
            {
                isloading ? <div class="text-center">
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>
                </div> :
                    <form onSubmit={handleSubmit} class="container col-lg-4 signin">
                        <div class="mb-3">
                            <label class="form-label">Email</label>
                            <input type="email" class="form-control" Name="Email" aria-describedby="emailHelp" onChange={handleChange} value={values.Email} />
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Password</label>
                            <input type="password" class="form-control" Name="Password" aria-describedby="emailHelp" onChange={handleChange} value={values.Password} />
                        </div>
                        <button type="submit" class="btn btn-primary col-12">Submit</button>
                        <div class="text-center">
                            <Link to={'/forgot'}>Forgot Pasword ?</Link>
                        </div>
                        <div class="text-center">
                            <Link to={'/'} class="btn btn-primary col-12">Close</Link>
                        </div>
                    </form>
            }
        </div>
    )
}

export default Login