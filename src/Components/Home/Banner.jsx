import { useState } from "react";

const Banner = () => {
    const [isVideoPoppedUp, setVideoPopUp] = useState(false)

    const handleVideoButtonClick = () => {
        setVideoPopUp(true);
    };

    const handleCloseButtonClick = () => {
        setVideoPopUp(false);
    };

    return (
        <div>
            <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 md:px-8 xl:flex">
                {/* Left Side */}
                <div className="space-y-5 max-w-2xl mx-auto text-center xl:text-left">

                    <h1 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">
                        Explore in-demand careers and develop cutting edge skills
                    </h1>
                    <p className="max-w-xl mx-auto xl:mx-0">
                        Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
                    </p>
                    <div className="items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0 xl:justify-start">
                        <a href="javascript:void(0)" className="flex items-center justify-center gap-x-2 py-2 px-4 text-white font-medium bg-gray-800 duration-150 hover:bg-gray-700 active:bg-gray-900 rounded-lg md:inline-flex">
                            Browse courses
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                            </svg>
                        </a>
                        <a href="javascript:void(0)" className="flex items-center justify-center gap-x-2 py-2 px-4 text-gray-700 hover:text-gray-500 font-medium duration-150 active:bg-gray-100 border rounded-lg md:inline-flex">
                            Get access
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>
                {/* EOF left side */}

                {/* Right Side */}
                <div className="flex-1 max-w-xl mx-auto mt-14 xl:mt-0">
                    <div className="relative">
                        <img src="https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="rounded-lg" alt="" />
                        <button className="absolute w-16 h-16 rounded-full inset-0 m-auto duration-150 bg-blue-500 hover:bg-blue-600 ring-offset-2 focus:ring text-white"
                            onClick={handleVideoButtonClick}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 m-auto">
                                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                            </svg>
                        </button>
                    </div>
                </div>
                {/* EOF Right Side */}
            </div>

            {/* Video Play */}
            {
                isVideoPoppedUp ? (
                    <div className="fixed inset-0 w-full h-full flex items-center justify-center">
                        <div className="absolute inset-0 w-full h-full bg-black/50" onClick={() => setVideoPopUp(false)}></div>
                        <div className="px-4 relative">
                            <button
                                className="w-12 h-12 mb-5 rounded-full duration-150 bg-gray-800 hover:bg-gray-700 text-white"
                                onClick={handleCloseButtonClick}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 m-auto">
                                    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                                </svg>
                            </button>
                            <video className="rounded-lg w-full max-w-2xl" controls autoPlay={true}>
                                <source src="../../assets/video.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                ) : ""
            }
            {/* EOF Video Play */}
        </div>

    );
};

export default Banner;