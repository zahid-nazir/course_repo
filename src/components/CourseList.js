import { useDispatch } from "react-redux";
import { deleteCourse } from "../api/CoursesAPI";
import CourseButton from "./CourseButton";
import { courseActions, getCourseList } from "../store/course-slice";

export default function CourseList(props)
{
    const dispatch = useDispatch();

    async function deleteCourses(id)
    {
        try {
            const response = await deleteCourse(id);
            if(response.status === 200) {
                dispatch(courseActions.delete(id));
                dispatch(getCourseList());
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <table className="table table-bordered table-striped table-hover" id="courses">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Author</th>
                <th>Tags</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {props.courses.map((course, index) => {
                return (
                    <tr key={index}>
                        <td>{course.id}</td>
                        <td>{course.name}</td>
                        <td>{course.author}</td>
                        <td>{course.tags}</td>
                        <td style={{whiteSpace: "nowrap"}}>
                            <CourseButton type="button" className="btn btn-primary btn-sm me-2" onClick={() => props.showForm(course)}>Edit</CourseButton>
                            <CourseButton type="button" className="btn btn-danger btn-sm me-2" onClick={() => deleteCourses(course._id)}>Delete</CourseButton>
                        </td>
                    </tr>
                );
            }
            )}
        </tbody>
    </table>
    );
}