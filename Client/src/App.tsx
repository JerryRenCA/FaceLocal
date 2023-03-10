import { useContext, useEffect } from "react"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Notification from "./components/notification/Notification"
import { authContext, USERLOCALSTORAGE } from "./contexts/authContext/AuthProvider"
import ListEvent from "./pages/event/ListEvent"
import NewEvent from "./pages/event/NewEvent"
import Home from "./pages/home/Home"
import Profile from "./pages/profile/Profile"
import PasswordChange from "./pages/user/PasswordChange"
import RegisterPanel from "./pages/user/RegisterPanel"
import Signin from "./pages/user/SigninPanel"

// ============== Module ===============
function App() {
  
  const userCtx=useContext(authContext)

  // NOTE: Update localStorage when authContext refreshed
  useEffect(()=>{
    localStorage.setItem(USERLOCALSTORAGE,JSON.stringify(userCtx.state.user))
  },[userCtx.state])
  
  return (
    <div className="">
      <BrowserRouter>
      <Notification/>
      <Navbar/>
      <Routes>
        <Route path='/'>
          <Route index element={<Home/>}/>
          <Route path="login" element={<Signin/>}/>
          <Route path="register" element={<RegisterPanel/>}/>
          <Route path="user/profile" element={<Profile/>}/>
          <Route path="user/password" element={<PasswordChange/>}/>
        </Route>
        <Route path='/event'>
          <Route index element={<ListEvent/>}/>
          <Route path='post' element={<NewEvent/>}/>
        </Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
