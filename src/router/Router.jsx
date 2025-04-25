import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout/Layout";
import AllUsers from "../pages/allusers/AllUsers";
import AddUser from "../pages/adduser/AddUser";
import EditUser from "../pages/edituser/EditUser";

export const myRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index:  true,
                element: <AllUsers/>
            },
            {
                path: "/adduser",
                element: <AddUser/>
            },
            {
                path: "/edituser/:id",
                element: <EditUser/>
            },
        ],
    },
]);



