import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Main from './Pages/Main';
import Registration from './Pages/Registration';
import ContactUS from './Pages/ContactUs';
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <div>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route index element = {<Home/>}/>
          <Route path="/Home" element={<Home />} />
          <Route path = "Login" element ={<Login/>} />
          <Route path = "Registration" element ={<Registration/>} />
          <Route path = "Main" element ={<Main/>} />
          <Route path = "ContactUs" element ={<ContactUS/>} />
          
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;