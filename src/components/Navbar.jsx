import React ,{useEffect, useState}from 'react';
import {Link} from 'react-router-dom';

import {styles} from '../style';
import {navLinks} from '../constants';
import {logo, menu, close} from '../assets';


const Navbar = () => {
  const [active, setActive]=useState('')
  return (
    <nav 
      className={'${style.paddingX} w-full flex items-center py-5 fixed top-0 z-20 big-primary'}>
      <div className="w-full flex jysify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-2" onClick={
          ()=>{
            setActive("");
            window.scrollTo(0,0);
          }
        }>
        <img src={logo} alt="logo" className='w-9 h-9 object-contain'/>
        <p className="text-white text-[18px] font-bold cursor-pointer">Ravil<span className="sm:block hidden"> | Frontend developer</span></p>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar