import React  from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const SliderSection = () => {
    // const [axiosSecure] = UseAxiosSecure();
    // const [Sliders, setSlider] = useState([]);
    // const [isPlaying, setIsPlaying] = useState(true);

    // useEffect(() => {
    //     fetchClass();
    // }, []);

    // const fetchClass = () => {
    //     axiosSecure.get('/Instructor')
    //         .then(response => {
    //             const Sliders = response.data;
    //             setSlider(Sliders);
    //             // console.log(Sliders);
    //         })
    //         .catch(error => {
    //             // console.error('Error:', error);
    //         });
    // };

    // const handleCarouselChange = (index) => {
    //     if (index === Sliders.length - 1) {
    //         setIsPlaying(true); 
    //     }
    // };





    return (
        // <Carousel
        //     autoPlay={isPlaying}
        //     interval={1500}
        //     onChange={handleCarouselChange}
        //     stopOnHover            

        // >
        //     {Sliders.map((Slider) => (
        //         <div key={Slider._id}>
        //             <img src={Slider.InstructorImage} alt={`Slide ${Slider.id}`} />
        //         </div>
        //     ))}
        // </Carousel>
        <div>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://www.royalballetschool.org.uk/wp-content/uploads/2020/09/TAIC_2019_INT_SPR_LON_55.jpg" className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://www.royalballetschool.org.uk/wp-content/uploads/2022/04/Untitled-1.jpg" className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://www.royalballetschool.org.uk/wp-content/uploads/2022/02/Untitled-design-4.jpg" className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://learn.podium.school/wp-content/uploads/2021/05/bharatanatyam-teacher-1024x427.jpg.webp" className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default SliderSection;

