import React from 'react';

const PopularSection = () => {
    return (
        <div className='flex items-center justify-center'>
            <div >
                <h1> Popular Section </h1>
            </div>

            <div className="indicator">
                <span className="indicator-item indicator-center indicator-middle badge badge-secondary">Uploading Image...</span>
                <img src="https://i.ibb.co/Ryg0xwx/2.png" alt='' />
            </div>
        </div>
    );
};

export default PopularSection;