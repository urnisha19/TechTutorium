import Banner from "../Components/Home/Banner";
import Stat from "../Components/Home/Stat";
import { useEffect, useState } from "react";
import CourseCard from "../Components/Home/CourseCard";

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
        <div>
            <Banner />
            <Stat />
            {/* Our course section */}
            <div className="mx-4 md:mx-8 lg:mx-16 mb-16">
                <h1 className="text-2xl md:text-3xl lg:text-4xl my-10 md:my-16 lg:my-20 text-center">
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
            {/* End of Our course section  */}
        </div>
    );
};

export default Home;