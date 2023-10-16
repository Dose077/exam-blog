import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';
import MobileHeader from '../../../pages/MobileHeader/MobileHeader';

const FrontLayout = () => {
    return (
      <Fragment>
          <div className='relative'>
            <div className='fixed z-50 top-0 w-full hidden md:block'>
                <Header />
            </div>
            <div className='fixed z-50 top-0 w-full md:hidden'>
                <MobileHeader />
            </div>
 
            <main className='mt-20'>
                <Outlet />
            </main>
            <Footer />
        </div>
      </Fragment>
    );
};

export default FrontLayout;