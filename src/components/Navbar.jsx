import React from 'react'
import {assets} from '../assets/assets'
import { useNavigate, NavLink} from 'react-router-dom'
import { useState } from 'react'
import propic from '../assets/assets'




const Navbar = () => {

    const navigate = useNavigate();

    const [showMenu, SetShowMenu]= useState(false)
    const [token, setToken] = useState(true)

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
        <img onClick={()=>navigate('/')}className='w-44 cursor-pointer'src={assets.logo} alt="logo"/>
        <ul className='hidden md:flex items-start gap-5 front-medium'>
            <NavLink to='/'>
                <li className='py-4'>Home</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>    
            <NavLink to='/doctors'>
                <li className='p-4'>All Doctors</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='/about'>
                <li className='p-4'>About</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='/contact'>
                <li className='p-4'>Contact</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
        </ul>
        <div className='flex items-center gap-4'>
            {
                token
                ?<div className="flex items-center gap-2 cursor-pointer group relative">
                    <img className= 'w-8 rounded-full' src={propic} alt="pro"/>
                    <img className= 'w-2.5' src={assets.dropdown_icon} alt=""/>
                    <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                        <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                          <p onClick={()=>navigate('my-profile')}className='hover:text-black cursor-pointer'>My Account</p>
                          <p onClick={()=>navigate('MyAppointments')} className='hover:text-black cursor-pointer'>my Appointment</p>
                          <p onClick={()=>setToken(false)}className='hover:text-black cursor-pointer'>Logout</p>
                        </div> 
                    </div>
                </div>        

                :
                
            <button onClick={()=>navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light '>Create Account</button>
            }
       
        </div>

    </div>
  )
}

export default Navbar