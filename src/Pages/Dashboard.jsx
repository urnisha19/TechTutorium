import { useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";
import { Link } from "react-router-dom";

const Dashboard = () => {
    const [user, setUser] = useState(null);
    const [userInfo, setUserInfo] = useState();

    // Logging user information
    console.log('user:', user);

    useEffect(() => {
        const loadUser = async () => {
            const currentUser = auth.currentUser;
            setUser(currentUser);
            if (currentUser?.email) {
                // Fetching user info from backend
                fetch(`http://localhost:3000/user/${currentUser.email}`)
                    .then((res) => res.json())
                    .then((data) => setUserInfo(data))
                    //.then((data) => console.log(data))
                    .catch((error) => {
                        console.error("Error fetching user info:", error);
                    });
            }
        };
        loadUser();
    }, []);

    return (
        <div className="mx-16">
            {/* Profile Information section */}
            <h1 className="text-3xl text-center">Profile Information</h1>
            <div className="flex justify-center">
                <div className="w-full my-10 max-w-sm bg-base-300 border border-gray-200 rounded-lg shadow">
                    <div className="flex flex-col items-center pb-10">
                        <img
                            className="w-24 h-24 my-3 rounded-full shadow-lg"
                            src={userInfo?.photoURL}
                            alt="Profile Picture"
                        />
                        <h5 className="mb-1 text-4xl text-sky-700 text-center font-bold font-outline-2">
                            {userInfo?.displayName}
                        </h5>
                        <span className="text-sm text-center font-bold text-sky-500">
                            {userInfo?.email}
                        </span>
                        <Link to={`/dashboard/profile/edit/${userInfo?._id}`}
                            className="btn btn-neutral btn-md m-3">
                            Edit Profile
                        </Link>
                    </div>
                </div>
            </div>
            {/* EOF Profile Information section */}
        </div>
    );
};

export default Dashboard;
