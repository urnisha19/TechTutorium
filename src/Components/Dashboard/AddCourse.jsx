import toast from "react-hot-toast";

const AddCourse = () => {
    const token = localStorage.getItem("token");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;

        // Extract form data
        const courseTitle = form.courseTitle.value;
        const category = form.category.value;
        const level = form.level.value;
        const description = form.description.value;
        const duration = form.duration.value;
        const price = form.price.value;
        const image_url = form.image_url.value;

        const data = { courseTitle, category, level, description, duration, price, image_url };

        // Send POST request to add course
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
        <div className="border p-10">
            <h1 className="text-3xl mb-7">Add Course </h1>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-y-5">
                <div className="flex flex-col">
                    <label htmlFor="courseTitle"><p className="text-xl">Course Title</p></label>
                    <input
                        className="py-2 px-1 bg-slate-50 text-xl text-black" // Added text-black class
                        type="text"
                        name="courseTitle"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="category"><p className="text-xl">Category</p></label>
                    <select className="py-2 px-1 bg-slate-50 text-xl text-black" name="category">
                        <option></option>
                        <option value="Web Development">Web Development</option>
                        <option value="Machine Learning">Machine Learning</option>
                        <option value="Graphic Designing<">Graphic Designing</option>
                        <option value="Digital Marketing">Digital Marketing</option>
                        <option value="Cyber Security">Cyber Security</option>
                        <option value="Amazon Web Service">Amazon Web Service</option>
                    </select>
                </div>

                <div className="flex flex-col">
                    <label htmlFor="level"><p className="text-xl">Level</p></label>
                    <select className="py-2 px-1 bg-slate-50 text-xl text-black" name="level">
                        <option></option>
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
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="duration"><p className="text-xl">Course Duration</p></label>
                    <input
                        className="py-2 px-1 bg-slate-50 text-xl text-black" // Added text-black class
                        type="number"
                        name="duration"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="price"><p className="text-xl">Price</p></label>
                    <input
                        className="py-2 px-1 bg-slate-50 text-xl text-black" // Added text-black class
                        type="text"
                        name="price"
                    />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="price"><p className="text-xl">Image URL</p></label>
                    <input
                        className="py-2 px-1 bg-slate-50 text-xl text-black" // Added text-black class
                        type="text"
                        name="image_url"
                    />
                </div>

                <div className="flex flex-col">
                    <input
                        type="submit"
                        value="Add Course"
                        className="py-2 px-1 bg-slate-950 text-xl text-white"
                    />
                </div>

            </form>
        </div>
    );
};

export default AddCourse;
