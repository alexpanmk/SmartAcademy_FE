import * as courseAPI from '../api/course';

export const getCourseList = async (token) => {
    return await courseAPI.getCourses();
}

export const getCourse = async (courseId ,token) => {
    return await courseAPI.getCourse(courseId, token);
}

export const updateCourse = async (courseId, courseData, token) => {
    console.log(courseData);
    return await courseAPI.updateCourse(courseId, courseData, token);
}

export const deleteCourse = async (courseId, token) => {
    return await courseAPI.deleteCourse(courseId, token);
}

export const createCourse = async (courseData, token) => {
    return await courseAPI.createCourse(courseData, token);
}

