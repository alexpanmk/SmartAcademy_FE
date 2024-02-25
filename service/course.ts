import * as courseAPI from '../api/course';

export const getCourseList = async () => {
    return await courseAPI.getCourses();
}