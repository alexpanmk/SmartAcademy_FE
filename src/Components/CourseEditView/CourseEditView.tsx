import React, { useEffect, useState } from 'react'
import { Checkbox, Text, Paper, Title, Space, Stepper, Button, Group, Stack } from '@mantine/core'

import { useForm } from '@mantine/form'

import ContentBuilder from '../ContentBuilder/ContentBuilder';

//Course service
import { getCourse, updateCourse } from '../../service/course';

import useAuthStore from '../../stores/useAuthStore';

//Nav imports
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

//From courses Store
import useCourseStore from '../../stores/useCourseStore';
import { useAuth } from '@clerk/clerk-react';

//SA Imports
import QuestionList from './QuestionList';


function CourseEditView(props) {
    console.log(props)

    //Course ID from router route
    const { courseId } = useParams()

    const { courses, fetchCourses } = useCourseStore()

    const { editDetails } = props;
    const { getToken } = useAuth();

    const [isEditMode, setIsEditMode] = useState(courseId ? true : false)
    const [course, setCourse] = useState(
        {
            title: "",
            description: "",
            questions: []
        }
    )
    const [questions, setQuestions] = useState([])

    //TODO: Context for unsaved changes across children
    const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false)

    const [updatedForm, setUpdatedForm] = useState({});
    const [error, setError] = useState(null)

    //TODO: Save course when save button is clicked
    //TODO: when courseID is falsy means course is new.
    //TODO: Cancel to confirm discard changes

    useEffect(() => {

        console.log(courses)

        //to filter course from the courses if in edit mode
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

    const handleSave = async () => {
        //TODO: Confirmation for save
        console.log("Saving Course");

        if (isEditMode) {
            try {
                await updateCourse(course._id, updatedForm, getToken())
                fetchCourses(getToken())
            } catch (error) {
                setError(error)
            }
        }
    }

    const handleFieldChange = (e) => {
        const { id, value } = e.target;

        console.log(id, value)

        setUpdatedForm({ ...updatedForm, [id]: value }) //for update
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
                            <textarea onChange={handleFieldChange} id="description" value={course.description} placeholder="Course Description" />
                            <Space h="xl" />
                        </Stack>
                        <Group justify={"flex-end"}>

                            <Button onClick={handleSave}>Save</Button>
                            <Button onClick={closeEditModal}>Cancel</Button>
                        </Group>
                    </Stepper.Step>
                    <Stepper.Step label="Course Content">

                        <QuestionList onChange={(questionList) => {
                            setCourse({ ...course, questions: questionList })
                            setUpdatedForm({ ...updatedForm, questions: questionList })
                        }} questions={course.questions} />


                        <Space h="xl" />
                        <Group justify={"flex-end"}>

                            <Button onClick={handleSave}>Save</Button>
                            <Button onClick={closeEditModal}>Cancel</Button>
                        </Group>
                    </Stepper.Step>
                    <Stepper.Step label="Course Settings" />
                </Stepper >


            </Stack >


        </>
    )
}

export default CourseEditView