import React, { useState, useEffect } from 'react'
import { Space, Stack, Flex, Paper, Title, Text, Group, Button, Switch } from '@mantine/core'

import Question from './Question';

function QuestionList(props) {

    const { questions, onChange } = props;

    const [questionList, setQuestionList] = useState([])

    useEffect(() => {
        setQuestionList(questions)
    }, [])

    useEffect(() => {
        onChange(questionList)
    }, [questionList])

    return (
        <>
            {
                questions.map((question, index) => {
                    return (
                        <>
                            <Question onChange={(question) => {
                                const newQuestionList = [...questions];
                                newQuestionList[index] = question;
                                setQuestionList(newQuestionList);
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