import { useState } from 'react';
import {
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

import useAuthStore from '../../hooks/useAuthStore';

export function AuthenticationImage() {

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
          <Anchor<'a'> href="#" fw={700} onClick={(event) => event.preventDefault()}>
            Register
          </Anchor>
        </Text>
      </Paper>
    </div>
  );
}
