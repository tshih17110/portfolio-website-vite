import { useState, useEffect } from 'react';

import Stars from './stars';
import Header from './header';
import Intro from './intro';
import Footer from './footer';

import '../styles/main.scss';

const Layout = ({ children }:{children:any}) => {



    return (
        <div className="layout-container">
            <Stars />
                <>
                    <Header />
                    <main>{children}</main>
                    <Intro />
                    <Footer />
                </>
        </div>
    );
}

export default Layout
