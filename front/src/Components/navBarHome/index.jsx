import React from 'react';
import bell from '../../assets/iconHome/bell.svg';
import Menu from '../../assets/iconosSidebar/menu.svg';
import helpCircle from '../../assets/iconHome/help-circle.svg';
import search from '../../assets/iconHome/search.svg';
import { Input } from "@/Components/ui/input";

function NavBarHome({ toggleSidebar }) {
  return (
    <div className="w-full h-[75px] py-4 px-4 md:pl-6 md:pr-12 bg-white flex items-center justify-between gap-4">
      
      <img 
        className="flex md:hidden cursor-pointer" 
        src={Menu} 
        alt="Menu" 
        onClick={toggleSidebar} 
      />

  
      <div className="flex-grow max-w-lg flex items-center relative">
        <Input 
          className="w-full rounded-3xl pl-12 pr-4 py-2 border border-borderCard" 
          placeholder="Buscar en justina.io"
        />
        <img 
          src={search} 
          className="absolute left-4" 
          alt="search icon" 
        />
      </div>

      
      <div className="flex items-center gap-4 md:gap-6">
        <img src={bell} alt="Notificaciones" className="w-5 md:w-6" />
        <img src={helpCircle} alt="Ayuda" className="w-5 md:w-6" />
        <div className="w-6 h-6 md:w-10 md:h-10 rounded-full bg-black"></div>
      </div>
    </div>
  );
}

export default NavBarHome;