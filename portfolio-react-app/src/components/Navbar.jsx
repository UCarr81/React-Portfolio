import React, { useState } from 'react';
import logo from '../assets/Logo.png';
import hamburgerStack from '../assets/HamburgerStack .png';
import hamburgerEmpty from '../assets/HamburgerEmpty  .png';
import { Link } from 'react-scroll';

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
            <ul className="hidden md:flex absolute top-5 right-5">
                <li>
                    <Link to='home' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>

                <li>
                    <Link to='about' smooth={true} duration={500}>
                        About
                    </Link>
                </li>

                <li>
                    <Link to='project' smooth={true} duration={500}>
                        Projects
                    </Link>
                </li>

                <li>
                    <Link to='contact' smooth={true} duration={500}>
                        Contact
                    </Link>
               </li>

            </ul>
        </div>

        
        {/*Hamburger*/}
        <div onClick={handleClick} className='md:hidden z-10 absolute top-5 right-5 '>
            {!nav ? <img src={hamburgerStack} alt="logo" style={{width:'30px'}}/> : <img src={hamburgerEmpty} alt="logo" style={{width:'30px'}}/>}
        </div>

        {/*Mobile Menu*/}
        <div>
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-gray-700 flex flex-col justify-center items-center'}>
                <li className='py-6 text-3xl'>
                    <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-3xl'>
                    <Link onClick={handleClick} to='about' smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='py-6 text-3xl'>
                    <Link onClick={handleClick} to='project' smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li className='py-6 text-3xl'>
                    <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>
        </div>


        
        {/*Icons*/}
         <div className='hidden'></div>
        </div>
    )
}

export default Navbar;