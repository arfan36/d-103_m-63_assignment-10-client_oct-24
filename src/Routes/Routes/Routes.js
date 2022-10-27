import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Courses from "../../Pages/Courses/Courses";
import Error from "../../Pages/Error/Error";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import TermsAndConditions from "../../Pages/Others/TermsAndConditions/TermsAndConditions";
import Blog from "../../Pages/Shared/Blog/Blog";
import FAQ from "../../Pages/Shared/FAQ/FAQ";
import GetPremium from "../../Pages/Shared/GetPremium/GetPremium";
import Profile from "../../Pages/Shared/Profile/Profile";
import SingleCard from "../../Pages/SingleCard/SingleCard";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch(`https://d-103-m-63-assignment-10-server-oct-24.vercel.app/courses-categories`)
            },
            {
                path: '/single-course/:id',
                element: <SingleCard></SingleCard>,
                loader: ({ params }) => fetch(`https://d-103-m-63-assignment-10-server-oct-24.vercel.app/single-course/${params.id}`)
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
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
            {
                path: '/terms',
                element: <TermsAndConditions></TermsAndConditions>
            },
            {
                path: '/profile',
                element: <PrivateRoute>
                    <Profile></Profile>
                </PrivateRoute>
            },
            {
                path: '/get-premium/:id',
                element: <PrivateRoute>
                    <GetPremium></GetPremium>
                </PrivateRoute>,
                loader: ({ params }) => fetch(`https://d-103-m-63-assignment-10-server-oct-24.vercel.app/get-premium/${params.id}`)
            },
        ]
    }
]);
