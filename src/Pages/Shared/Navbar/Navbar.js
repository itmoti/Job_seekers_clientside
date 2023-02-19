import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { UserContext } from '../../../AuthContext/AuthContex';
import Home from '../../Home/Home/Home';
import './Navbar.css'

const Navbar = () => {
const {signIn , user, SignOut} = useContext(UserContext)
const googleSignIn = () => {
  console.log('buttn clicked')
  signIn()
  .then( (result) => {console.log(result)})
  .catch(
    (error) => console.log(error)
  )
}


    return (
    <section className='navbar-container  '>
       <div className='flex justify-between navbar-custom     p-7'>
      <Link to={'/'} className='text-3xl font-bold hover:text-primary'>JobSeekers</Link>
      
      <div className=' flex justify-between w-1/3 ' >
        <Link className='routes' >Home</Link>
        <Link className='routes'>About</Link>
        <Link className='routes'>Contact Us</Link>
       {
        user.email ?  <Link className='routes btn-accent ' onClick={() => googleSignIn()}>SignIn</Link>:
        <Link className='routes' onClick={() => googleSignIn()}>SignOut</Link>
       }
       
       
      </div>
     </div>
     <div>

     </div>
   
    </section>
    );
};

export default Navbar;