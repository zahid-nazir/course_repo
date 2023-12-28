// import { useEffect, useState } from "react";

// import { getCourses } from "../api/CoursesAPI";
import CourseButton from "../components/CourseButton";
import CourseList from "../components/CourseList";
import { useSelector } from "react-redux";
// import { courseActions, getCourseList } from "../store/course-slice";

export default function CoursesList(props)
{
    // const  [courses, setCourses] = useState([]);
    // const  [error, setError] = useState('');
    // const dispatch = useDispatch();
    const courses = useSelector((state) => state.courses.courses);
    // async function fetchCourses()
    // {

        // try {
        //     const response = await getCourses();
            
        //     if(response.code === "ERR_NETWORK") {
        //         setError(response.message);
        //     }

        //     if(response.status === 200) {
        //         dispatch(courseActions.list(response.data));
        //         // setCourses(response.data);
        //     }
        // } catch (error) {
        //     console.log(error);
        // }
    // }

    // useEffect(() => getCourseList(), [dispatch]);

    return (
        <>
            {/* {error && <p>{error}</p>} */}
            {courses.length > 0 && <><h2 className="text-center mb-3">List of Courses</h2>
            <CourseButton type="button" className="btn btn-primary me-2 mb-2" onClick={() => props.showForm({})}>Create</CourseButton>
            {/* <CourseButton type="button" className="btn btn-secondary me-2 mb-2" onClick={() => fetchCourses()}>Refresh</CourseButton> */}

            <CourseList courses={courses} showForm={props.showForm} /></>}
        </>
    );
}