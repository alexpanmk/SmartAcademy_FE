import React, { useEffect, useState } from 'react'

import { Checkbox, Text, Paper, Title, Space, Stepper, Button, Group, Stack } from '@mantine/core'

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

    const { courseId } = useParams()

    const { courses, fetchCourses, setCourseList } = useCourseStore()

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



    const [updatedForm, setUpdatedForm] = useState({});

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

    // const handleQuestionFieldChange = (e) => {
    //     const { id, value } = e.target;
    //     console.log(id, value)

    //     let prevQuestion = course.questions[id]
    //     const newQuestion = { ...prevQuestion, questionText: value }
    //     const newQuestionList = { ...course.questions, newQuestion }



    // }

    const handleQuestionsChange = (questions) => {
        setCourse({ ...course, questions })
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
                            <Button onClick={nextStep}>Next</Button>
                            <Button onClick={handleSave}>Save</Button>
                            <Button onClick={closeEditModal}>Cancel</Button>
                        </Group>
                    </Stepper.Step>
                    <Stepper.Step label="Course Content">
                        {/* Content builder to return questions array */}
                        {/* <ContentBuilder questions={course.questions} onChange={handleQuestionsChange} /> */}

                        <QuestionList questions={course.questions} handleQuestionsChange={handleQuestionsChange} />

                        {/* {course.questions.map((question, index) => {
                            return (
                                <>
                                    <Paper key={index} shadow="xs" p="xl" direction="column" justify="space-between">

                                        <Stack direction="column" spacing="md">
                                            <Text fw="bold">Question {index + 1}</Text>
                                            <input onChange={handleQuestionFieldChange} id={index} value={question.questionText} type="text" placeholder="Question" />

                                            {question.options.map((option, optionIndex) => {
                                                return (
                                                    <>
                                                        <Text fw="bold">Option {optionIndex + 1}
                                                            {optionIndex === 0 ? " (Right Answer)" : " (Wrong Answer)"}
                                                        </Text>
                                                        <Group grow>
                                                            <Stack>
                                                                <input onChange={(evt) => {
                                                                    handleOptionFieldChange(index, optionIndex, evt.target.value)
                                                                }} key={optionIndex} id={index} value={option} type="text" placeholder="Option" />
                                                            </Stack>
                                                        </Group>
                                                    </>
                                                )
                                            }
                                            )}
                                        </Stack>
                                    </Paper>
                                    <Space h="xl" />
                                </>
                            )
                        })
                        } */}


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


            </Stack >


        </>
    )
}

export default CourseEditView