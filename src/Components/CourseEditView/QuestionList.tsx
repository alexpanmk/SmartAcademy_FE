import React, { useState, useEffect } from 'react'
import { Space, Stack, Flex, Paper, Title, Text, Group, Button, Switch } from '@mantine/core'

import Question from './Question';

function QuestionList(props) {

    const [questions, setQuestions] = useState(props.questions)

    return (
        <>
            {
                questions.map((question, index) => {
                    return (
                        <>
                            <Question onChange={(question) => {
                                const newQuestions = [...questions];
                                newQuestions[index] = question;
                                setQuestions(newQuestions);
                            }} question={question} key={index} index={index} />
                            <Space h="xl" />
                        </>
                    )
                })
            }

        </>
    )
}

export default QuestionList