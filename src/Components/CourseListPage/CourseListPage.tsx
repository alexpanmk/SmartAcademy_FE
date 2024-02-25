//Page to show list of course
//To show different views for learner and course creators
import React, { useState } from 'react'

import {
    Stack,
    Text,
    Paper,
    Button, Group, Title, Grid, Skeleton
} from '@mantine/core';
import { Calendar } from '@mantine/dates'

import CourseList from './CourseList'

const child = <Skeleton height={160} radius="md" animate={false} />

function CourseListPage() {
    const [value, setValue] = useState<Date | null>(null);


    return (

        <Grid>
            <Grid.Col mih={75} span={{ base: 12, xs: 12 }}>
                <Group justify='space-between'>
                    <Title order={1}>Courses</Title>
                    <Button size="md" variant="light" radius="md">Create New Course</Button>
                </Group>
            </Grid.Col>

            <Grid.Col span={{ base: 12, xs: 9 }}>
                <CourseList />

            </Grid.Col>
            <Grid.Col span={{ base: 12, xs: 3 }}>
                <Calendar size='md' />
            </Grid.Col>

        </Grid>

    )
}

export default CourseListPage