import './App.css'
import Footer from "./Components/Footer.jsx"
import Navbar from './Components/Navbar.jsx'
import { Routes, Route, } from "react-router-dom";
import Home from "./Pages/Home.jsx"
import SignUp from "./Pages/SignUp.jsx"
import Login from "./Pages/Login.jsx"
import ProtectedRoute from "./Components/ProtectedRoute.jsx"

function App() {


  function Logout() {
    localStorage.clear()
    return <Navigate to="/login" />
  }
  
  function RegisterAndLogout() {
    localStorage.clear()
    return <SignUp />
  }



  return (
    <>
      <Navbar/>
      <Routes>
      <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
      
      <Route path="/logout" element={<Logout />} />
      <Route path='/Signup' element={<RegisterAndLogout />} />
      <Route path='/Login' element={<Login/>} />
      <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
