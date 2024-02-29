import { useState } from 'react';
import {
  Container,
  AppShell,
  Flex,
  Select,
  Space,
  Group,
  Modal,
  Paper,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
  Anchor,
} from '@mantine/core';
import classes from './AuthenticationImage.module.css';

//hook for modal state
import { useDisclosure } from '@mantine/hooks';

import useAuthStore from '../../stores/useAuthStore';

import { SignInButton } from "@clerk/clerk-react";
import { SignIn } from '@clerk/clerk-react';

export function AuthenticationImage() {

  const [opened, { open, close }] = useDisclosure(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login } = useAuthStore();

  return (


    <div className={classes.wrapper}>
      <Flex mih={800} justify="center" align="center" direction="column" className={classes.image}>
        <SignIn
          afterSignInUrl={'/course'}
        />
      </Flex>

      <Modal opened={opened} onClose={close} title="Register" size="md" shadow="xl">
        <TextInput label="Name" placeholder="" />
        <TextInput label="Email address" placeholder="" />
        <PasswordInput label="Password" placeholder="" mt="md" />
        <PasswordInput label="Confirm Password" placeholder="" mt="md" />
        <Space h="xl" />
        <Select data={['Learner', 'Course Creator']} label="Account Type" placeholder="Select account type" />
        <Space h="xl" />

        <Group justify='flex-end'>
          <Button onClick={close} mt="xl" size="md">
            Register
          </Button>
          <Button onClick={close} mt="xl" size="md">
            Cancel
          </Button>
        </Group>
      </Modal>


    </div>

  );
}
