import axios from "axios";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { signupSchema } from "../Schema/adminSchema";



const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };
const AdminSignup = () => {
    const navigate = useNavigate();
    const URL = "http://localhost:3000/admin/register";
  
    const { handleChange, handleSubmit, values, errors } = useFormik({
      initialValues,
      validationSchema: signupSchema,
      onSubmit: (values) => {
        console.log(values);
        axios.post(URL, values)
          .then((response) => {
            console.log(response.data);
            if (response.data.status == 200){
                  navigate("/admin/login");
            }else{
              navigate("/admin/signup")
            }
          })
          .catch((error) => {
            console.error("Registration failed:", error);
            // Handle registration failure (e.g., display error message)
          });
      },
    });
    return (
        <section className="max-w-md mx-auto">
        <h1 className="mt-10 font-bold text-center text-3xl">Sign in</h1>
        <form onSubmit={handleSubmit} className="p-10">
          <input
            type="text"
            placeholder="First Name"
            onChange={handleChange}
            name="firstName"
            value={values.firstName}
            className="w-full p-3 mb-3"
          />
          <span>{errors.firstName}</span>
          <input
            type="text"
            placeholder="Last Name"
            onChange={handleChange}
            name="lastName"
            value={values.lastName}
            className="w-full p-3 mb-3"
          />
          <span>{errors.lastName}</span>
          <input
            type="email"
            placeholder="Email address"
            onChange={handleChange}
            name="email"
            value={values.email}
            className="w-full p-3 mb-3"
          />
          <span>{errors.email}</span>
          <input
            type="password"
            placeholder="Password"
            onChange={handleChange}
            name="password"
            value={values.password}
            className="w-full p-3 mb-3"
          />
          <span>{errors.password}</span>
          <button
            type="submit"
            className="w-full p-3 mb-3 font-bold bg-green-600 text-white"
          >
            Signup
          </button>
          <p className="text-center">
            You already have an account?{" "}
            <Link to="/admin/login" className="text-gray-600 font-bold">
              Login
            </Link>
          </p>
        </form>
      </section>
    )
}



export default AdminSignup