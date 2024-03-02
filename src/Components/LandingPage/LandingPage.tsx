import React from 'react';
import { Image, Stack, Group, Container, Title, Text, Button } from '@mantine/core';

const LandingPage = () => {
    return (
        <>
            <Group>
                <Container size="lg" style={{ textAlign: 'left', marginTop: '100px' }}>
                    <Title order={1} >Welcome to SmartAcademy!</Title>
                    <Text size="lg" style={{ marginTop: '20px' }}>
                        Learn and grow with our cutting-edge courses.
                    </Text>
                    <Button
                        variant="outline"
                        color="blue"
                        size="lg"
                        style={{ marginTop: '40px' }}
                    >
                        Get Started
                    </Button>
                </Container>
                <Container size="lg" style={{ textAlign: 'center', marginTop: '100px' }}>
                    <Image
                        radius="md"
                        h={600}
                        w="auto"
                        fit="contain"

                        sizes='xs' src="https://img.freepik.com/free-vector/hand-drawn-people-starting-business-project_23-2148843028.jpg?w=2000&t=st=1709309446~exp=1709310046~hmac=37ba58049f6af854ba9d82ad688749dbb003dbe6e02dba60c0f3e83283484b24" alt="Landing Image" />
                </Container>
            </Group>
        </>
    );
};

export default LandingPage;