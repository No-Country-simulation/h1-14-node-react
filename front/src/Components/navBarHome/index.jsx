
import React from 'react'
import bell  from '../../assets/iconHome/bell.svg'
import Menu from '../../assets/iconosSidebar/menu.svg'
import helpCircle from '../../assets/iconHome/help-circle.svg'
import search from '../../assets/iconHome/search.svg'
import { Input } from "@/Components/ui/input";


 function NavBarHome({toggleSidebar, isSidebarVisible}) {
  return (
    <div className='w-full h-[75px] py-6 px-4 md:pl-6 md:pr-12 bg-white  flex justify-between gap-4'>
      <img 
      className='flex md:hidden' 
      src={Menu}
      alt="Menu"
      onClick={toggleSidebar}

      />
      <div className=' w-3/5 md:w-9/12 flex justify-start items-center relative'>
        
        <Input 
          className='w-full rounded-3xl h-full pl-12 pr-4 py-2 border border-borderCard '
          placeholder='Buscar en justina.io'
        />
        <img 
          src={search} 
          className='absolute left-4 '
          alt="search icon"
        />
      </div>
        
        <div className='flex justify-end gap-4 md:gap-0 w-1/5 md:w-1/4 px-2 md:px-0 md:justify-evenly md:flex-grow items-center md:border-l border-inputPrimary  opacity-50'>
          <img src={bell} />
          <img src={helpCircle} />
          <div className='w-6 h-6 md:w-10 md:h-10 rounded-full bg-black'></div>
        </div>
    </div>
  )
}

export default NavBarHome;