//Learner view for attempting quiz
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { Space, Stack, Flex, Paper, Title, Text, Group, Button } from '@mantine/core'

import useCourseStore from '../../stores/useCourseStore'

function LearnerView() {

    const { courses } = useCourseStore()
    const { courseId } = useParams()
    const [course, setCourse] = useState(
        courses.find((course) => course._id === courseId)
    )

    const questions = course.questions

    return (
        <>
            <Group justify='flex-start'>
                <Title order={1}>{course.title}</Title>
            </Group>

            <Space h="xl" />

            <Stack direction="column" spacing="md">
                {questions.map((question: any, index: number) => {
                    return (
                        <>
                            <Paper miw={1000} shadow="xs" p="xl" direction="column" justify="space-between">
                                <Title order={3}>Question: {question.questionText}</Title>
                                <Space h="xl" />
                                <Group direction="column" spacing="md">
                                    {question.options.map((option: any, index: number) => {
                                        return (
                                            <Button size="md" variant="light" radius="md">{option}</Button>
                                        )
                                    })}
                                </Group>
                            </Paper>
                            <Space h="xl" />
                        </>
                    )
                })}
            </Stack>

        </>
    )

}

export default LearnerView