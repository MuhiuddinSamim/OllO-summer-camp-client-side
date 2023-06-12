import WelcomeCart from "./WelcomeCart";

import image1 from "../../../assets/img/samim1.png";
import image2 from "../../../assets/img/samim2.png";
import image3 from "../../../assets/img/samim3.jpg";
import image4 from "../../../assets/img/samim4.jpg";




const ExtraSection = () => {


    return (
        <div className="max-w-6xl mx-auto ">
            <h2 className="text-4xl font-bold text-center mt-24">Welcome</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-8">

                <WelcomeCart image={image4} name='Best Teacher' details='Lorem ipsum dolor sit amet elit consectetur adipiscing sed eiusmod tempor.'></WelcomeCart>

                <WelcomeCart image={image1} name='Certificate to World' details='Lorem ipsum dolor sit amet elit consectetur adipiscing sed eiusmod tempor.'></WelcomeCart>
                <WelcomeCart image={image2} name='Good Program' details='Lorem ipsum dolor sit amet elit consectetur adipiscing sed eiusmod tempor.'></WelcomeCart>
                <WelcomeCart image={image3} name='Student Service' details='Lorem ipsum dolor sit amet elit consectetur adipiscing sed eiusmod tempor.'></WelcomeCart>


            </div>
        </div>
    );
};

export default ExtraSection;