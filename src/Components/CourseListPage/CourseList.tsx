import React from 'react'

import { Paper, Stack, Title, Text } from '@mantine/core'

function CourseList() {
    return (
        <>
            <Stack>
                <Paper shadow="xs" p="xl" h="200" direction="row" wrap="wrap" justify="space-between">
                    <Stack>
                        <Title order={3}>Course 1</Title>
                        <Text>Course Description</Text>
                    </Stack>
                </Paper>
                <Paper shadow="xs" p="xl" h="200" direction="row" wrap="wrap" justify="space-between">
                    <Stack>
                        <Title order={3}>Course 2</Title>
                        <Text>Course Description</Text>
                    </Stack>
                </Paper>
                <Paper shadow="xs" p="xl" h="200" direction="row" wrap="wrap" justify="space-between">
                    <Stack>
                        <Title order={3}>Course 3</Title>
                        <Text>Course Description</Text>
                    </Stack>
                </Paper>
            </Stack>
        </>
    )
}

export default CourseList