import { signInWithEmailAndPassword } from "firebase/auth"
import { useContext, useEffect } from "react"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Notification from "./components/notification/Notification"
import { authContext, USERLOCALSTORAGE } from "./contexts/authContext/AuthProvider"
import { auth } from "./database/firebase"
import ListEvent from "./pages/event/ListEvent"
import NewEvent from "./pages/event/NewEvent"
import Home from "./pages/home/Home"
import Register from "./pages/user/Register"
import Signin from "./pages/user/Signin"

function App() {
  const userCtx=useContext(authContext)
  // localStorage.clear()
  console.log('len:',localStorage.length)

  useEffect(()=>{

    localStorage.setItem(USERLOCALSTORAGE,JSON.stringify(userCtx.state.user))

  },[userCtx.state.user])
  
  return (
    <div className="">
      <BrowserRouter>
      <Notification/>
      <Navbar/>
      <Routes>
        <Route path='/'>
          <Route index element={<Home/>}/>
          <Route path="login" element={<Signin/>}/>
          <Route path="register" element={<Register/>}/>
        </Route>
        <Route path='/event'>
          <Route index element={<ListEvent/>}/>
          <Route path='new' element={<NewEvent/>}/>
        </Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
