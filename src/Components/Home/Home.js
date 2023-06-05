import React from 'react';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>common || Home</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>


            

            <h1>this is home page</h1>
        </div>
    );
};

export default Home;