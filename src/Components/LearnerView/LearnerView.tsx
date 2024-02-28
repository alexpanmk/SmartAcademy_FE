//Learner view for attempting quiz
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { Modal, Space, Stack, Flex, Paper, Title, Text, Group, Button } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

import useCourseStore from '../../stores/useCourseStore'

function LearnerView() {


    const { courses } = useCourseStore()
    const { courseId } = useParams()


    const [course, setCourse] = useState(
        courses.find((course) => course._id === courseId)
    )

    const [resultsModalOpened, { open: openResultsModal, close: closeResultsModal }] = useDisclosure()

    const [courseCompleted, setCourseCompleted] = useState(false)
    const [courseScore, setCourseScore] = useState(0)

    //Questions
    const questions = course.questions
    //Recorded responses 
    const [responses, setResponses] = useState(
        //scaffold responses based on question list
        questions.map((question: any) => {
            return {
                questionId: question._id,
                response: ""
            }
        })
    )

    //To show complete coursebutton upon completion of quiz
    useEffect(() => {
        responses.every((response) => response.response !== "") ? setCourseCompleted(true) : setCourseCompleted(false)
    }, [responses])

    //To send in the responses upon completion of quiz to check results, for now to just check on front end
    const checkResults = () => {

        let correctResponses = 0;
        responses.forEach((response, index) => {

            console.log(response.response)
            console.log(questions[index].correctOption)

            if (response.response === questions[index].correctAnswer) {
                correctResponses++
            }
        })

        const score = Math.round((correctResponses / questions.length) * 100)
        return score;

    }
    // To show the result of the quiz


    //To send in the responses upon completion of quiz

    // To show the result of the quiz


    const handleQuestionResponses = (questionIndex: number, optionIndex: number) => {
        let newResponses = [...responses]
        newResponses[questionIndex].response = optionIndex;
        console.log(newResponses)
        setResponses(newResponses)
    }

    const handleCompleteButton = () => {
        setCourseScore(checkResults())
        openResultsModal()

        //log completion status to the backend
    }


    return (
        <>
            <Group justify='space-between'>
                <Title order={1}>{course.title}</Title>
                {courseCompleted ? <Button onClick={handleCompleteButton} size="md" variant="light" radius="md">Complete Course</Button> : null}
            </Group>

            <Space h="xl" />

            <Stack direction="column" spacing="md">

                {questions.map((question: any, questionIndex: number) => {
                    return (

                        <>
                            <Paper miw={1000} shadow="xs" p="xl" direction="column" justify="space-between">

                                <Title order={3}>Question: {question.questionText}</Title>


                                <Space h="xl" />
                                <Group direction="column" spacing="md">
                                    {question.options.map((option: any, optionIndex: number) => {

                                        return (
                                            <>
                                                <Button onClick={() => {
                                                    handleQuestionResponses(questionIndex, option)
                                                }} size="md" variant="light" radius="md">{option}</Button>

                                            </>
                                        )
                                    })}
                                </Group>
                            </Paper>
                            <Space h="xl" />

                            <Modal size={"auto"} opened={resultsModalOpened} onClose={closeResultsModal} title={"Results"}>
                                <Flex p={20} miw={1000} direction="column">
                                    <Title order={3}>Your Score: {courseScore}%</Title>
                                    <Text>Congratulations for completing the course </Text>
                                </Flex>
                            </Modal>


                        </>
                    )
                })}
            </Stack>

        </>
    )

}

export default LearnerView