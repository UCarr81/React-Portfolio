import React, { useState } from 'react';
import logo from '../assets/Logo.png';
import hamburgerStack from '../assets/HamburgerStack .png';
import hamburgerEmpty from '../assets/HamburgerEmpty  .png';

const Navbar = () => {
    const [ nav, setNav ] = useState(false);
    const handleClick = () => setNav(!nav);
    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-gray-800 text-white">
        <div>
            <img src={logo} alt="logo" style={{width: '100px'}}/>
        </div>

        {/*Menu*/}
        <div>
            <uL className="hidden md:flex absolute top-5 right-5">
                <li>Home</li>
                <li>About</li>
                <li>Work</li>
                <li>Contact</li>
            </uL>
        </div>

        
        {/*Hamburger*/}
        <div onClick={handleClick} className='md:hidden z-10 absolute top-5 right-5 '>
            {!nav ? <img src={hamburgerStack} alt="logo" style={{width:'30px'}}/> : <img src={hamburgerEmpty} alt="logo" style={{width:'30px'}}/>}
        </div>

        {/*Mobile Menu*/}
        <div>
            <uL className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-gray-700 flex flex-col justify-center items-center'}>
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