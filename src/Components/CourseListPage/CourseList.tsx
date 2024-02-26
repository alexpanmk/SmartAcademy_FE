import React, { useState, useEffect } from 'react'
import CourseItem from './CourseItem'

import { getCourseList } from '../../service/course'
import { useAuth } from '@clerk/clerk-react'


import { Paper, Stack, Title, Text } from '@mantine/core'

function CourseList() {

    const [courseList, setCourseList] = useState([])
    const { user, getToken } = useAuth()

    useEffect(() => {
        const fetchCourseList = async () => {
            const token = await getToken()
            const response = await getCourseList(token)
            setCourseList(response.courses)
        }
        fetchCourseList()
    }, [])


    return (
        <>
            <Stack>
                {courseList.map((course: any) => {
                    return <CourseItem key={course._id} id={course._id} courseName={course.title} courseDescription={course.description} courseImage={"course.image"} />
                })}
            </Stack>
        </>
    )
}

export default CourseList