import { configureStore } from "@reduxjs/toolkit";
import courseSlice from "./course-slice";

const store = configureStore({
    reducer: {
        courses: courseSlice.reducer
    }
});

export default store;