import React, { useState, useEffect } from 'react'
import { Button, Stack, Group, Title, Text } from '@mantine/core'


function ContentBuilder(props: any) {

    const [content, setContent] = useState([])

    // Assumption: 3 wrong answers and 1 right answer
    const handleAddButton = (contentType) => {

        const newContentList = [...content];

        newContentList.push({
            content: "",
            contentType: contentType,
            answers: []
        })

        setContent(newContentList)

    }

    return (
        <>
            <Stack direction="column" spacing="md">
                <Title order={3}>Quiz Builder</Title>
                <Text>Build your quiz by adding questions and answers</Text>
            </Stack>




            <Group mih={100} grow >
                <Button onClick={() => { handleAddButton("MCQ") }} mih={50} variant="default">{"Add Question"}</Button>
                <Button onClick={() => { handleAddButton("Video") }} mih={50} variant="default">{"Add Video Link"}</Button>
            </Group>
        </>
    )
}

export default ContentBuilder