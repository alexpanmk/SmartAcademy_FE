//Page to show list of course
//To show different views for learner and course creators
import React, { useState } from 'react'
import { useDisclosure } from '@mantine/hooks';

import {
    Flex,
    Modal,
    Stack,
    Text,
    Paper,
    Button, Group, Title, Grid, Skeleton
} from '@mantine/core';
import { Calendar } from '@mantine/dates'

import CourseList from './CourseList'
import CourseEditView from '../CourseEditView/CourseEditView';

const child = <Skeleton height={160} radius="md" animate={false} />

function CourseListPage() {
    const [value, setValue] = useState<Date | null>(null);

    const [courseEditModalOpened, { open: openEditModal, close: closeEditModal }] = useDisclosure(false);
    const [editDetails, setEditDetails] = useState({
        editMode: false, //false for create, true for edit
        courseId: ""
    })

    return (
        <>
            <Grid>
                <Grid.Col mih={75} span={{ base: 12, xs: 12 }}>
                    <Group justify='space-between'>
                        <Title order={1}>Courses</Title>
                        <Button onClick={openEditModal} size="md" variant="light" radius="md">Create New Course</Button>
                    </Group>
                </Grid.Col>

                <Grid.Col span={{ base: 12, xs: 9 }}>
                    <CourseList />
                </Grid.Col>
                <Grid.Col span={{ base: 12, xs: 3 }}>
                    <Calendar size='md' />
                </Grid.Col>

            </Grid>
            <Modal size={"auto"} opened={courseEditModalOpened} onClose={closeEditModal} title={
                editDetails.editMode ? "Edit Course" : "Create New Course"
            }>
                <Flex p={20} miw={1000} direction="column">
                    <CourseEditView editDetails={editDetails} closeEditModal={closeEditModal} />
                </Flex>
            </Modal>

        </>


    )
}

export default CourseListPage