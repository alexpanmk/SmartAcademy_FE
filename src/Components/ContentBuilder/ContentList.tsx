import React, { useState, useEffect } from 'react'
import { Space, Stack, Flex, Paper, Title, Text, Group, Button } from '@mantine/core'

import ContentItem from './ContentItem';

// Question, Options
function ContentList(prop) {

    const { contentList } = prop;

    return (
        <>
            {contentList.map((content: any, index: number) => {
                return (
                    <>
                        <Paper miw={1000} shadow="xs" p="xl" direction="column" justify="space-between">

                            <ContentItem contentItem={content} />

                        </Paper>
                        <Space h="xl" />
                    </>

                )
            })}
        </>
    )
}

export default ContentList