import Navbar from "./components/Navbar"
import Assignment from "./components/Assignment"
import LogIn from "./components/LogIn"
import { Route, Routes } from "react-router-dom"

function App() {
  

  return (
    <>
       <Routes>
      <Route path="/" element={<Assignment/>}/>
      <Route path="/login" element={<LogIn/>}/>
      <Route path="/navbar" element={<Navbar/>}/>
      
    </Routes>
    </>
  )
}

export default App
