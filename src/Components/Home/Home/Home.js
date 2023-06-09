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
            <div className='w-fit'>
                <SliderSection></SliderSection>
            </div>
            <div className='mt-5 mb-5'>
                <PopularClasses></PopularClasses>
            </div>
            <div className='mt-5 mb-5'>
                <PopularInstructors></PopularInstructors>
            </div>
            <div className='mt-5 mb-5'>
                <NoticeSection />
            </div>
        </div>
    );
};

export default Home;