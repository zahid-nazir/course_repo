import { Route, Routes } from "react-router-dom";
import Home from '../pages/Home';
import Courses from '../pages/Course';
import ErrorPage from "../pages/Error";

export default function AppRoutes()
{
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    );
}