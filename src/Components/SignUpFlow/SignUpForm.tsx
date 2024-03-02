import React, { useState, useEffect } from 'react'
import { Image, modal, Button, Stack, Group, Input, Paper, Text, Title, Modal } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'


function SignUpForm(props) {
    const { setIsComplete, onFormChange } = props
    const [opened, { open, close }] = useDisclosure(open);

    const [form, setForm] = useState({});

    useEffect(() => {
        onFormChange(form)
    }, [form])

    return (
        <>
            <Modal opened={opened} onClose={close} title="Sign Up">

                <Group grow>
                    <Image src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7963.jpg?w=1480&t=st=1709319650~exp    =1709320250~hmac=3f1f0aa344dffb1c8c492b21c49ffcc0effccfac13ce07e3698f8e7691179b52" alt="placeholder" />
                </Group>
                <Group>
                    <Input onChange={(evt) => {
                        setForm({ ...form, firstName: evt.target.value })
                    }} label="First Name" placeholder="Enter your name" />
                    <Input onChange={(evt) => {
                        setForm({ ...form, lastName: evt.target.value })
                    }} label="Last Name" placeholder="Enter your email" />
                    <Button onClick={setIsComplete} size="md">Continue Sign Up</Button>
                </Group>
            </Modal>

        </>
    )
}

export default SignUpForm