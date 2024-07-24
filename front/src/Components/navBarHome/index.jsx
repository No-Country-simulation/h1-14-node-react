
import React from 'react'
import bell  from '../../assets/iconHome/bell.svg'
import helpCircle from '../../assets/iconHome/help-circle.svg'
import search from '../../assets/iconHome/search.svg'
import { Input } from "@/Components/ui/input";


 function NavBarHome() {
  return (
    <div className='w-full h-[75px] py-6 pl-6 pr-12 bg-white flex gap-10'>
      <div className='w-9/12 flex justify-start items-center relative'>
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
        
        <div className='flex justify-evenly flex-grow items-center border-l border-inputPrimary  opacity-50'>
          <img src={bell} />
          <img src={helpCircle} />
          <div className='w-6 h-6 md:w-10 md:h-10 rounded-full bg-black'></div>
        </div>
    </div>
  )
}

export default NavBarHome;