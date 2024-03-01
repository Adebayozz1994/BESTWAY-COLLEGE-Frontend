import axios from "axios"
import { useFormik } from "formik"
import { Link, useNavigate } from "react-router-dom"
import { adminLoginSchema } from "../Schema/loginAdmin";


const AdminLogin = () => {
    const navigate = useNavigate()
    const URL = "http://localhost:3000/admin/login"


    const { handleChange, handleSubmit, values, errors } = useFormik({
        initialValues: {
            adminId: "",
            password: "",
        },
        validationSchema: adminLoginSchema, 
        onSubmit: (values) => {
            console.log(values);
            axios.post(URL, values)
            .then((result)=>{
                console.log(result.data)
                if(result.data.status == true && result.data.token){
                    localStorage.setItem("token", result.data.token)
                    navigate("/admin/dashboard")
                }else{
                    navigate("/login")
                }
            })

        }

    });
  return (
    <section className="flex justify-center bg-gradient-to-r from-green-600 to-slate-900 h-screen" >
    <main className=" lg:m-20 shadow-md bg-gradient-to-r from-green-900 to-slate-950 text-white rounded-lg">
    <h1 className="text-center w-full mt-10 font-bold text-3xl text-red-500 ">Admin Portal</h1>
    <form onSubmit={handleSubmit} className="p-10 ">
    <input type="text" placeholder='Matric Number' onChange={handleChange} name="adminId" value={values.adminId} className="w-full mb-3 p-2 rounded-md outline-1 outline-slate-400 text-black" /> <span className="text-red-700">{errors.matricNumber}</span>
        <input type="password" placeholder='Password' onChange={handleChange} name="password" value={values.password}  className="w-full p-2 mb-3 rounded-md outline-1 outline-slate-400 text-black"/> <span className="text-red-700">{errors.password}</span>
        
        <button type="submit" className="bg-red-500 p-3 text-white rounded w-full mb-3 font-bold">login</button>
        <p className="text-center">Don't have an account? <Link to='/admin/signup' className="text-gray-500 font-bold">Sign up</Link></p>
        <div className="w-full flex justify-center lg:pt-4 text-yellow-300 font-bold">
                        <Link to='/admin/forgot'>forget password?</Link>
                    </div>
    </form>
    
    </main>
</section>
  )
}

export default AdminLogin