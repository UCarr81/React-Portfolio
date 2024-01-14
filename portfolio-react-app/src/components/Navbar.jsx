import React from 'react';
import logo from '../assets/Logo.png';
import hamburgerStack from '../assets/HamburgerStack .png';

const Navbar = () => {
    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-gray-700 text-white-300">
        <div>
            <img src={logo} alt="logo" style={{width: '100px'}}/>
        </div>

        {/*Menu*/}
        <div>
            <uL className="hidden md:flex">
                <li>Home</li>
                <li>About</li>
                <li>Work</li>
                <li>Contact</li>
            </uL>
        </div>

        
        {/*Hamburger*/}
        <div className='md:hidden z-10'>
            <img src={hamburgerStack} alt= "logo" style={{width: '30px'}}/>
        </div>

        {/*Mobile Menu*/}
        <div className='hidden'>
            <uL className='absolute top-0 left-0 w-full h-screen bg-gray-700 flex flex-col justify-center items-center'>
                <li className='py-6 text-3xl'>Home</li>
                <li className='py-6 text-3xl'>About</li>
                <li className='py-6 text-3xl'>Work</li>
                <li className='py-6 text-3xl'>Contact</li>
            </uL>
        </div>


        
        {/*Icons*/}
         <div className='hidden'></div>
        </div>
    )
}

export default Navbar;