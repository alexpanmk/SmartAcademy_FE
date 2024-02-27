import React, { useState, useEffect } from 'react'
import CourseItem from './CourseItem'

//TODO: Remove this
// import { getCourseList } from '../../service/course'

import useCourseStore from '../../stores/useCourseStore'

import { useAuth } from '@clerk/clerk-react'


import { Paper, Stack, Title, Text } from '@mantine/core'

function CourseList(props) {

    const { handleEdit } = props

    const { courses, fetchCourses, setCourseList } = useCourseStore()
    const { user, getToken } = useAuth()

    useEffect(() => {
        //To fetch the courses and store it in store
        fetchCourses(getToken())
    }, [])


    return (
        <>
            <Stack>
                {courses.map((course: any) => {
                    return <CourseItem key={course._id} id={course._id} handleEdit={handleEdit} courseName={course.title} courseDescription={course.description} courseImage={"course.image"} />
                })}
            </Stack>
        </>
    )
}

export default CourseList