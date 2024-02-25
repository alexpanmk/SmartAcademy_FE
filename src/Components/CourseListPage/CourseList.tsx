import React from 'react'
import CourseItem from './CourseItem'
import getCourseList from '../../'


import { useAuth } from '@clerk/nextjs'

import { Paper, Stack, Title, Text } from '@mantine/core'

function CourseList() {
    return (
        <>
            <Stack>
                <CourseItem />
            </Stack>
        </>
    )
}

export default CourseList