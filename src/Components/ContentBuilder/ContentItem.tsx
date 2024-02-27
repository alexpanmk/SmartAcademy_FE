import React, { useState, useEffect } from 'react'
import { Stack, Flex, Paper, Title, Text, Group, Button, Switch } from '@mantine/core'

function ContentItem(props) {


    const [contentItem, setContentItem] = useState(props.contentItem)

    const handleChange = (e) => {
        console.log(e.target)
    }

    switch (contentItem.contentType) {
        case "MCQ":
            return (
                <Stack direction="column" spacing="md">
                    <Title order={3}>Question</Title>
                    <Text>Enter the question</Text>
                    <input type="text" onChange={handleChange} />
                    <Text>Enter the right answer</Text>
                    <input type="text" onChange={handleChange} />
                    <Text>Enter a wrong answer</Text>
                    <input type="text" onChange={handleChange} />
                    <Text>Enter a wrong answer</Text>
                    <input type="text" onChange={handleChange} />
                    <Text>Enter a wrong answer</Text>
                    <input type="text" onChange={handleChange} />
                </Stack>
            )
        case "Video":
            return (
                <Stack direction="column" spacing="md">
                    <Title order={3}>Video URL</Title>
                    <Text>Enter the Video URL</Text>
                    <input type="text" onChange={handleChange} />
                </Stack>
            )

    }
}

export default ContentItem