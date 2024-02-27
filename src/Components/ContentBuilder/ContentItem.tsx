import React, { useState, useEffect } from 'react'
import { Stack, Flex, Paper, Title, Text, Group, Button, Switch } from '@mantine/core'

function ContentItem(props) {


    const [contentItem, setContentItem] = useState({
        question: "",
        rightAnswer: "",
        wrongAnswer1: "",
        wrongAnswer2: "",
        wrongAnswer3: "",
        contentType: "MCQ"
    })


    useEffect(() => {
        console.log("test")
    }, [])


    switch (contentItem.contentType) {
        case "MCQ":
            return (
                <Stack direction="column" spacing="md">
                    <Title order={3}>Question</Title>
                    <Text>Enter question</Text>
                    <input value={contentItem.question} type="text" onChange={
                        (e) => {
                            setContentItem({ ...contentItem, question: e.target.value })
                        }
                    } />
                    <Text>Enter the right answer</Text>
                    <input value={contentItem.rightAnswer} type="text" onChange={
                        (e) => {
                            setContentItem({ ...contentItem, rightAnswer: e.target.value })
                        }
                    } />
                    <Text>Enter a wrong answer</Text>
                    <input value={contentItem.wrongAnswer1} type="text" onChange={
                        (e) => {
                            setContentItem({ ...contentItem, wrongAnswer1: e.target.value })
                        }
                    } />
                    <Text>Enter a wrong answer</Text>
                    <input value={contentItem.wrongAnswer2} type="text" onChange={
                        (e) => {
                            setContentItem({ ...contentItem, wrongAnswer2: e.target.value })
                        }
                    } />
                    <Text>Enter a wrong answer</Text>
                    <input value={contentItem.wrongAnswer3} type="text" onChange={
                        (e) => {
                            setContentItem({ ...contentItem, wrongAnswer3: e.target.value })
                        }
                    } />
                </Stack>
            )
        // case "Video":
        //     return (
        //         <Stack direction="column" spacing="md">
        //             <Title order={3}>Video URL</Title>
        //             <Text>Enter the Video URL</Text>
        //             <input type="text" onChange={handleChange} />
        //         </Stack>
        //     )

    }
}

export default ContentItem