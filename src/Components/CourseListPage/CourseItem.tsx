import React, { useState } from 'react'
import { Paper, Stack, Title, Text } from '@mantine/core'

function CourseItem(props: any) {

    //Props: course name, course description, course image
    const { courseName, courseDescription, courseImage } = props;


    return (
        <Paper shadow="xs" p="xl" h="200" direction="row" wrap="wrap" justify="space-between">
            <Stack>
                <Title order={3}>{courseName}</Title>
                <Text>{courseDescription}</Text>
            </Stack>
        </Paper>
    )
}

export default CourseItem