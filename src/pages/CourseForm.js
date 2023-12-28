import { useDispatch } from "react-redux";
import { saveCourse, updateCourse } from "../api/CoursesAPI";
import CourseButton from "../components/CourseButton";
import { courseActions } from "../store/course-slice";

export default function CourseForm(props)
{
    const dispatch = useDispatch();

    async function handleSubmit(event)
    {
        event.preventDefault();
        const formData = new FormData(event.target);

        const course = Object.fromEntries(formData.entries());

        if(props.course.id) {
            try {
                const response = await updateCourse(props.course.id,course);
                if(response.status === 200) {
                    dispatch(courseActions.update({id: props.course.id, course: course}));
                    props.showList();
                }
            } catch (error) {
                console.log(error);
            }
        } else {
            try {
                const response = await saveCourse(course);
                if(response.status === 201) {
                    const { id, name, author, tags} = response.data;
                    dispatch(courseActions.add({id: id, name: name, author: author, tags: tags}));
                    props.showList();
                }   
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <>
            <h2 className="text-center mb-3">{props.course.id ? "Edit Course" : "Create New Course"}</h2>

            <div className="row">
                <div className="col-lg-6 mx-auto">
                    <form onSubmit={(event) => handleSubmit(event)}>
                        {props.course.id && <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">ID</label>
                            <div className="col-sm-8">
                                <input readOnly className="form-control-plaintext" type="text" name="course_id" defaultValue={props.course.id} required />
                            </div>
                        </div>}
                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Name</label>
                            <div className="col-sm-8">
                                <input className="form-control" type="text" name="c_name" defaultValue={props.course.name} required />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Author</label>
                            <div className="col-sm-8">
                                <input className="form-control" type="text" name="author" defaultValue={props.course.author} required />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <label className="col-sm-4 col-form-label">Tags</label>
                            <div className="col-sm-8">
                                <select className="form-select" name="tags" defaultValue={props.course.tags} required>
                                    <option value="backend">Backend</option>
                                    <option value="frontend">Frontend</option>
                                    <option value="automation">Automation</option>
                                    <option value="scripting">Shell Scripting</option>
                                </select>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="offset-sm-4 col-sm-4 d-grid">
                                <CourseButton type="submit" className="btn btn-primary btn-sm me-3">{props.course.id ? "Update" : "Save"}</CourseButton>
                            </div>
                            <div className="col-sm-4 d-grid">
                                <CourseButton type="button" className="btn btn-secondary me-2" onClick={() => props.showList()}>Cancel</CourseButton>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}