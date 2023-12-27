import React from "react";
import { useSelector } from "react-redux";

export default function Home()
{
    const courses = useSelector((state) => state.courses.courses);
    return (
        <div className="container my-5">
            <h2 className="text-center mb-3">Home Page</h2>
            <h3>Course Statistics</h3>
            <ul>
                <li>Total Courses: {courses.length}</li>
            </ul>
        </div>
    );
}