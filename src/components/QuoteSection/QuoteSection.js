import React from 'react';

import david_bradshaw_trustbs from './../../assets/images/david_bradshaw_trustbs.jpg';

import { section, profile, content, heading, downPara, innerSection } from './QuoteSection.module.css';
import { container } from './../../sassStyles/Global.module.css';
import { dFlex, justifyCenter } from './../../sassStyles/Utils.module.css';

const QuoteSection = () => {
    return (
        <section className={`${section} ${container}`}>
            <div className={innerSection}>
                <div className={profile}>
                    <img src={david_bradshaw_trustbs} alt="David Bradshaw Trustbs" />
                </div>
                <div className={content}>
                    <h3 className={heading}>David “BS” Bradshaw aka TrustBS</h3>
                    <p>Freestyle hip-hop facilitator and beatboxer</p>
                    <p className={downPara}>“In our livestreams, we want people to feel connected, heard, and acknowledged. With streamAlive, we can finally do that.”</p>
                </div>
            </div>
        </section >
    )
}

export default QuoteSection;
