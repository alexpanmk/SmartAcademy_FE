import React, { useState, useEffect } from 'react'
import { Stack, Flex, Paper, Title, Text, Group, Button } from '@mantine/core'

import ContentItem from './ContentItem';

// Question, Options
function ContentList(prop) {

    const { contentList } = prop;

    return (
        <>
            {contentList.map((content: any, index: number) => {
                return (
                    <Paper shadow="xs" p="xl" h="200" direction="row" wrap="wrap" justify="space-between">

                    </Paper>
                )
            })}
        </>
    )
}

export default ContentList