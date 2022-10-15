
import Menu from './Menu.jsx'
import React, {useState} from 'react';
import SideMenu from './SideMenu.jsx'
import Search from './Search.jsx'
import Registered from './Registered.jsx'
import logo from '../image/logo.svg'
import { NavLink } from "react-router-dom";
import { Bars2Icon } from '@heroicons/react/24/outline'
import { XMarkIcon } from '@heroicons/react/24/outline'

export default function Header() {

  const [show, setShow] = useState(false);

  const handlerClick = () => {
    // console.log(show);
    setShow(!show)
  }


  return (
    <>
    <header className='flex justify-between item-center max-w-screen-2xl mx-auto p-6'>
      <div className=' flex item-center gap-6'>
      <NavLink to='/home'> 
        <img className='w-48 h-auto' src={logo} alt='Logotype'/>
      </NavLink>
        <Menu />
      </div>
      <div className='hidden mb:flex flex item-center gap-6'>
        <Search />
        <Registered />
      </div>
      <button onClick={handlerClick}  className='flex  mb:hidden px-4 py-4 bg-slate-300 rounded-md hover:bg-slate 600 hover:text-white transition duration-200 ease-out'>
        <Bars2Icon className='w-6'/>
      </button>
        
      </header>

    
   
    <div className={`absolute ${show ? 'translate-x-0' : '-translate-x-full'} flex items-center justify-center w-full h-screen top-0 bg-slate-500 transition duration-1000 out-ease-in`}>
    <SideMenu />
    
      <button onClick={handlerClick}  className=' absolute top-6 right-6 px-4 py-4 bg-slate-300 rounded-md hover:bg-slate 600 hover:text-white transition duration-200 ease-out'>
        <XMarkIcon className='w-6'/>
      </button>
        
    </div>
    </>
  );
}


