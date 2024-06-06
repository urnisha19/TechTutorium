import axios from "axios";
import { useEffect, useState } from "react";
import ManageAllCourseRowCard from "./ManageAllCoursesRowCard";

export default function ManageAllCourse() {
    const [courses, setCourses] = useState();

    useEffect(() => {
        async function load() {
            const data = await axios.get("https://techtutorium-server.onrender.com/courses");
            if (data?.status === 200) {
                setCourses(data?.data);
            }
        }
        load();
    }, []);

    return (
        <div className="overflow-x-auto w-full px-16 mt-10">
            <h1 className="text-3xl mb-4">Mange All Course</h1>
            <table className="table table-zebra">
                {/* head */}
                <thead className="text-xl">
                    <tr>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Level</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className="text-xl">
                    {courses?.map((course) => (
                        <ManageAllCourseRowCard key={course?._id} course={course} />
                    ))}
                </tbody>
            </table>
        </div>
    );
}