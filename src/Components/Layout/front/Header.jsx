import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';

const Header = () => {
 const {isAuthenticated} =useContext(AuthContext)
    return (
            <header className='flex items-center justify-between bg-[#232536] h-20 px-20'>
                <div className='text-white font-bold text-[]'>
                    
                {isAuthenticated ?  (
                    <Link to='/my-blogs'>My blogs</Link>

                ):(
                    <Link to='/'><img src="/Logo.png" alt=""/></Link>
                    )}
                </div>
                <div className='text-white mx-2 flex items-center gap-6'>
                    <Link to='/'>Home</Link>
                    <Link to='/category'>Category</Link>
                    <Link to='/about'>About Us</Link>
                    <Link to='/blogs'>Blogs</Link>
                    <Link to='/register'>Register</Link>
                {isAuthenticated ? (
                <Link to='/account'>Account</Link>
                ):( 
                <Link to='/login' className='bg-white px-12 py-4 ml-10 rounded-md text-[#232536]'>Login</Link>
                )}
                </div>
            </header>
    );
};

export default Header;