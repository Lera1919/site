import { NavLink } from "react-router-dom";




function Menu() {



  return (

    <ul className='grid gap-12'>
      <li >
      <NavLink className={({isActive}) => "text-xl  px-4 py-2 hover:bg-slate-300 rounded-md transition duration-200 ease-out " + (isActive ? "bg-slate-500 text-white" : "") } to='/home'> Home </NavLink>
      </li>
      <li >
      <NavLink className={({isActive}) => "text-xl  px-4 py-2 hover:bg-slate-300 rounded-md transition duration-200 ease-out " + (isActive ? "bg-slate-500 text-white" : "") } to='/movies'> Movies </NavLink>
      </li>
      <li >
      <NavLink className={({isActive}) => "text-xl  px-4 py-2 hover:bg-slate-300 rounded-md transition duration-200 ease-out " + (isActive ? "bg-slate-500 text-white" : "") } to='/tv-show'> TV Show </NavLink>
      </li>
      <li >
      <NavLink className={({isActive}) => "text-xl  px-4 py-2 hover:bg-slate-300 rounded-md transition duration-200 ease-out " + (isActive ? "bg-slate-500 text-white" : "") } to='/contacts'> Contacts </NavLink>
      </li>
    </ul>
  );
}

export default Menu;
