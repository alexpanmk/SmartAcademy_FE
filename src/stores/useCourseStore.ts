import { create }  from zustand;
import { immer } from 'zustand/middleware/immer';

//Course service imports
import { Course } from '../service/course';

// type Course = {
//     id: string;
//     title: string;
//     description: string;
//     date: string;
//     time: string;
//     location: string;
//     instructor: string;
//     seats: number;
//     enrolled: number;
//     waitlist: number;
// }

type CourseState = {
    courses: Course[];
    addCourse: (course: Course) => void;
    removeCourse: (id: string) => void;
    updateCourse: (course: Course) => void;
    deleteCourse: (id: string) => void;
}

const useCourseStore = create<CourseState>(immer((set) => ({
    //To fetch the courses from the course service
    courses: [],
    addCourse: (course) => set((state) => {
        state.courses.push(course);
    }),
    removeCourse: (id) => set((state) => {
        state.courses = state.courses.filter((course) => course.id !== id);
    }),
    updateCourse: (course) => set((state) => {
        const index = state.courses.findIndex((c) => c.id === course.id);
        state.courses[index] = course;
    }),
    deleteCourse: (id) => set((state) => {
        state.courses = state.courses.filter((course) => course.id !== id);
    }),
})));

export default useCourseStore;
