import React from 'react';

import Button from '../Button';
import { btnSameWidth, smallPara, group } from './Subscribe.module.css'

const Subscribe = () => {
    return (
        <div className={group}>
            <Button size="large" btnStyle="outline">Please enter your email ID to make your stream alive. Oh, and for free</Button>
            <Button size="large" btnStyle="filled">Join waitlist and get a sneak preview of Stream Alive</Button>

            <p className={smallPara}>* Currently available for YouTube Live. Other platforms from Teams to Twitch coming soon</p>
        </div>
    )
}

export default Subscribe
