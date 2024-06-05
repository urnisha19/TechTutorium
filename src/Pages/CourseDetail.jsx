import { useLoaderData } from "react-router-dom";

const CourseDetail = () => {
    const course = useLoaderData();

    const { _id, courseTitle, category, level, description, duration, price, image_url } = course;
    console.log(_id);

    const features = [
        {
            name: "",
            icon: (
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                    <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm0 11h6v1h-7v-9h1v8z" />
                </svg>
            )
        },
        {
            name: "100+ Learners",
            icon: (
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                    <path d="M4.323 9.699c-.127-.144-.235-.295-.323-.454v-3.021l-3-1.537 10.956-4.687 10.044 5.502h-.001.001v3.498l1 2h-3l1-2v-3.097l-2 .802v2.49c-.08.163-.188.318-.318.466.347.95.398 2.083.404 2.635 1.36-.482 2.645.822 2.364 3.108-.203 1.66-1.147 2.94-2.526 3.431-2.417 4.773-6.285 5.144-7.415 5.144-1.129 0-4.998-.372-7.414-5.144-1.38-.491-2.324-1.771-2.527-3.431-.296-2.433 1.141-3.583 2.364-3.104.007-.551.057-1.66.391-2.601zm13.53.639c-1.668 1.039-4.56 1.557-6.5 1.557-2.112 0-4.655-.498-6.202-1.5-.156.619-.24 1.293-.24 2.024 0 .528-.425.917-.898.917-.121 0-.244-.025-.365-.08-.061-.028-.153-.05-.257-.05-.112 0-.236.026-.345.099-.899.594-.805 3.834 1.395 4.594.22.076.405.238.511.45 2.162 4.296 5.565 4.63 6.557 4.63s4.396-.334 6.557-4.63c.107-.212.291-.374.511-.45 2.199-.76 2.294-4 1.396-4.594-.367-.245-.636.031-.968.031-.472 0-.898-.387-.898-.917 0-.753-.088-1.447-.254-2.081zm.147-1.418c-.82 1.107-4.19 1.975-6.647 1.975-2.762 0-5.512-.857-6.353-1.946v-2.214l6.114 3.133 6.886-2.761v1.813zm-6.097-7.81l7.76 4.251-8.499 3.41-7.812-4.002 8.551-3.659z" />
                </svg>
            )
        },
        {
            name: "Over 50+ videos",
            icon: (
                <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                    <path d="M24 23h-24v-21h24v21zm-20-1v-4h-3v4h3zm15 0v-19h-14v19h14zm4 0v-4h-3v4h3zm-6-9.5l-9 5v-10l9 5zm3 .5v4h3v-4h-3zm-16 4v-4h-3v4h3zm5-1.2l5.941-3.3-5.941-3.3v6.6zm11-7.8v4h3v-4h-3zm-16 4v-4h-3v4h3zm16-9v4h3v-4h-3zm-16 4v-4h-3v4h3z" />
                </svg>
            )
        },
    ];

    return (
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-lg px-4 md:px-8">
                <div className="grid gap-8 md:grid-cols-2">

                    {/* Images - Start */}
                    <div className="space-y-4">
                        <div className="relative overflow-hidden rounded-lg bg-gray-100">
                            <img src={image_url} alt="" className="h-full w-full object-cover object-center" />
                            {/* <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">sale</span> */}
                        </div>

                        {/* Category */}
                        <div className="grid gap-4">
                            <button
                                className="flex items-center gap-2 px-4 py-2 text-indigo-600 bg-indigo-50 rounded-lg duration-150 hover:bg-indigo-100 active:bg-indigo-200"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z" clipRule="evenodd" />
                                </svg>
                                {category}
                            </button>
                        </div>
                        {/* Category - end */}

                        <div className="flex flex-wrap items-center justify-center gap-6 xl:justify-start">
                            {
                                features.map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-x-2 text-gray-500 text-sm">
                                        {item.icon}
                                        {item.name ? item.name : duration}
                                    </div>
                                ))
                            }
                        </div>

                    </div>
                    {/* Images - End */}

                    {/* Content - Start */}
                    <div className="md:py-5">
                        {/* Name - Start */}
                        <div className="mb-2 md:mb-3">
                            {/* level */}
                            <span className="mb-0.5 inline-block text-gray-500">{level}</span>
                            {/* level -End */}
                            <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">{courseTitle}</h2>
                        </div>
                        {/* Name - End */}

                        {/* Rating - Start */}
                        <div className="flex items-center md:mb-4">
                            <div className="-ml-1 flex gap-0.5">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                {/* Add more SVG elements here for rating */}
                            </div>
                            <span className="ml-2 text-sm text-gray-500">4.2</span>
                            <a href="#" className="ml-4 text-sm font-semibold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">view all 47 reviews</a>
                        </div>
                        {/* Rating - End */}


                        {/*-- price - start */}
                        <div className="mb-4">
                            <h1>Course Fee</h1>
                            <div className="flex items-end gap-2">
                                <span className="text-xl font-bold text-gray-800 md:text-2xl">${price}</span>
                                {/* <span className="mb-0.5 text-red-500 line-through">${price+20}</span> */}
                            </div>
                        </div>
                        {/* <!-- price - end --> */}

                        {/* <!-- buttons - start --> */}
                        <div className="flex gap-2.5">
                            <a href="#" className="inline-block flex-1 rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 sm:flex-none md:text-base">
                                Enroll Now
                            </a>
                            <a href="#" className="inline-block rounded-lg bg-gray-200 px-4 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </a>
                        </div>
                        {/* <!-- buttons - end --> */}

                        {/* <!-- description - start --> */}
                        <div className="mt-5 md:mt-10 lg:mt-16">
                            <div className="mb-3 text-lg font-semibold text-gray-800">Description</div>
                            <p className="text-gray-500">
                                {description}
                            </p>
                        </div>
                        {/* <!-- description - end --> */}

                        {/* Add more content sections here */}

                    </div>
                    {/* Content - End */}
                </div>
            </div>
        </div>
    );
};

export default CourseDetail;