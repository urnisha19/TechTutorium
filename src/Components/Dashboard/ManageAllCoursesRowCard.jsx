import { Link } from "react-router-dom";
import DeleteCourse from "./DeleteCourse";

/* eslint-disable react/prop-types */
export default function ManageAllCoursesRowCard({ course }) {
    return (
        <tr>
            <th>{course?.courseTitle}</th>
            <td>{course?.category}</td>
            <td>{course?.level}</td>
            <td className="flex gap-4">
                <Link className="btn btn-info" to={`/courses/${course?._id}`}>Details</Link>
                <Link className="btn btn-accent" to={`/dashboard/edit-course/${course?._id}`}>Edit</Link>
                <span className="btn btn-error"><DeleteCourse courseId={course?._id} /></span>
            </td>
        </tr>
    );
}