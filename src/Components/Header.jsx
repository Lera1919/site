import './header.css';
import Menu from './Menu.jsx'
import Search from './Search.jsx'
import Registered from './Registered.jsx'
import logo from '../image/logo.svg'

function Header() {



  return (
    <header className='header'>
      <div className='block'>
        <img className='logo' src={logo} alt='Logotype'/>
        <Menu />
      </div>
      <div className='block'>
        <Search />
        <Registered />
      </div>
     
      </header>
  );
}

export default Header;
