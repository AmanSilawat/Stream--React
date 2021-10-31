import React from 'react';
import Footer from '../Footer';
import Header from '../Header/Header';

import { content } from './Layout.module.css';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div id="container">
                <div id='sidebar'></div>
                <div id={content}>{children}</div>
            </div>
            <Footer />
        </>
    )
}

export default Layout
