import React from 'react';
import { Helmet } from 'react-helmet-async';
import SliderSection from '../SliderSection/SliderSection';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructors from '../PopularInstructors/PopularInstructors';
import ExtraSection from '../ExtraSection/ExtraSection';


const Home = () => {
    return (

        <>
            <Helmet>
                <title>Home || Dance School </title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>

            <div className='mt-12'>

                <div className='mt-10'>
                    <SliderSection></SliderSection>
                </div>

                <div className='mt-10 mb-5'>
                    <PopularClasses></PopularClasses>
                </div>
                
                <div className='mt-5 mb-5'>
                    <PopularInstructors></PopularInstructors>
                </div>
                <div className='mt-5 mb-5'>
                    <ExtraSection></ExtraSection>
                </div>
            </div>
        </>
    );
};

export default Home;