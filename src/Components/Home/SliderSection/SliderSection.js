import React, { useEffect, useState } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import UseAxiosSecure from '../../Hooks/UseAxiosSecure';

const SliderSection = () => {
    const [axiosSecure] = UseAxiosSecure();
    const [Sliders, setSlider] = useState([]);
    const [isPlaying, setIsPlaying] = useState(true);

    useEffect(() => {
        fetchClass();
    }, []);

    const fetchClass = () => {
        axiosSecure.get('/Instructor')
            .then(response => {
                const Sliders = response.data;
                setSlider(Sliders);
                // console.log(Sliders);
            })
            .catch(error => {
                // console.error('Error:', error);
            });
    };

    const handleCarouselChange = (index) => {
        if (index === Sliders.length - 1) {
            setIsPlaying(true); 
        }
    };

    



    return (
        <Carousel
            autoPlay={isPlaying}
            interval={1500}
            onChange={handleCarouselChange}
            stopOnHover            

        >
            {Sliders.map((Slider) => (
                <div key={Slider.id}>
                    <img src={Slider.InstructorImage} alt={`Slide ${Slider.id}`} />
                </div>
            ))}
        </Carousel>


    );
};

export default SliderSection;

