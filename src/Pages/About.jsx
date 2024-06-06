import OurTeam from "../Components/About/OurTeam";

const About = () => {

    return (
        <div className="mx-4 md:mx-8 lg:mx-16 mb-16">
            {/* Hero section */}
            <div className="hero min-h-screen mb-8" style={{backgroundImage:'url(https://img.freepik.com/free-photo/people-office-analyzing-checking-finance-graphs_23-2150377138.jpg?t=st=1717685295~exp=1717688895~hmac=605930a4a04a652defe9fed312f1a3f358f377d2a633e2eba1a6b9c100915865&w=900)'}}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">About US</h1>
                        <p className="mb-5">At TechTales, we are passionate about delivering high-quality content that informs, educates, and inspires our readers. Our mission is to create a platform where individuals can explore a wide range of topics, from technology and science to arts and culture, in an engaging and accessible way.</p>
                    </div>
                </div>
            </div>
            {/* End of Hero section */}

            {/* End of our team */}
            <OurTeam />
            {/* our team */}

            {/* Testimonial */}
            <div className="my-8 dark:bg-gray-100 dark:text-gray-800">
                <div className="container flex flex-col items-center p-4 mx-auto space-y-6 md:p-8">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-16 h-16 dark:text-violet-600">
                        <polygon points="328.375 384 332.073 458.999 256.211 406.28 179.924 459.049 183.625 384 151.586 384 146.064 496 182.756 496 256.169 445.22 329.242 496 365.936 496 360.414 384 328.375 384"></polygon>
                        <path d="M415.409,154.914l-2.194-48.054L372.7,80.933,346.768,40.414l-48.055-2.2L256,16.093,213.287,38.219l-48.055,2.2L139.3,80.933,98.785,106.86l-2.194,48.054L74.464,197.628l22.127,42.715,2.2,48.053L139.3,314.323l25.928,40.52,48.055,2.195L256,379.164l42.713-22.126,48.055-2.195,25.928-40.52L413.214,288.4l2.195-48.053,22.127-42.715Zm-31.646,76.949L382,270.377l-32.475,20.78-20.78,32.475-38.515,1.76L256,343.125l-34.234-17.733-38.515-1.76-20.78-32.475L130,270.377l-1.759-38.514L110.5,197.628,128.237,163.4,130,124.88,162.471,104.1l20.78-32.474,38.515-1.76L256,52.132l34.234,17.733,38.515,1.76,20.78,32.474L382,124.88l1.759,38.515L401.5,197.628Z"></path>
                    </svg>
                    <p className="px-6 py-2 text-2xl font-semibold text-center sm:font-bold sm:text-3xl md:text-4xl lg:max-w-2xl xl:max-w-4xl dark:text-gray-700">"Veniam quidem animi ea maxime odit fugiat architecto perferendis ipsum perspiciatis iusto, provident qui nam dolorum corporis."</p>
                    <div className="flex justify-center space-x-3">
                        <img src="https://img.freepik.com/free-psd/bride-portrait-isolated_23-2151442065.jpg?t=st=1717686354~exp=1717689954~hmac=6facdb9f25f2bc0d866ed4c2d0241c453f8ecd9b63b94a4fc1e323b41c5fef52&w=360" alt="" className="w-20 h-20 bg-center bg-cover rounded-md dark:bg-gray-500 dark:bg-gray-300" />
                        <div>
                            <p className="text-lg leading-tight">Leroy Jenkins</p>
                            <p className="text-lg leading-tight dark:text-gray-700">Founder, Company</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* End of Testimonial */}
        </div>
    )
}

export default About;