import React, { useEffect, useState } from 'react'

import { Space, Stepper, Button, Group, Stack } from '@mantine/core'

import QuizBuilder from '../QuizBuilder/QuizBuilder';

function CourseEditView(props) {

    const { closeEditModal, editDetails } = props;

    const [active, setActive] = useState(1);
    const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current))
    // Edit or Create new for cse

    return (
        <>
            <Stepper active={active} onStepClick={setActive}>
                <Stepper.Step label="Course Details">
                    <Stack direction="column" spacing="md">
                        <input type="text" placeholder="Course Image URL" />
                        <input type="text" placeholder="Course Title" />
                        <textarea placeholder="Course Description" />
                        <Space h="xl" />
                    </Stack>
                    <Group justify={"flex-end"}>
                        <Button onClick={nextStep}>Next</Button>
                        <Button onClick={closeEditModal}>Cancel</Button>
                    </Group>
                </Stepper.Step>
                <Stepper.Step label="Initial Course Content">
                    <QuizBuilder />
                    <Space h="xl" />
                    <Group justify={"flex-end"}>
                        <Button onClick={prevStep}>Previous</Button>
                        <Button onClick={nextStep}>Next</Button>
                        <Button onClick={closeEditModal}>Cancel</Button>
                    </Group>
                </Stepper.Step>
                <Stepper.Step label="Course Settings" />
            </Stepper >


        </>
    )
}

export default CourseEditView