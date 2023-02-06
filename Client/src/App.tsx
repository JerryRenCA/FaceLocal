import { BrowserRouter,Routes,Route } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Notification from "./components/notification/Notification"
import Home from "./pages/home/Home"
import Register from "./pages/user/Register"
import Signin from "./pages/user/Signin"

function App() {


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
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
