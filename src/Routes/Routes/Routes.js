import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Error from "../../Pages/Error/Error";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import TermsAndConditions from "../../Pages/Others/TermsAndConditions/TermsAndConditions";
import Blog from "../../Pages/Shared/Blog/Blog";
import CourseCard from "../../Pages/Shared/CourseCard/CourseCard";
import FAQ from "../../Pages/Shared/FAQ/FAQ";
import Profile from "../../Pages/Shared/Profile/Profile";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <CourseCard></CourseCard>
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
        ]
    }
]);
