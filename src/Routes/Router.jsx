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
            }
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
                        `http://localhost:3000/user/get/${params.id}`
                    ),
            },
        ]
    }
]);
