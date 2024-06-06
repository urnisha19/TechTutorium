import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

//props received from ManageAllCourse
// eslint-disable-next-line react/prop-types
const DeleteCourse = ({ courseId }) => {
    const navigate = useNavigate();

    const handleDelete = async () => {
        if (window.confirm("Are you sure you want to delete this course?")) {
            try {
                const token = localStorage.getItem("token"); // Retrieve the token from localStorage
                const response = await axios.delete(`https://techtutorium-server.onrender.com/courses/${courseId}`, {
                    headers: {
                        Authorization: `Bearer ${token}` // Include the token in the request header
                    }
                });
                if (response.status === 200) {
                    toast.success("Course deleted successfully!");
                    setTimeout(() => {
                        navigate("/dashboard/manage-Courses");
                    }, 2000);
                } else {
                    toast.error("Failed to delete the course!");
                }
            } catch (error) {
                toast.error("An error occurred while deleting the course!");
            }
        }
    };

    return (
        <>
            <button onClick={handleDelete} className="btn btn-xs btn-error">
                Delete
            </button>
        </>
    );
};

export default DeleteCourse;