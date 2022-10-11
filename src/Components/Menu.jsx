import { NavLink } from "react-router-dom";
import './menu.css';



function Menu() {



  return (

    <ul className='menu'>
      <li >
      <NavLink className={({isActive}) => "nav-link" + (isActive ? " selected" : "") } to='/home'> Home </NavLink>
      </li>
      <li >
      <NavLink className={({isActive}) => "nav-link" + (isActive ? " selected" : "") } to='/movies'> Movies </NavLink>
      </li>
      <li >
      <NavLink className={({isActive}) => "nav-link" + (isActive ? " selected" : "") } to='/tv-show'> TV Show </NavLink>
      </li>
      <li >
      <NavLink className={({isActive}) => "nav-link" + (isActive ? " selected" : "") } to='/contacts'> Contacts </NavLink>
      </li>
    </ul>
  );
}

export default Menu;
