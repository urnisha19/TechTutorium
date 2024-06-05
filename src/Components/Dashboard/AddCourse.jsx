import toast from "react-hot-toast";

const AddCourse = () => {
    const token = localStorage.getItem("token");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;

        const courseTitle = form.courseTitle.value;
        const category = form.category.value;
        const level = form.level.value;
        const description = form.description.value;
        const duration = form.duration.value;
        const price = form.price.value;       
        const image_url = form.image_url.value;

        const data = { courseTitle, category, level, description, duration, price, image_url};

        await fetch("https://techtutorium-server.onrender.com/courses", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then(() => {
                toast.success("Course added successful");
                form.reset();
            });
    };
    return (
        <div >
            <h1 className="text-3xl mb-7">Add Course </h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-y-5">

                <div className="flex flex-col">
                    <label htmlFor="courseTitle">Course Title </label>
                    <input
                        className="py-2 px-1 bg-slate-50 "
                        type="text"
                        name="courseTitle"
                        placeholder="Course Title"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="category">Category</label>
                    <select name="category">
                        <option value="Web Development">Web Development</option>
                        <option value="Machine Learning">Machine Learning</option>
                        <option value="Graphic Designing<">Graphic Designing</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="Cyber Security">Cyber Security</option>
                        <option value="Amazon Web Service">Amazon Web Service</option>
                    </select>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="level">Level</label>
                    <select name="level">
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                    </select>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="description">Description</label>
                    <input
                        className="py-2 px-1 bg-slate-50 "
                        type="text"
                        name="description"
                        placeholder="Description"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="duration">Course Duration</label>
                    <input
                        className="py-2 px-1 bg-slate-50 "
                        type="number"
                        name="duration"
                        placeholder="Course Duration"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="price">Price</label>
                    <input
                        className="py-2 px-1 bg-slate-50 "
                        type="text"
                        name="price"
                        placeholder="Price"
                    />
                </div>


                <div className="flex flex-col">
                    <label htmlFor="price">Image URL</label>
                    <input
                        className="py-2 px-1 bg-slate-50 "
                        type="text"
                        name="image_url"
                        placeholder="Image URL"
                    />
                </div>

                <div className="mt-2 flex justify-center items-center">
                    <input
                        className="btn mt-4 w-full bg-red-500 text-white p-4"
                        type="submit"
                        value="Add Course"
                    />
                </div>

                <div className="flex flex-col">
                    <input
                        type="submit"
                        value="Add Course"
                        className="py-2 px-1 bg-slate-950 text-white "
                    />
                </div>

            </form>
        </div>
    );
};

export default AddCourse;