import React from 'react';
import Banner from '../../components/Banner/Banner';
import Layout from '../../components/Layout/Layout';
import QuoteSection from '../../components/QuoteSection/QuoteSection';
import SubscribeSection from '../../components/SubscribeSection';
import CardSection from './../../components/CardSection'

import card_group_a_1scale3x from './../../assets/images/card_group_a_1scale3x.png';
import card_group_a_2scale3x from './../../assets/images/card_group_a_2scale3x.png';
import card_group_a_3scale3x from './../../assets/images/card_group_a_3scale3x.png';

import './style.css';

const data = [
    {
        id: 1,
        title: 'Quick Questions',
        img: card_group_a_1scale3x,
        details: 'Ever asked your tribe where in the world they’re joining from, only to ignore them? Never again. Bring locations to life with maps that pin-point your audience in real-time- as they put it in the chat.'
    },
    {
        id: 2,
        title: 'Wonder Words',
        img: card_group_a_2scale3x,
        details: 'Ever asked questions and made your optometrist proud by how fast you eyeball the answers? Never again. See & show real-time word-clouds that reflect your audience’s thinking- as they put it in the chat.'
    },
    {
        id: 3,
        title: 'Power Polls',
        img: card_group_a_3scale3x,
        details: 'Ever asked viewers to scan a QR code, launch an app, or do browser gymnastics simply to answer a poll? Never again. Show dynamic polls that reflect audience choices- as they put it in the chat.'
    }
]

const data2 = [
    {
        id: 1,
        title: 'Magic Maps',
        img: card_group_a_1scale3x,
        details: 'Ever asked your tribe where in the world they’re joining from, only to ignore them? Never again. Bring locations to life with maps that pin-point your audience in real-time- as they put it in the chat.'
    },
    {
        id: 2,
        title: 'Fantastic Fans',
        img: card_group_a_2scale3x,
        details: 'At the end of your livestream, StreamAlive will go through all comments to help you identify the most engaged people in your audience. This way, you’ll know who to focus your efforts on.'
    },
    {
        id: 3,
        title: 'Real-time Recommendations',
        img: card_group_a_3scale3x,
        details: 'Is your audience silent, shouting, confused, or clear? StreamAlive’s AI will translate comment cadence, sentiment, and tonality into simple audio cues for you. That way, you won’t zig when you need to zag.'
    }
]


const Home = () => {
    return (
        <Layout>
            <Banner />
            <QuoteSection />
            <CardSection data={data} />
            <CardSection data={data2} />
            <SubscribeSection />
        </Layout>
    )
}

export default Home
