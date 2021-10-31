import React from 'react';


import { section, innerSection } from './Footer.module.css';
import { container } from './../../sassStyles/Global.module.css'
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <footer className={section}>
            <div className={container}>
                <div className={innerSection}>
                    <Link to="/redirect">Terms of Use</Link>
                    <Link to="/redirect">Privacy Policy</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
