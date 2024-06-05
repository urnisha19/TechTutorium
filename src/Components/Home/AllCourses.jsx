import { useEffect, useState } from "react";
import SingleCourseCard from "../Dashboard/SingleCourseCard";

const AllCourses = () => {
    const [courses, setCourses] = useState([]);

    //ekhane different method shikhar jonno useLoader er bodole useEffect diya data fetch kora hocche.
    useEffect(() => {
        fetch("https://techtutorium-server.onrender.com/courses/")
            .then((res) => res.json())
            .then((data) => setCourses(data));
    }, []);

    //kunu course delete korle UI theke jate shate shate chole jay, onDelete(_id) 
    const handleDeleteCourse = (_id) => {
        setCourses(courses.filter((course) => course._id !== _id));
    };

    return (
        <div>
            <h1 className="text-5xl font-bold text-center">All Course</h1>
            <div className="my-16 flex flex-wrap gap-4">
                {courses.map((course) => (
                    <SingleCourseCard
                        key={course._id}
                        course={course}
                        onDelete={handleDeleteCourse}
                    />
                ))}
            </div>
        </div>
    );
};

export default AllCourses;