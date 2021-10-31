import React from 'react';
import Subscribe from '../Subscribe/Subscribe';

import { subHeading, colorBlack, container } from './../../sassStyles/Global.module.css';
import { section } from './SubscribeSection.module.css';

const SubscribeSection = () => {
    return (
        <div className={`${section} ${container}`}>
            <h3 className={subHeading}>...and lots more to make your stream alive</h3>
            <p className={colorBlack}>First step for your Free StreamAlive account: Enter your email ID</p>
            <Subscribe />
        </div>
    )
}

export default SubscribeSection
