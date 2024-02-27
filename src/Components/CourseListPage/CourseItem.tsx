import React, { useState } from 'react'
import { Space, Paper, Stack, Title, Text, Group, Button, Image } from '@mantine/core'
import { deleteCourse } from '../../service/course';

import { useAuth } from '@clerk/clerk-react'

function CourseItem(props: any) {

    //Props: course name, course description, course image
    const { id, courseName, courseDescription, courseImage, editDetails, SetEditDetails } = props;

    //TODO: Modal for delete confirmation

    return (
        <Paper shadow="xs" p="xl" h="200" direction="row" wrap="wrap" justify="space-between">
            {/* TODO: To add course image             */}
            {/* <Image src={courseImage} alt="course image" width={100} height={100} /> */}

            <Stack>
                <Title order={3}>{courseName}</Title>
                <Text>{courseDescription}</Text>
            </Stack>
            <Space h="xl" />
            <Group justify='flex-end'>
                <Button size="md" variant="light" radius="md">Preview</Button>
                <Button onClick={
                    () => {
                        SetEditDetails({ editMode: true, courseId: id });
                    }
                } size="md" variant="light" radius="md">Edit</Button>
                <Button onClick={() => {
                    deleteCourse(id);
                }} size="md" variant="light" radius="md">Delete</Button>
            </Group>
        </Paper>
    )
}

export default CourseItem