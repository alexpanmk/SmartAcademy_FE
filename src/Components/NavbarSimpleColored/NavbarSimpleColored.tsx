import { useState } from 'react';
import { Title, Group, Code, Button } from '@mantine/core';
import {
  IconNotebook,
  IconFingerprint,
  IconKey,
  IconSettings,
  Icon2fa,
  IconDatabaseImport,
  IconReceipt2,
  IconSwitchHorizontal,
  IconLogout,
} from '@tabler/icons-react';
// import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './NavbarSimpleColored.module.css';

import { SignOutButton } from '@clerk/clerk-react';

import useAuthStore from '../../stores/useAuthStore';

import { useNavigate } from 'react-router-dom';

const data = [
  // { link: '', label: 'Home', icon: IconBellRinging },
  { link: '/', label: 'Courses', icon: IconNotebook },
  { link: '', label: 'Settings', icon: IconFingerprint },
];

export function NavbarSimpleColored() {

  const navigate = useNavigate();

  const [active, setActive] = useState('Billing');

  const { logout } = useAuthStore();

  const links = data.map((item) => (
    <a
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        navigate(item.link);
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (

    <>
      <nav className={classes.navbar}>
        <div className={classes.navbarMain}>
          <Group className={classes.header} justify="space-between">
            <Title order={2} className={classes.title}>SMART ACADEMY</Title>
            {/* <MantineLogo size={28} inverted style={{ color: 'white' }} />
          <Code fw={700} className={classes.version}>
            v3.1.2
          </Code> */}
          </Group>
          {links}
        </div>


        <SignOutButton>
          <Button leftIcon={<IconLogout />} onClick={logout}>
            Sign out
          </Button>
        </SignOutButton>
      </nav>
    </>
  );
}
