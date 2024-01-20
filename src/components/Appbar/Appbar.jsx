import React, { useContext } from 'react'
//import Toolbar from '@mui/material/Toolbar';
import './Appbar.css';
import {Link} from "react-router-dom";
//import Switch from '@mui/material/Switch';
import { ThemeContext } from '../../App.jsx';
function Appbar() {
  const {theme,toggleTheme}=useContext(ThemeContext);
  return (                                                                                  
    <div className='navbar'>
      <ul className='navbar'>
        <li><Link className='nav-tags' to='/'>home</Link></li>
        <li><Link className='nav-tags' to='/courses'>courses</Link></li>
        <li><Link className='nav-tags' to='/signup'>Signup</Link></li>
        <li><Link className='nav-tags' to='/login'>Login</Link></li>
        {/* <Switch  color="default" onChange={toggleTheme} checked={theme==='light'}/> */}
        <li><span style={{cursor:'pointer'}} onClick={toggleTheme}>{theme==='light'?'🌑':'🌕'}</span></li>
      </ul>
    </div>
  )
}
export default Appbar;

