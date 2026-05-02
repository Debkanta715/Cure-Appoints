import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {


const navigate=useNavigate(); // for login useNavigate is for chnage the path 
const [showmenu, setShowmenu]=useState(false) 
const [token , setToken]=useState(true) // if we have token then we logged in // if no token then we are not looged in 



  return (

    <div className='flex items-center justify-between text-sm py-4 mb-5  border-b border-b-gray-400'>
      <img src={assets.logo} alt="Logo"  className='w-44 cursor-pointer'/>
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to="/">
          <li className='hover:text-blue-500 cursor-pointer py-1'>HOME</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto '/>
        </NavLink>
        <NavLink to="/doctors">
          <li className='hover:text-blue-500 cursor-pointer py-1'>ALL DOCTORS</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto '/>
        </NavLink>
        <NavLink to="/about">
          <li className='hover:text-blue-500 cursor-pointer py-1'>ABOUT</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto '/>
        </NavLink>
        <NavLink to="/contact">
          <li  className='hover:text-blue-500 cursor-pointer py-1'>CONTACT</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto '/>
        </NavLink>
      </ul>
      <div className='flex item-center gap-4'>
        {
          token 
          //  here checkk the user is login or not if login then then the div or the button show again 
          ? <div className='flex items-center gap-2 cursor-pointer group relative' >
            <img className='w-8 rounded-full' src={assets.profile_pic} alt="" />
            <img className='w-2.5 ' src={assets.dropdown_icon} alt="" />

            {/* for the drop down when we click in teh profile pic then it shows  */}
            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
              <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                <p onClick={()=>navigate('/my-profile')} className='hover:text-black cursor-pointer'>My profile</p>
                <p onClick={()=>navigate('/my-appontments')}  className='hover:text-black cursor-pointer' >My Appoints</p>
                <p className='hover:text-black cursor-pointer'>Logout</p>
              </div>
            </div>

            {/*  */}
          </div>
           :<button onClick={()=>navigate('/login')} className='bg-blue-500 text-white px-8 py-3 rounded-full font-light hidden md:block'>Create account</button>
        }
       
      </div>
    </div>
  )
}

export default Navbar
