import { Link, Outlet, useLocation } from "react-router-dom";
import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../../Firebase/firebase.config.js";
import { useEffect, useState } from "react";

export default function DashboardLayout() {
  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState(null);
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    const loadUser = async () => {
      const currentUser = auth.currentUser;
      setUser(currentUser);
      if (currentUser?.email) {
        // Fetching user info from backend
        fetch(`https://techtutorium-server.onrender.com/user/${currentUser.email}`)
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


  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Using the useSignOut hook to sign out the user
  const [signOut] = useSignOut(auth);
  const handleLogout = async () => {
    await signOut(); // Calling signOut function to sign out the user
  };

  return (
    <div className="bg-gray-500">
      {/*Left Side */}
      <aside className="fixed top-0 z-10 ml-[-100%] flex h-screen w-full flex-col justify-between border-r bg-white px-6 pb-3 transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%] dark:bg-gray-800 dark:border-gray-700">
        {/* User Profile */}
        <div>
          <div className="mt-8 text-center">
            <img
              src={userInfo?.photoURL}
              alt=""
              className="m-auto h-10 w-10 rounded-full object-cover lg:h-28 lg:w-28"
            />
            <h5 className="mt-4 hidden text-xl font-semibold text-gray-600 lg:block dark:text-gray-300"> {userInfo?.displayName}</h5>
            <span className="hidden text-gray-400 lg:block">Admin</span>
            <span className="hidden text-gray-400 lg:block"> {userInfo?.email}</span>
            <Link to={`/dashboard/profile/edit/${userInfo?._id}`}
              className="btn btn-neutral btn-md m-3">
              Edit Profile
            </Link>
          </div>
          {/* User Profile End*/}

          <ul className="mt-8 space-y-2 tracking-wide">
            <li className={`${isActive("/dashboard") ? "bg-gradient-to-r from-sky-600 to-cyan-400" : ""}relative flex items-center space-x-4 rounded-xl  px-4 py-3 text-white`}>
              <Link className="-mr-1 font-medium" to={"/dashboard"}>Dashboard Home</Link>
            </li>

            <li className={`${isActive("/dashboard/manage-courses") ? "bg-gradient-to-r from-sky-600 to-cyan-400" : ""}relative flex items-center space-x-4 rounded-xl  px-4 py-3 text-white`}>
              <Link to={"/dashboard/manage-courses"}>Manage All Courses</Link>
            </li>
            <li className={`${isActive("/dashboard/add-course") ? "bg-gradient-to-r from-sky-600 to-cyan-400" : ""}relative flex items-center space-x-4 rounded-xl  px-4 py-3 text-white`}>
              <Link to={"/dashboard/add-course"}>Add Course</Link>
            </li>
          </ul>
        </div>

        <div className="-mx-6 flex items-center justify-between border-t px-6 pt-4 dark:border-gray-700">
          <button onClick={handleLogout} className="group flex items-center space-x-4 rounded-md px-4 py-3 text-gray-600 dark:text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            <span className="group-hover:text-gray-700 dark:group-hover:text-white">Logout</span>
          </button>
        </div>
      </aside>

      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        <div className="sticky top-0 h-16 border-b bg-white dark:bg-gray-800 dark:border-gray-700 lg:py-2.5">
          <div className="flex items-center justify-between space-x-4 px-6 2xl:container">
            <h5 hidden className="text-2xl font-medium text-gray-600 lg:block dark:text-white">TechTutorium</h5>
            <span><Link to={"/"} className="btn text-xl">Back to Home</Link></span>

            {/* Search Bar */}
            <div className="flex space-x-4">
              <div hidden className="md:block">
                <div className="relative flex items-center text-gray-400 focus-within:text-cyan-400">
                  <span className="absolute left-4 flex h-6 items-center border-r border-gray-300 pr-3 dark:border-gray-700">
                    <svg
                      xmlns="http://ww50w3.org/2000/svg"
                      className="w-4 fill-current"
                      viewBox="0 0 35.997 36.004"
                    >
                      <path
                        id="Icon_awesome-search"
                        data-name="search"
                        d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"
                      ></path>
                    </svg>
                  </span>
                  <input
                    type="search"
                    name="leadingIcon"
                    id="leadingIcon"
                    placeholder="Search here"
                    className="outline-none w-full rounded-xl border border-gray-300 py-2.5 pl-14 pr-4 text-sm text-gray-600 transition focus:border-cyan-300 dark:bg-gray-900 dark:border-gray-700"
                  />
                </div>
              </div>
              {/* Search Bar end*/}

              <button
                aria-label="search"
                className="h-10 w-10 rounded-xl border bg-gray-100 active:bg-gray-200 md:hidden dark:bg-gray-700 dark:border-gray-600 dark:active:bg-gray-800"
              >
                <svg
                  xmlns="http://ww50w3.org/2000/svg"
                  className="mx-auto w-4 fill-current text-gray-600 dark:text-gray-300"
                  viewBox="0 0 35.997 36.004"
                >
                  <path
                    id="Icon_awesome-search"
                    data-name="search"
                    d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="px-6 pt-6 2xl:container">
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}