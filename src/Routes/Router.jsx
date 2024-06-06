// Importing necessary dependencies and components
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Components/Layout/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import DashboardLayout from "../Components/Layout/DashboardLayout";
import Dashboard from "../Pages/Dashboard";
import PrivateRoute from "./PrivateRoute";
import EditProfile from "../Components/Dashboard/EditProfile";
import AddCourse from "../Components/Dashboard/AddCourse";
import EditCourse from "../Components/Dashboard/EditCourse";
import CourseDetail from "../Pages/CourseDetail";
import ManageAllCourse from "../Components/Dashboard/ManageAllCourse";
import AllCourses from "../Pages/AllCourses";
import About from "../Pages/About";
import ContactUs from "../Pages/ContactUs";

// Creating router configuration
export const Router = createBrowserRouter([
    // Route for the main layout
    {
        path: "/",
        element: <MainLayout />,
        children: [
            // Home page route
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/courses/:id",
                element: <CourseDetail />,
                loader: ({ params }) =>
                    fetch(
                        `https://techtutorium-server.onrender.com/courses/${params.id}`
                    ),
            },
            //All courses page route
            {
                path: "/all-courses",
                element: <AllCourses />
            },

            //About us Page
            {
                path: "/about",
                element: <About />
            },

            //Contact us Page
            {
                path: "/contact",
                element: <ContactUs />
            },
        ]
    },
    // Login page route
    {
        path: "/login",
        element: <Login />,
    },

    // Register page route
    {
        path: "/register",
        element: <Register />,
    },

    // Dashboard section route with private access
    {
        path: "/dashboard",
        element: (
            <PrivateRoute>
                <DashboardLayout />
            </PrivateRoute>
        ),
        children: [
            // Default dashboard route
            {
                index: true,
                element: <Dashboard />
            },
            // Route for editing profile with private access
            {
                path: "profile/edit/:id",
                element: (
                    <PrivateRoute>
                        <EditProfile />
                    </PrivateRoute>
                ),
                // Adding loader to fetch data for PATCH operation in EditProfile component
                loader: ({ params }) =>
                    fetch(
                        `https://techtutorium-server.onrender.com/user/get/${params.id}`
                    ),
            },
            {
                path: "manage-courses",
                element: (
                    <PrivateRoute>
                        <ManageAllCourse />,
                    </PrivateRoute>)
            },
            {
                path: "add-course",
                element: (
                    <PrivateRoute>
                        <AddCourse />,
                    </PrivateRoute>)
            },
            {
                path: "edit-course/:id",
                element: (
                    <PrivateRoute>
                        <EditCourse />
                    </PrivateRoute>),
                loader: ({ params }) =>
                    fetch(
                        `https://techtutorium-server.onrender.com/courses/${params.id}`
                    ),
            },
        ]
    }

]);
