import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { node } from "./Config";
import { Authschema } from "./Validation";

function Signin() {
  const navigateto = useNavigate()
  const [isloading, setloading] = useState(false)
  const { handleChange, handleSubmit, values, errors, touched } = useFormik({
    initialValues: {
      Name: "",
      Email: "",
      Password: "",
      ConfirmPassword: "",
    },
    validationSchema: Authschema,
    onSubmit: async (values) => {
      try {
        setloading(true)
        let data = await axios.post(`${node.api}/user/signin`,values)
        setloading(false)
        navigateto('/login')
        toast("signin success")
      } catch (error) {
        console.log(error)
      }
    },
  });
  return (
    <div>
      <div style={{ height: "200px" }}></div>
      <form onSubmit={handleSubmit} class="container col-lg-4 signin">
        <div class="mb-3">
          <label class="form-label">Name</label>
          <input
            type="string"
            name="Name"
            aria-describedby="emailHelp"
            onChange={handleChange}
            value={values.Name}
            class={errors.Name&& touched?"input_error form-control" : "form-control"}
          />
          {errors.Name && touched && <p class="error"><i class="bi bi-shield-fill-exclamation me-1 p-1"></i>{errors.Name}</p>}
        </div>
        <div class="mb-3">
          <label class="form-label">Email</label>
          <input
            type="email"
            class={errors.Email&& touched?"input_error form-control" : "form-control"}
            Name="Email"
            aria-describedby="emailHelp"
            onChange={handleChange}
            value={values.Email}
          />
           {errors.Email && touched && <p class="error"><i class="bi bi-shield-fill-exclamation me-1 p-1"></i>{errors.Email}</p>}
        </div>
        <div class="mb-3">
          <label class="form-label">Password</label>
          <input
            type="password"
            class={errors.Password&& touched?"input_error form-control" : "form-control"}
            Name="Password"
            aria-describedby="emailHelp"
            onChange={handleChange}
            value={values.Password}
          />
          {errors.Password && touched && <p class="error"><i class="bi bi-shield-fill-exclamation me-1 p-1"></i>{errors.Password}</p>}
        </div>
        <div class="mb-3">
          <label class="form-label">Confirm Password</label>
          <input type="string"
          Name="ConfirmPassword"
          onChange={handleChange}
          value={values.ConfirmPassword}
          class={errors.ConfirmPassword&& touched?"input_error form-control" : "form-control"}
           />
          {errors.ConfirmPassword && touched && <p class="error"><i class="bi bi-shield-fill-exclamation me-1 p-1"></i>{errors.ConfirmPassword}</p>}
        </div>
        <button  type="submit" class="btn btn-primary col-12">
          Submit
        </button>
        <div class="text-center">
          <p>Already have a acoount Please login</p>
          {
              
        isloading ? <div class="text-center">
        <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>:
          <Link to={"/login"}>Login</Link>
          }
        </div>
      </form>
    </div>
  );
}

export default Signin;
