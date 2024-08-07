import { Navigate, Route, Routes } from "react-router-dom";
import UserSignup from "./components/Users/UserSignup";
import UserLogin from "./components/Users/UserLogin";
import AdminSignup from "./components/Admin/AdminSignup";
import AdminLogin from "./components/Admin/AdminLogin";
import Home from "./components/Layout/Home";
import Layout from "./components/Layout/Layout";
import NotFound from "./components/Layout/NotFound";
import UserDashboard from "./components/Users/UserDashboard";
import UserLayout from "./components/Users/UserLayout";
import AdminDashboard from "./components/Admin/AdminDashboard";
import AdminLayout from "./components/Admin/AdminLayout";
import Forgot from "./components/Users/Forgot";
import InputOtp from "./components/Users/InputOtp";
import CreateNewPassword from "./components/Users/CreateNewPassword";
import AdminForgot from "./components/Admin/Forgot";
import AdminInputOtp from "./components/Admin/InputOtp";
import AdminCreateNewPassword from "./components/Admin/CreateNewPassword";
import UserNavbar from "./components/Users/UserNavbar";
import Carousel from "./components/Layout/Carousel";
import Photo from "./components/Layout/Photo";
import News from "./components/Layout/News";
import About from "./components/Layout/About";
import ManageStudents from "./components/Admin/ManageStudents";
import PostAnnouncements from "./components/Admin/PostAnnouncements";
import ManageEvents from "./components/Admin/ManageEvents";
import Settings from "./components/Admin/Settings";

function App() {
  return (
    <Routes>
      <Route path="/carousel" element={<Carousel />} />
      <Route path="/photo" element={<Photo />} />
      <Route path="/news" element={<News />} />
      <Route path="/about" element={<About />} />



      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      <Route path="/user" element={<UserLayout />}>
        <Route index element={<Navigate to="/user/dashboard" />} />
        <Route path="dashboard" element={<UserDashboard />} />
        <Route path="forgot" element={<Forgot />} />
        <Route path="verifyotp" element={<InputOtp />} />
        <Route path="createpassword" element={<CreateNewPassword />} />
      </Route>

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Navigate to="/admin/dashboard" />} />
        <Route path="forgot" element={<AdminForgot />} />
        <Route path="verifyotp" element={<AdminInputOtp />} />
        <Route path="createpassword" element={<AdminCreateNewPassword />} />

        <Route path="dashboard" element={<AdminDashboard />}>
          <Route path="students" element={<ManageStudents />} />
          <Route path="announcements" element={<PostAnnouncements />} />
          <Route path="events" element={<ManageEvents />} />
          <Route path="settings" element={<Settings />} />
        </Route>

      </Route>

      <Route path="/user/login" element={<UserLogin />} />
      <Route path="/user/signup" element={<UserSignup />} />
      <Route path="/admin/signup" element={<AdminSignup />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/navbar" element={<UserNavbar />} />
      
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
