import React from 'react';
import logo from './../../assets/images/stream_alive.png';
import { Link } from 'react-router-dom';

import Button from '../Button';

import { header, header__content } from './Header.module.css';
import { container } from './../../sassStyles/Global.module.css';

const Header = () => {
    return (
        <header className={header}>
            <div className={container}>
                <div className={header__content}>

                    <h1>
                        <Link to='/'>
                            <img src={logo} alt="Stream Alive" />
                        </Link>
                    </h1>
                    <div>
                        <Button btnStyle="black">Login</Button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
