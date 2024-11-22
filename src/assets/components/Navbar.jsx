

import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import { IoSearch } from 'react-icons/io5';
const Navbar = () => {
    return (
        <section className='w-11/12 mx-auto my-8 py-2'>
       <div className='flex justify-between items-center '>
        <div className=''>
<img className='w-[120px] h-[56px] invert ' src={logo} alt="" />
        </div>
      <div className='relative items-center   '>
    
      <input  className='border  text-center flex   md:w-[360px] h-[44px] 
      rounded-lg' type="search" name="" id="" placeholder='Search Your Destination' />
        <p className='absolute flex top-4 left-4 text-2xl right-2'><IoSearch></IoSearch></p>
      </div>
      <div className='md:block hidden'>
        <ul className='flex  text-white gap-4 '>
            <Link to='/'>Home</Link>
            <li>Destination</li>
            <li>Blog</li>
            <li>Contact</li>
            <li>login</li>
        </ul>
      </div>
       </div>
        </section>
    );
};

export default Navbar;
