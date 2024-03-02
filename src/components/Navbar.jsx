import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import React, { useState } from 'react';
import icon1 from '../assets/icon1.png';

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
      <div className='bg-black flex justify-between items-center max-w-full mx-auto h-20 px-2' id='home'>  
            {/* Changed ml-4 to px-4 for consistency in padding, adjust as needed */}

            <img src={icon1} alt="My Blog" style={{width: '250px', height: '250px'}} className="p-10" /> {/* Resize icon */}
            <ul className='hidden md:flex text-white'>
                <li className='p-3'><a href='#home'>Home</a></li>
                <li className='p-3'><a href='#about'>About</a></li>
                <li className='p-3'><a href='#industry'>Industry</a></li>
                <li className='p-3'><a href='#school'>School/Department</a></li>
                <li className='p-3'><a href='#blog'>Blog</a></li>
                <li className='p-3'><a href='#research'>Research</a></li>
                <li className='p-3'><a href='#seminar'>Seminar</a></li>
            </ul>
            <div onClick={handleNav} className='block md:hidden text-red-600'>
                {nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30}/>}
            </div>

            <div className={nav ? 'fixed left-0 top-0 w-[37%] bg-white ease-in-out duration-500' : 'fixed left-[-100%]'}>
                {/* Corrected className for width and border */}
                
                <h1 className='text-3xl font-bold ml-4 pl-6' style={{ color: 'red' }}>MY BLOG</h1>
                <ul className='p-8 text-2xl pl-8'>
                    <li className='p-2'>Home</li>
                    <li className='p-2'>School/Department</li>
                    <li className='p-2'>Industry</li>
                    <li className='p-2'>About</li>
                    <li className='p-2'>Blog</li>
                    <li className='p-2'>Research</li>
                    <li className='p-2'>Seminar</li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
