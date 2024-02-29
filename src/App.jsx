import { Navigate, Route, Routes } from "react-router-dom"
import UserSignup from "./components/Users/UserSignup"
import Forgot from "./components/Layout/Forgot"
import UserLogin from "./components/Users/UserLogin"
import AdminSignup from "./components/Admin/AdminSignup"
import AdminLogin from "./components/Admin/AdminLogin"
import Home from "./components/Layout/Home"
import Layout from "./components/Layout/Layout"
import NotFound from "./components/Layout/NotFound"
import UserDashboard from "./components/Users/UserDashboard"
import UserLayout from "./components/Users/UserLayout"
import AdminDashboard from "./components/Admin/AdminDashboard"
import AdminLayout from "./components/Admin/AdminLayout"

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home/>} />
          <Route path="*" element={<NotFound/>}/>
        </Route>

        <Route path="/user" element={<UserLayout/>}>
          <Route path="/user" element={<Navigate to="/user/dashboard" />} />
          <Route path="/user/dashboard" element={<UserDashboard/>} />
        </Route>

        <Route path="/admin" element={<AdminLayout/>}>
          <Route path="/admin" element={<Navigate to="/admin/dashboard" />} />
          <Route path="/admin/dashboard" element={<AdminDashboard/>} />
        </Route>
        
        <Route path="/user/login" element={<UserLogin/>} />
        <Route path="/user/signup" element={<UserSignup />} />
        <Route path="/admin/signup" element={<AdminSignup />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/forgot" element={<Forgot/>}/>
        
      </Routes>
    </>
  )
}

export default App
