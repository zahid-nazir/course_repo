import { http } from "../http-common";

/**
 * Returns the available products.
 * @returns {Array} All available products
 */
export const getCourses = async () => {

    try {
        const response = await http.get('/course');
        return response; 
    } catch (error) {
        return {message: "We could not connect to the backend services.",code:error.code};
    }
}

/**
 * Saves a course.
 * @param {Object} course
 * @returns {Object} Saved course object
 */
export const saveCourse = async (course) => {

  const response = await http.post('/course', {
                      c_name: course.c_name,
                      author: course.author,
                      tags: course.tags
                    });
  return response;
}

/**
 * Updates a course by id.
 * @param {Number} id
 * @param {Object} course
 * @returns {Object} Updated course
 */
export const updateCourse = async(id, course) => {

  const response = await http.patch(`/course/${id}`, {
                            name: course.c_name,
                            author: course.author,
                            tags: course.tags
                          });
  return response;
}

/**
 * Deletes a course.
 * @param {Number} id
 * @returns {Object} Deleted course
 */
export const deleteCourse = async(id) => {

  const response = await http.delete(`/course/${id}`);

  return response;
}

