import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/* left section */}
        <div>
          <img className='mb-5 w-40 'src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6  '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid animi, corporis, iure at id sit culpa earum accusantium quidem dignissimos voluptate totam quas non labore eos enim quis! Iste, nobis.</p>
        </div>

        {/* center sectiojn */}
        <div>
          <p className='text-xl font-medium mb-5'>Company</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>Abous us</li>
            <li>contact us</li>
            <li>Privacy policy</li>
          </ul>

        </div>

        {/* Right section */}

        <div>
          <p className='text-xl font-medium mb-5'>Get in Touch</p>
          <ul >
          
            <li>+1-212-456-7898</li>
            <li>gonide123@gmailcom</li>
          </ul>
        </div>
        <div>

          {/* copyrihgth text */}
          <p className='py-5 text-sm text-center'>copyrightW2023 all rights are reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer