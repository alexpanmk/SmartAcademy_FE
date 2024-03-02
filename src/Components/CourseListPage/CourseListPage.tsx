//Page to show list of course
//To show different views for learner and course creators
import React, { useEffect, useState } from 'react'
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

//SA Components
import CourseList from './CourseList'
import CourseEditView from '../CourseEditView/CourseEditView';
// import SignUpFlow from '../SignUpFlow/SignUpClerk';

const child = <Skeleton height={160} radius="md" animate={false} />

function CourseListPage(props) {
    const [value, setValue] = useState<Date | null>(null);


    // Modals
    // const [courseEditModalOpened, { open: openEditModal, close: closeEditModal }] = useDisclosure(false);
    const [signUpFlowModalOpened, { open: openSignUpFlowModal, close: closeSignUpFlowModal }] = useDisclosure(props.signUpFlow);


    const [editDetails, setEditDetails] = useState({

    })

    const handleEdit = (courseId: string) => {
        setEditDetails({ editMode: true, courseId: courseId });
        openEditModal();
    }

    return (
        <>
            <Grid>
                <Grid.Col mih={75} span={{ base: 12, xs: 12 }}>
                    <Group justify='space-between'>
                        <Title order={1}>Courses</Title>
                        <Button onClick={() => {
                            setEditDetails({ editMode: false });
                            openEditModal();
                        }} size="md" variant="light" radius="md">Create New Course</Button>
                    </Group>
                </Grid.Col>

                <Grid.Col span={{ base: 12, xs: 9 }}>
                    <CourseList handleEdit={handleEdit} />
                </Grid.Col>
                <Grid.Col span={{ base: 12, xs: 3 }}>
                    <Calendar size='md' />
                </Grid.Col>

            </Grid>

            {/* Disable modal for now */}

            {/* <Modal size={"auto"} opened={courseEditModalOpened} onClose={closeEditModal} title={
                editDetails.editMode ? "Edit Course" : "Create New Course"
            }>
                <Flex p={20} miw={1000} direction="column">
                    <CourseEditView editDetails={editDetails} closeEditModal={closeEditModal} />
                </Flex>
            </Modal> */}


            {/* <Modal size={"auto"} opened={signUpFlowModalOpened} onClose={closeSignUpFlowModal} title={""}>
                <Flex p={20} miw={1000} direction="column">
                    <SignUpFlow />
                </Flex>
            </Modal> */}



        </>


    )
}

export default CourseListPage