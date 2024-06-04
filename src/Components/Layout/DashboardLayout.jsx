import { Link, Outlet, useLocation } from "react-router-dom";
import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../../Firebase/firebase.config.js";

export default function DashboardLayout() {
  // Using useLocation hook to access current location in the router
  const location = useLocation();

  // Function to check if a given path is active
  const isActive = (path) => {
    return location.pathname === path; // Returning true if the given path matches the current location's pathname
  };

  // Using the useSignOut hook to sign out the user
  const [signOut] = useSignOut(auth);
  const handleLogout = async () => {
    await signOut(); // Calling signOut function to sign out the user
  };

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open SideBar
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu pt-10 p-4 w-60 min-h-screen bg-base-200 text-base-content flex flex-col justify-between">
          <div>
            <li className={`border ${isActive("/dashboard") ? "bg-green-500 font-bold" : "bg-sky-500"} text-white mb-3`}>
              <Link to={"/dashboard"}>Dashboard Home</Link>
            </li>
            <li className={`border ${isActive("/dashboard/manage-courses") ? "bg-green-500 font-bold" : "bg-sky-500"} text-white mb-3`}>
              <Link to={"/dashboard/manage-courses"}>Manage All Courses</Link>
            </li>
            <li className={`border ${isActive("/dashboard/add-course") ? "bg-green-500 font-bold" : "bg-sky-500"} text-white mb-3`}>
              <Link to={"/dashboard/add-course"}>Add Course</Link>
            </li>
          </div>
          <div className="flex gap-4">
            <Link to={"/"} className="btn btn-neutral">
              Home
            </Link>
            <button className="btn btn-error" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
}