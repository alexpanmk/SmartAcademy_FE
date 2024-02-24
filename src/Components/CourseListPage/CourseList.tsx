import React from 'react'

function CourseList() {
    return (
        <Paper shadow="xs" p="xl" h="200" direction="row" wrap="wrap" justify="space-between">
            <Stack>
                <Title order={3}>Course 1</Title>
                <Text>Course Description</Text>
            </Stack>
        </Paper>
    )
}

export default CourseList