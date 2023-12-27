import React, { useState } from "react";
import CoursesList from "./CoursesList";
import CourseForm from "./CourseForm";

export default function Courses()
{
    const [content, setContent] = useState(<CoursesList showForm={showForm} />);

    function showList() {
        setContent(<CoursesList showForm={showForm} />);
    }

    function showForm(course) {
        setContent(<CourseForm course={course} showList={showList} />);
    }

    return (
        <div className="container my-5">
            {content}
        </div>
    );
}