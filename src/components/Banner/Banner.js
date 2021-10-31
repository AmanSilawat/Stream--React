import React from 'react';

import Button from '../Button';
import Subscribe from '../Subscribe/Subscribe';
import banner_attachment from './../../assets/images/banner_attachment.png'


import { container, mainHeading } from './../../sassStyles/Global.module.css';
import { section, darkPara, lightPara, bannerAttachment } from './Banner.module.css';

const Banner = () => {
    return (
        <section className={`${container} ${section}`}>
            <img className={bannerAttachment} src={banner_attachment} alt="banner_attachment" />
            <h2 className={mainHeading}>
                Ludicrously increase your YouTube Live engagement
            </h2>

            <p className={darkPara}>
                Ever hosted a livestream where the comments fly by faster than in Superman’s annual eye exam? Ever ignored enthusiastic participants simply because it’s genetically impossible to keep pace? Wondered if your audience is blown-away, or if they’re simply bored-away? Pondered about life, the universe, and making your stream more alive? One where the audience’s energy is infectious (oops, bad word)?
            </p>
            <p className={lightPara}>
                If you nodded yes to any of those profound questions, our deep-thought algorithm is 97% sure that you’ll totally love StreamAlive.
            </p>

            <Subscribe />


        </section>
    )
}

export default Banner
