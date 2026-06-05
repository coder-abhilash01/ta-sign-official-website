import { ArrowRight, PhoneCall, } from 'lucide-react'
import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

import DropDown from './DropDown'
import MobileNavSheet from './MobileNavSheet'
import { navLists, servicesText } from '@/data/navData'


const Navbar = () => {

  const { pathname } = useLocation()


  return (
    <nav className='w-full  z-400 bg-white text-black  border  flex justify-between 
    items-center py-3 px-4 md:px-10 shadow-md  flex-wrap font-[Montserrat] '>

     <Link to="/home"><img src="/logo.png" alt="logo" className='h-13 md:h-14  object-cover ' /></Link> 


      <div className='md:flex   hidden items-center justify-around gap-6   '>
        <ul className='flex gap-4 md:gap-6 lg:gap-8 text-sm lg:text-[16px] font-medium items-center '>
          {
            navLists.map((list, i) => (
              <li key={i} className="group relative">
                <NavLink
                  to={list.link}
                  className={({ isActive }) =>
                    isActive
                      ? "text-blue-600"
                      : "text-neutral-800"
                  }
                > {list.title} </NavLink>

                <span className={` absolute left-0 -bottom-1 h-[1.5px]  bg-blue-600 transition-all  duration-300
      ${pathname === list.link 
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                  }
    `} />
              </li>
            ))
          }




          <li className='hidden  xl:flex text-sm font-medium'>
            <span className='flex  items-center gap-2 mr-1'>
              <PhoneCall size={18}
                className="text-blue-600 animate-[ring_2s_ease-in-out_infinite]"
              />
              Call Us  </span> <span> - 9306746685</span></li>

        </ul>

      </div>
      <MobileNavSheet side="right" className="hidden md:block" />
      <MobileNavSheet side="top" className="md:hidden flex" />


    </nav>
  )
}

export default Navbar
