import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../../Firebase/firebase.config";

const Navbar = () => {
    const [user] = useAuthState(auth); // Getting the current user's authentication state
    const [signOut] = useSignOut(auth);

    const handleLogout = async () => {
        await signOut(); // Calling signOut function to sign out the user
    };

    return (
        <div className="navbar bg-base-300 text-base-content">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/" className="text-lg active:bg-slate-500">Home</Link></li>
                        <li><Link to="/all-courses" className="text-lg">Courses</Link></li>
                        <li>
                            <Link className="text-lg">Categories</Link>
                            <ul className="p-2">
                                <li><Link to="/" className="text-lg">Web Development</Link></li>
                                <li><Link to="/" className="text-lg">Machine Learning</Link></li>
                                <li><Link to="/" className="text-lg">Graphic Designing</Link></li>
                                <li><Link to="/" className="text-lg">Digital Marketing</Link></li>
                                <li><Link to="/" className="text-lg">Cyber Security</Link></li>
                                <li><Link to="/" className="text-lg">Amazon Web Service</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/about" className="text-lg">About</Link></li>
                        <li><Link to="/contact" className="text-lg">Contact US</Link></li>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl">TechTutorium</Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/" className="text-lg">Home</Link></li>
                    <li><Link to="/all-courses" className="text-lg">Courses</Link></li>
                    <li>
                        <details>
                            <summary className="text-lg">Categories</summary>
                            <ul className="p-2">
                                <li><Link to="/" className="text-lg">Web Development</Link></li>
                                <li><Link to="/" className="text-lg">Machine Learning</Link></li>
                                <li><Link to="/" className="text-lg">Graphic Designing</Link></li>
                                <li><Link to="/" className="text-lg">Digital Marketing</Link></li>
                                <li><Link to="/" className="text-lg">Cyber Security</Link></li>
                                <li><Link to="/" className="text-lg">Amazon Web Service</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li><Link to="/about" className="text-lg">About</Link></li>
                    <li><Link to="/contact" className="text-lg">Contact US</Link></li>
                </ul>
            </div>

            <div className="navbar-end flex gap-4">
                {!user?.email ? (
                    <>
                        <Link to="/login" className="btn text-lg bg-primary hover:bg-primary-focus text-base-content">Login</Link>
                        <Link to="/register" className="btn text-lg bg-primary hover:bg-primary-focus text-base-content">Registration</Link>
                    </>
                ) : (
                    <>
                        <button className="btn text-lg bg-accent hover:bg-primary-focus text-base-content" onClick={handleLogout}>
                            Logout
                        </button>
                        <Link to="/dashboard" className="btn text-lg bg-secondary hover:bg-primary-focus text-base-content">Dashboard</Link>
                        <div className="avatar">
                            <div className="w-12 rounded-full border-2 border-primary">
                                <img src={user?.photoURL || "/placeholder.jpg"} alt="User Avatar" />
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;
