import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Home from '../../Home/Home/Home';
import './Navbar.css'

const Navbar = () => {
    return (
    <section className='navbar-container  '>
       <div className='flex justify-between navbar-custom     p-7'>
      <Link to={'/'} className='text-3xl font-bold hover:text-primary'>JobSeekers</Link>
      
      <div className=' flex justify-between w-1/3 ' >
        <Link className='routes' >Home</Link>
        <Link className='routes'>About</Link>
        <Link className='routes'>Contact Us</Link>
        <Link className='routes'>Sign IN</Link>
      </div>
     </div>
     <div>

     </div>
   
    </section>
    );
};

export default Navbar;