import Banner from "../Components/Home/Banner";
import Stat from "../Components/Home/Stat";
import { useEffect, useState } from "react";
import CourseCard from "../Components/Home/CourseCard";
import Review from "../Components/Home/Review";
import Categories from "../Components/Home/Categories";

const Home = () => {
    const [courses, setCourses] = useState();

    useEffect(() => {
        async function load() {
            //get courses
            const courseResponse = await fetch("https://techtutorium-server.onrender.com/courses");
            const courseData = await courseResponse.json();
            setCourses(courseData);
        }
        load();
    }, []);

    return (
        <div data-theme="dracula">
            {/* Hero Section */}
            <Banner />
            {/*EOF Hero Section */}

            {/* Our Overview Stat */}
            <Stat />
            {/* Our Overview Stat */}

            {/* Trending Categories Section */}
            <Categories />
            {/* Trending Categories Section end */}

            {/* Our course section */}
            <div className="mx-4 md:mx-8 lg:mx-16 mb-16">
                <h1 className="text-2xl md:text-3xl lg:text-4xl my-10 md:my-16 lg:my-20 text-center text-primary">
                    Most Reviewed Courses
                </h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto'>
                    {courses
                        ?.reverse()
                        ?.slice(0, 4)
                        ?.map((course) => (
                            <CourseCard key={course?._id} course={course} />
                        ))}
                </div>
            </div>
            {/* EOF course section  */}

            {/* Review Section */}
            <Review />
            {/*EOF Review Section */}
        </div>
    );
};

export default Home;