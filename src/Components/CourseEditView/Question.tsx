import React, { useState, useEffect } from 'react'
import { Space, Stack, Flex, Paper, Title, Text, Group, Button, Switch } from '@mantine/core'
import { useForm } from '@mantine/form';
import { useDebouncedValue } from '@mantine/hooks';

import Option from './Option';

function Question(props) {

    const { question, index, onChange } = props;

    const [questionText, setQuestionText] = useState(question.questionText)

    //Debounced value allows time for user to complete input before updating state
    const [dbQuestionText] = useDebouncedValue(questionText, 200)

    useEffect(() => {
        onChange({ ...question, questionText: dbQuestionText })
    }, [dbQuestionText])

    return (
        <>
            <Paper key={index} shadow="xs" p="xl" direction="column" justify="space-between">

                <Stack direction="column" spacing="md">
                    <Text fw="bold">Question {index + 1}</Text>
                    <input onChange={(evt) => { setQuestionText(evt.target.value) }} value={questionText} type="text" placeholder="Question" />



                    {question.options.map((option, index) => {
                        return <Option option={option} key={index} index={index} onChange={onChange} />
                    }
                    )}
                </Stack>
            </Paper>
        </>
    )
}

export default Question