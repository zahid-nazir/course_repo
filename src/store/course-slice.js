import { createSlice } from "@reduxjs/toolkit";
import { getCourses } from "../api/CoursesAPI";

const courseSlice = createSlice({
    name: 'course',
    initialState: {
        courses: []
    },
    reducers: {
        list(state, action) {
            state.courses = [];
            const courses = action.payload;
            courses.forEach((course) => {
                state.courses.push(course);
            });
        },
        add(state, action) {
            state.courses.push(action.payload);
        },
        update(state, action) {
            const { id } = action.payload;
            const { c_name, author, tags } = action.payload.course;
            const courseObj = state.courses.find(course => course.id === id);
            courseObj.name = c_name;
            courseObj.author = author;
            courseObj.tags = tags;
        },
        delete(state,action) {
            const id = action.payload;
            state.courses.filter(course => course.id !== id);
        }
    },
});

export const getCourseList = () => {
    return async (dispatch) => {

        try {
            const response = await getCourses();
            
            // if(response.code === "ERR_NETWORK") {
            //     setError(response.message);
            // }

            if(response.status === 200) {
                dispatch(courseActions.list(response.data));
                // setCourses(response.data);
            }
        } catch (error) {
            console.log(error);
        }

    }
}

export const courseActions = courseSlice.actions;
export default courseSlice;