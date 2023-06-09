import React from 'react';
import { Helmet } from 'react-helmet-async';
import SliderSection from '../SliderSection/SliderSection';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructors from '../PopularInstructors/PopularInstructors';
import NoticeSection from '../NoticeSection/NoticeSection';

const Home = () => {
    return (
        <div className='mt-12'>
            <Helmet>
                <title>common || Home</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <div className='h-1/2'>
                <SliderSection></SliderSection>
            </div>
            <div>
                <PopularClasses></PopularClasses>
            </div>
            <div>
                <PopularInstructors></PopularInstructors>
            </div>
            <div>
                <NoticeSection />
            </div>
        </div>
    );
};

export default Home;