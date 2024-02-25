import * as courseAPI from '../api/course';

export const getCourseList = async (token) => {
    return await courseAPI.getCourses();
}