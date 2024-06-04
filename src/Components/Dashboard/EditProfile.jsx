import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";

export default function EditProfile() {
    const data = useLoaderData(); // Using the useLoaderData hook to retrieve data
    const navigate = useNavigate(); // Using the useNavigate hook for navigation

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target; // Accessing the form element

        // Extracting values from form inputs
        const displayName = form.name.value;
        const email = form.email.value;
        const phoneNumber = form.phoneNumber.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;

        // Creating an object containing user data
        const userData = {
            displayName,
            email,
            phoneNumber,
            photoURL,
            password
        };

        // Making a PATCH request to update user profile
        fetch(
            `http://localhost:3000/user/${data?.email}`, // Endpoint for updating user profile
            {
                method: "PATCH", // Using PATCH method for partial update
                headers: {
                    "Content-Type": "application/json", // Specifying JSON content type
                },
                body: JSON.stringify(userData), // Converting user data to JSON string
            }
        )
            .then((data) => {
                console.log(data);
                toast.success("User Profile Updated");
                navigate('/dashboard'); // Navigating to dashboard page after profile update
            });
    };

    return (
        <div>
            <h1 className="text-3xl mb-7">Edit Profile </h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-y-5">
                <div className="flex flex-col">
                    <label htmlFor="">User Name</label>
                    <input
                        type="text"
                        name="displayName"
                        defaultValue={data?.displayName}
                        className="py-2 px-1 bg-slate-50 "
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="">User email</label>
                    <input
                        type="text"
                        value={data?.email}
                        disabled
                        name="email"
                        className="py-2 px-1 bg-slate-50 "
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="">User Phone Number</label>
                    <input
                        type="text"
                        defaultValue={data?.phoneNumber}
                        name="phoneNumber"
                        className="py-2 px-1 bg-slate-50 "
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="">User Profile Photo URL</label>
                    <input
                        type="text"
                        defaultValue={data?.photoURL}
                        name="photoURL"
                        className="py-2 px-1 bg-slate-50 "
                    />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="">Password</label>
                    <input
                        type="text"
                        defaultValue={data?.password}
                        name="password"
                        className="py-2 px-1 bg-slate-50 "
                    />
                </div>
                <div className="flex flex-col">
                    <input
                        type="submit"
                        value="Update Profile"
                        className="py-2 px-1 bg-slate-950 text-white "
                    />
                </div>
            </form>
        </div>
    );
}
