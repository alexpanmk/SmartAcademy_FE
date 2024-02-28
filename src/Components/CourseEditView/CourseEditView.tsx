import React, { useEffect, useState } from 'react'

import { Text, Title, Space, Stepper, Button, Group, Stack } from '@mantine/core'

import ContentBuilder from '../ContentBuilder/ContentBuilder';

//fetch course
import { getCourse } from '../../service/course';
import useAuthStore from '../../stores/useAuthStore';

//Nav imports
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

//From courses Store
import useCourseStore from '../../stores/useCourseStore';

function CourseEditView(props) {
    console.log(props)

    const { courseId } = useParams()

    const { courses, fetchCourses, setCourseList } = useCourseStore()

    const { editDetails } = props;
    const { getToken } = useAuthStore()

    const [isEditMode, setIsEditMode] = useState(courseId ? true : false)
    const [course, setCourse] = useState(
        {
            title: "",
            description: "",
            questions: []
        }
    )

    const [error, setError] = useState(null)

    //DONE: To load course according to the id
    //TODO: Save course when save button is clicked
    //TODO: when courseID is falsy means course is new.
    //TODO: Cancel to confirm discard changes


    useEffect(() => {

        console.log(courses)


        //to filter course from the courses
        // const course = courses.find((course) => course._id === editDetails.courseId)
        if (isEditMode) {
            const course = courses.find((course) => course._id === courseId)
            setCourse(course)
        }

    }, [])

    const { closeEditModal } = props;

    const [active, setActive] = useState(0);
    const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current))
    // Edit or Create new for cse

    const handleSave = () => {

    }

    const handleFieldChange = (e) => {
        const { id, value } = e.target;
        setCourse({ ...course, [id]: value })
    }

    return (
        <>
            <Title order={1}>{isEditMode ? "Edit Course" : "NewCourse"}</Title>

            <Space h="xl" />

            <Stack direction="column" justify='space-between'>
                <Stepper active={active} onStepClick={setActive}>
                    <Stepper.Step label="Course Details">
                        <Stack direction="column" spacing="md">

                            {/* <input type="text" placeholder="Course Image URL" /> */}
                            <Text fw="bold">Course Title</Text>
                            <input onChange={handleFieldChange} id="title" value={course.title} type="text" placeholder="Course Title" />
                            <Text fw="bold">Course Description</Text>
                            <textarea id="description" value={course.description} placeholder="Course Description" />
                            <Space h="xl" />
                        </Stack>
                        <Group justify={"flex-end"}>
                            <Button onClick={nextStep}>Next</Button>
                            <Button onClick={handleSave}>Save</Button>
                            <Button onClick={closeEditModal}>Cancel</Button>
                        </Group>
                    </Stepper.Step>
                    <Stepper.Step label="Course Content">
                        <ContentBuilder />
                        <Space h="xl" />
                        <Group justify={"flex-end"}>
                            <Button onClick={prevStep}>Previous</Button>
                            <Button onClick={nextStep}>Next</Button>
                            <Button>Save</Button>
                            <Button onClick={closeEditModal}>Cancel</Button>
                        </Group>
                    </Stepper.Step>
                    <Stepper.Step label="Course Settings" />
                </Stepper >


            </Stack>


        </>
    )
}

export default CourseEditView