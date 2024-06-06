//It is a static component, will make it dynamic later

import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Categories = () => {
    return (
        <div className="mx-4 md:mx-8 lg:mx-16 mb-16">
            <h1 className="text-2xl md:text-3xl lg:text-4xl my-10 md:my-16 lg:my-20 text-center text-primary">
                Trending Categories</h1>
            <div className="carousel carousel-center p-4  bg-neutral rounded-box">
                <div className="carousel-item relative">
                    <img src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?t=st=1717668845~exp=1717672445~hmac=a5cd432faa4d593ad8caa22323bc5ecc7afbca8f933835a53545ac369a82b07c&w=900" className="rounded-box w-96 h-96" />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 text-center">
                        <h3 className="text-xl my-5">Web Development</h3>
                    </div>
                </div>
                <div className="carousel-item relative">
                    <img src="https://img.freepik.com/free-photo/ai-cloud-concept-with-robot-arm_23-2149739748.jpg?t=st=1717669020~exp=1717672620~hmac=6524dc51660998d3ecc54814c3c6db37eb3e952e8e934e0caaa0bfeaa5ba13b5&w=826" className="rounded-box w-96 h-96" />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 text-center">
                        <h3 className="text-xl my-5">Machine Learning</h3>
                    </div>
                </div>
                <div className="carousel-item relative">
                    <img src="https://img.freepik.com/free-photo/digital-laptop-working-global-business-concept_53876-23438.jpg?t=st=1717669154~exp=1717672754~hmac=f17a33a8997e54e8b272bafe230437c1db35c54a9277af57f589e04b42bfca41&w=900" className="rounded-box w-96 h-96" />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 text-center">
                        <h3 className="text-xl my-5">Amazon Web Service</h3>
                    </div>
                </div>
                <div className="carousel-item relative">
                    <img src="https://img.freepik.com/free-photo/3d-internet-secuirty-badge_1048-18107.jpg?t=st=1717668295~exp=1717671895~hmac=e9418fe28aa96088fc93739e09fe04efef898250ecb2634f45a2f0169d8af3ff&w=740" className="rounded-box w-96 h-96" />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 text-center">
                        <h3 className="text-xl my-5">Cyber Security</h3>
                    </div>
                </div>
                <div className="carousel-item relative">
                    <img src="https://img.freepik.com/free-photo/corporate-management-strategy-solution-branding-concept_53876-167088.jpg?t=st=1717669272~exp=1717672872~hmac=08f690f35dd720fa198f042df03dc61d22749e7a6a8fe2971baeab86618c5cd4&w=900" className="rounded-box w-96 h-96" />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 text-center">
                        <h3 className="text-xl my-5">Digital Marketing</h3>
                    </div>
                </div>
                <div className="carousel-item relative">
                    <img src="https://img.freepik.com/free-photo/marketing-strategy-planning-strategy-concept_53876-42950.jpg?t=st=1717668632~exp=1717672232~hmac=51d43ac172fbdcd54538bcdfa518b21bb754c4a0a4727d71df86f21ccaf951eb&w=900" className="rounded-box w-96 h-96" />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 text-center">
                        <h3 className="text-xl my-5">Graphic Designing</h3>
                    </div>
                </div>
            </div>
            <Link to="/all-courses" className="btn my-5 flex items-center">
                <p className="text-xl mr-2">Browse our trending courses</p>
                <FaArrowAltCircleRight />
            </Link>
        </div>
    );
};

export default Categories;