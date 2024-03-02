import React, { useState, useEffect } from 'react'
import SignUpForm from './SignUpForm'


import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';

import { useNavigate } from 'react-router-dom';


function SignUpFlow() {

    const navigate = useNavigate();

    const [form, setForm] = useState()
    const [isCompleteForm, setIsCompleteForm] = useState(false)

    return (
        <>
            {isCompleteForm ? <SignUpForm onFormChange={() => {
                setForm(
                    {
                        firstName: form.firstName,
                        lastName: form.lastName
                    }

                )
            }} setIsCompleteForm={setIsCompleteForm} /> : <div />}
        </>
    )
}


export default SignUpFlow