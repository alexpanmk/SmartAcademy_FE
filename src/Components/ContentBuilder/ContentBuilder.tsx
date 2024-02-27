import React, { useState, useEffect } from 'react'
import { Flex, Button, Stack, Group, Title, Text } from '@mantine/core'

import ContentList from './ContentList'

function ContentBuilder(props: any) {

    const [contentList, setContentList] = useState([])

    // Assumption: 3 wrong answers and 1 right answer
    const handleAddButton = (contentType) => {

        const newContentList = [...contentList];

        newContentList.push({
            content: "",
            contentType: contentType,
            answers: []
        })

        setContentList(newContentList)

    }

    return (
        <>
            <Stack direction="column" spacing="md">
                <Title order={3}>Quiz Builder</Title>
                <Text>Build your quiz by adding questions and answers</Text>
            </Stack>

            <Flex direction="column" spacing="md">
                <ContentList contentList={contentList} />
            </Flex>

            <Group mih={100} grow >
                <Button onClick={() => { handleAddButton("MCQ") }} mih={50} variant="default">{"Add Question"}</Button>
                <Button onClick={() => { handleAddButton("Video") }} mih={50} variant="default">{"Add Video Link"}</Button>
            </Group>
        </>
    )
}

export default ContentBuilder