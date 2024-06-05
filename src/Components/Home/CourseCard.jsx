/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Divider } from "antd";
import { TbExternalLink } from "react-icons/tb";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
    const features = [
        {
            name: "100+ Learners",
            icon: (
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                    <path d="M4.323 9.699c-.127-.144-.235-.295-.323-.454v-3.021l-3-1.537 10.956-4.687 10.044 5.502h-.001.001v3.498l1 2h-3l1-2v-3.097l-2 .802v2.49c-.08.163-.188.318-.318.466.347.95.398 2.083.404 2.635 1.36-.482 2.645.822 2.364 3.108-.203 1.66-1.147 2.94-2.526 3.431-2.417 4.773-6.285 5.144-7.415 5.144-1.129 0-4.998-.372-7.414-5.144-1.38-.491-2.324-1.771-2.527-3.431-.296-2.433 1.141-3.583 2.364-3.104.007-.551.057-1.66.391-2.601zm13.53.639c-1.668 1.039-4.56 1.557-6.5 1.557-2.112 0-4.655-.498-6.202-1.5-.156.619-.24 1.293-.24 2.024 0 .528-.425.917-.898.917-.121 0-.244-.025-.365-.08-.061-.028-.153-.05-.257-.05-.112 0-.236.026-.345.099-.899.594-.805 3.834 1.395 4.594.22.076.405.238.511.45 2.162 4.296 5.565 4.63 6.557 4.63s4.396-.334 6.557-4.63c.107-.212.291-.374.511-.45 2.199-.76 2.294-4 1.396-4.594-.367-.245-.636.031-.968.031-.472 0-.898-.387-.898-.917 0-.753-.088-1.447-.254-2.081zm.147-1.418c-.82 1.107-4.19 1.975-6.647 1.975-2.762 0-5.512-.857-6.353-1.946v-2.214l6.114 3.133 6.886-2.761v1.813zm-6.097-7.81l7.76 4.251-8.499 3.41-7.812-4.002 8.551-3.659z" />
                </svg>
            ),
        },
        {
            name: "Over 50+ videos",
            icon: (
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                    <path d="M24 23h-24v-21h24v21zm-20-1v-4h-3v4h3zm15 0v-19h-14v19h14zm4 0v-4h-3v4h3zm-6-9.5l-9 5v-10l9 5zm3 .5v4h3v-4h-3zm-16 4v-4h-3v4h3zm5-1.2l5.941-3.3-5.941-3.3v6.6zm11-7.8v4h3v-4h-3zm-16 4v-4h-3v4h3zm16-9v4h3v-4h-3zm-16 4v-4h-3v4h3z" />
                </svg>
            ),
        },
    ];


    const { _id, courseTitle, category, level, description, duration, price, image_url } = course;

    return (
        <div className='mx-auto shadow border rounded-lg'>
        <div className='px-4 pt-4'>
            <img
                src={image_url}
                alt='course'
                className='rounded-xl object-cover w-full sm:w-[400px] h-[200px] sm:h-[300px]'
            />
        </div>
        <div className='px-5 py-3'>
            <p className='inline-block text-xs text-left capitalize border border-primary text-primary py-1 px-2 rounded-md'>
                {level}
            </p>
            <h2 className='card-title text-base font-semibold text-dark'>
                {courseTitle}
            </h2>
            {/* ------------------------rating-------------------- */}
            <div className="flex items-center md:mb-4">
                <div className="-ml-1 flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-6 sm:w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    ))}
                </div>
                <span className="ml-2 text-sm text-gray-500">4.2</span>
                <a href="#" className="ml-4 text-sm font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">
                    view all 47 reviews
                </a>
            </div>
            {/* Rating - End */}
            {/*------------------------- avatar-------------------- */}
            <div className='flex mt-3 justify-end'>
                <button className='text-[13px] capitalize bg-blue-100 hover:bg-primary text-primary hover:text-white py-1 px-4 rounded-md flex items-center font-medium'>
                    <TbExternalLink className='text-base mr-2' /> <Link to={`/courses/${_id}`}>View</Link>
                </button>
            </div>
            <Divider />
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 xl:justify-start">
                {features.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-x-2 text-gray-500 text-sm">
                        {item.icon}
                        {item.name}
                    </div>
                ))}
            </div>
        </div>
    </div>
    );
};

export default CourseCard;
