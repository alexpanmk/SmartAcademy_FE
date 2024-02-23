//Page to show list of course
//To show different views for learner and course creators
import React from 'react'

import { Grid, Skeleton, Container } from '@mantine/core';

const child = <Skeleton height={140} radius="md" animate={false} />

function CourseListPage() {

    return (

        <Grid>
            <Grid.Col span={{ base: 12, xs: 4 }}>{child}</Grid.Col>
            <Grid.Col span={{ base: 12, xs: 8 }}>{child}</Grid.Col>
            <Grid.Col span={{ base: 12, xs: 8 }}>{child}</Grid.Col>
            <Grid.Col span={{ base: 12, xs: 4 }}>{child}</Grid.Col>
            <Grid.Col span={{ base: 12, xs: 3 }}>{child}</Grid.Col>
            <Grid.Col span={{ base: 12, xs: 3 }}>{child}</Grid.Col>
            <Grid.Col span={{ base: 12, xs: 6 }}>{child}</Grid.Col>
        </Grid>

    )
}

export default CourseListPage