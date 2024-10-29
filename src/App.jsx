import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from "./pages/home";
import Doctors from "./pages/Doctors";
import Login from './pages/Login';
import Contact from './pages/Contact';
import About from  './pages/About';
import MyProfile from './pages/MyProfile';
import MyAppointments from './pages/MyAppointments';
import Appointment from './pages/Appointment';
import Navbar from './components/Navbar';
import Header from './components/Header';
import SpecialityMenu from './components/specialitymenu';
import Banner from './components/Banner';
import Footer from './components/Footer';

const App = () => {
  return (

  
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/doctors' element={<Doctors/>} />
        <Route path='/doctors/:speciality' element={<Doctors/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/my-profile' element={<MyProfile/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/appointment/:docId' element={<Appointment/>} />
      </Routes>
      <Footer/>
    </div>
  
  
  )
}

export default App