import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className=' bg-[#232536]  py-[56px] pt-[60px] px-4 md:px-20' >
            <div className='md:flex flex-col md:flex-row gap-3 justify-between  mt-12'><div>
                    <p className='text-white opacity-60 text-xs'>Finstreet 118 2561 Fintown</p>
                    <p className='text-white opacity-60 text-xs'>Hello@finsweet.com  020 7993 2905</p>

</div>
                <div className='flex gap-[26px] mt-4 text-[16px] text-[#6D6E76]'>

                    <Link ><FaFacebook /></Link>
                    <Link><FaTwitter /></Link>
                    <Link><FaInstagram /></Link>
                    <Link><FaLinkedin /></Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;