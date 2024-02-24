import { useState } from 'react';
import {
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

import useAuthStore from '../../hooks/useAuthStore';

export function AuthenticationImage() {

  const [opened, { open, close }] = useDisclosure(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login } = useAuthStore();

  return (
    <div className={classes.wrapper}>

      <Paper className={classes.form} radius={0} p={30}>
        <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
          Welcome back to SmartAcademy!
        </Title>

        <TextInput value={email} onChange={(evt) => { setEmail(evt.currentTarget.value) }} label="Email address" placeholder="hello@gmail.com" size="md" />
        <PasswordInput value={password} onChange={(evt) => { setPassword(evt.currentTarget.value) }} label="Password" placeholder="Your password" mt="md" size="md" />
        <Checkbox label="Keep me logged in" mt="xl" size="md" />
        <Button fullWidth mt="xl" size="md" onClick={() => login("alexpanmk@gmail.com", "password")}>
          Login
        </Button>

        <Text ta="center" mt="md">
          Don&apos;t have an account?{' '}
          <Anchor<'a'> href="#" fw={700} onClick={open}>
            Register
          </Anchor>
        </Text>
      </Paper>

      {/* Registration Modal */}
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
