import { createBrowserRouter } from "react-router-dom";
import Category from "../../Components/Category/Category";
import Courses from "../../Components/Courses/Courses";
import Home from "../../Components/Home/Home";
import Login from "../../Components/Shared/Login/Login";
import Register from "../../Components/Shared/Register/Register";
import Main from "../../Layout/Main";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/courses')
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/courses/:id',
                element: <Courses></Courses>,
                loader: ({params}) => fetch(`http://localhost:5000/courses/${params.id}`)
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