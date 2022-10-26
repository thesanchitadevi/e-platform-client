import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Components/Blog/Blog";
import Category from "../../Components/Category/Category";
import Courses from "../../Components/Courses/Courses";
import ErrorPage from "../../Components/ErrorPage/ErrorPage";
import FAQ from "../../Components/FAQ/FAQ";
import Home from "../../Components/Home/Home";
import Login from "../../Components/Shared/Login/Login";
import Register from "../../Components/Shared/Register/Register";
import Main from "../../Layout/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const routes = createBrowserRouter([
    {
        path: '/',
        errorElement:<ErrorPage></ErrorPage>,
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/courses')
            },
            {
                path: '/category/:id',
                element: <PrivateRoute><Category></Category></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/courses/:id',
                element: <Courses></Courses>,
                loader: ({params}) => fetch(`http://localhost:5000/courses/${params.id}`)
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>,
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    }
])
export default routes;