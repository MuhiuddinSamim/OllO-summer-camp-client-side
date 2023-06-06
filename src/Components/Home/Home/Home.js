import React from 'react';
import { Helmet } from 'react-helmet-async';
import SliderSection from '../SliderSection/SliderSection';
import PopularSection from '../PopularSection/PopularSection';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>common || Home</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <SliderSection></SliderSection>
            <PopularSection></PopularSection>
        </div>
    );
};

export default Home;