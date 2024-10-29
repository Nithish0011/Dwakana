import React from 'react'
import {assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-16'>
        <div className='md:w-1/2 flex flex-col md:flex-wrap bg-primary rounded-lg  px-6 md:px-20'>
            <p className='text-3xl md:text-3xl lg:text-4xl text-white font-semibold leading-tight md:leading-tight lg-leading-tight'> Book Appointment <br/> With trusted Doctors</p>
            <div className='flex flex-colmd:flex-row items-center gap-3 text-white text-sm font-light'>
              <img className='w-28'src={assets.group_profiles} alt=""/>
              <p> Simply through our extensive list of trusted doctors,<br className='hidden sm:block'/>schedule</p>
           </div>
           <a href="#speciality" className='flex items-center gap-2 bg-whote px-8 py-3 rounded-full text-gray-600 text-sm m-auto hover:scale-105 transition-all duration:300'>
            Book Appointment <img className='w-3'src={assets.arrow_icon} alt="book"/>
           </a>
          

        {/*-----right side------*/}
           <div className='md:w-1/2  relative'>
              <img className='w-full md:absolute bottom-0  float-right h-auto rounded-lg' src={assets.Doccy} alt=""></img>

          </div>
        </div>
    </div>

    
    
  )
}

export default Header