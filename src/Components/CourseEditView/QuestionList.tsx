import React, { useState, useEffect } from 'react'
import { Space, Stack, Flex, Paper, Title, Text, Group, Button, Switch } from '@mantine/core'

function QuestionList(props) {

    const { questions, setQuestions } = props;


    return (
        <>
            {
                questions.map((question, index) => {
                    return (
                        <>
                            <Paper key={index} shadow="xs" p="xl" direction="column" justify="space-between">

                                <Stack direction="column" spacing="md">
                                    <Text fw="bold">Question {index + 1}</Text>
                                    <input onChange={handleQuestionFieldChange} id={index} value={question.questionText} type="text" placeholder="Question" />

                                    {/* {question.options.map((option, optionIndex) => {
                                        return (
                                            <>
                                                <Text fw="bold">Option {optionIndex + 1}
                                                    {optionIndex === 0 ? " (Right Answer)" : " (Wrong Answer)"}
                                                </Text>
                                                <Group grow>
                                                    <Stack>
                                                        <input onChange={(evt) => {
                                                            handleOptionFieldChange(index, optionIndex, evt.target.value)
                                                        }} key={optionIndex} id={index} value={option} type="text" placeholder="Option" />
                                                    </Stack>
                                                </Group>
                                            </>
                                        )
                                    }
                                    )} */}
                                </Stack>
                            </Paper>
                            <Space h="xl" />
                        </>
                    )
                })
            }

        </>
    )
}

export default QuestionList