import React, { useState, useEffect } from 'react'
import { Stack, Group, Title, Text } from '@mantine/core'

function QuizBuilder(props: any) {

    const { questions } = props;

    return (
        <>
            <Stack direction="column" spacing="md">
                <Title order={3}>Quiz Builder</Title>
                <Text>Build your quiz by adding questions and answers</Text>
            </Stack>

        </>
    )
}

export default QuizBuilder