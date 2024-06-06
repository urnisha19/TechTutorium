import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";

const EditCourse = () => {
    const token = localStorage.getItem("token"); // Retrieve the token from localStorage
    const data = useLoaderData(); // Using the useLoaderData hook to retrieve data
    const navigate = useNavigate(); // Using the useNavigate hook for navigation

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target; // Accessing the form element

        // Extracting values from form inputs
        const courseTitle = form.courseTitle.value;
        const category = form.category.value;
        const level = form.level.value;
        const description = form.description.value;
        const duration = form.duration.value;
        const price = form.price.value;
        const image_url = form.image_url.value;

        const updatedData = { courseTitle, category, level, description, duration, price, image_url };

        // Check if _id exists in data
        if (!data?._id) {
            console.error("Course ID is missing");
            return;
        }

        // Making a PATCH request to update course
        fetch(`https://techtutorium-server.onrender.com/courses/${data._id}`, {
            method: "PATCH", // Using PATCH method for partial update
            headers: {
                "Content-Type": "application/json", // Specifying JSON content type
                authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(updatedData), // Converting user data to JSON string
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then(() => {
                toast.success("Course Updated");
                navigate('/dashboard'); // Navigating to dashboard page after update
            })
            .catch((error) => {
                console.error("Error updating course:", error);
                toast.error("Failed to update course");
            });
    };

    return (
        <div>
            <h1 className="text-3xl my-5">Update Course</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-y-5">

                <div className="flex flex-col">
                    <label htmlFor="courseTitle"><p className="text-xl">Course Title</p></label>
                    <input
                        className="py-2 px-1 bg-slate-50 text-xl text-black" // Added text-black class
                        type="text"
                        name="courseTitle"
                        defaultValue={data?.courseTitle}
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="category"><p className="text-xl">Category</p></label>
                    <select defaultValue={data?.category} name="category" className="text-xl bg-white text-black">
                        <option value="Web Development">Web Development</option>
                        <option value="Machine Learning">Machine Learning</option>
                        <option value="Graphic Designing">Graphic Designing</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="Cyber Security">Cyber Security</option>
                        <option value="Amazon Web Service">Amazon Web Service</option>
                    </select>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="level"><p className="text-xl">Level</p></label>
                    <select defaultValue={data?.level} name="level" className="text-xl bg-white text-black">
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                    </select>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="description"><p className="text-xl">Description</p></label>
                    <input
                        className="py-2 px-1 bg-slate-50 text-xl text-black" // Added text-black class
                        type="text"
                        name="description"
                        defaultValue={data?.description}
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="duration"><p className="text-xl">Course Duration</p></label>
                    <input
                        className="py-2 px-1 bg-slate-50 text-xl text-black" // Added text-black class
                        type="number"
                        name="duration"
                        defaultValue={data?.duration}
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="price"><p className="text-xl">Price</p></label>
                    <input
                        className="py-2 px-1 bg-slate-50 text-xl text-black" // Added text-black class
                        type="text"
                        name="price"
                        defaultValue={data?.price}
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="image_url"><p className="text-xl">Image URL</p></label>
                    <input
                        className="py-2 px-1 bg-slate-50 text-xl text-black" // Added text-black class
                        type="text"
                        name="image_url"
                        defaultValue={data?.image_url}
                    />
                </div>

                <div className="flex flex-col">
                    <input
                        type="submit"
                        value="Update Course"
                        className="py-2 px-1 bg-slate-950 text-xl text-white"
                    />
                </div>
            </form>
        </div>
    );
};

export default EditCourse;
