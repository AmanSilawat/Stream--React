import React from 'react';
import { Link } from 'react-router-dom';

import { container, subHeading } from './../../sassStyles/Global.module.css';
import { section, card, cardItem, cardImage } from './CardSection.module.css';

const CardSection = ({ data }) => {
    return (
        <section className={`${container} ${section}`}>
            <h3 className={subHeading}>Here’s how StreamAlive’s first “powered-by-ramen version” will turn your engagement dial all the way to the right MoreWord</h3>
            <div className={card}>
                {data.map(({ title, img, details }) => (
                    <Link to='/redirect' className={cardItem}>
                        <div className={cardImage}>
                            <img src={img} alt="card img" />
                        </div>
                        <h4>{title}</h4>
                        <p>{details}</p>
                    </Link>
                ))}
            </div>
        </section>
    )
}

export default CardSection
