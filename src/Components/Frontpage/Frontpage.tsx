import React, { useState, useEffect } from 'react'

// UI Components
import { AppShell } from '@mantine/core'
import { NavbarMinimal } from '../NavbarMinimal/NavbarMinimal'

function Frontpage() {
    return (
        <AppShell
            padding="md"
            header={{ height: 60 }}
        // navbar={{
        //     width: 300,
        //     breakpoint: 'sm',
        //     collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
        // }}
        >
            <AppShell.Header>Header</AppShell.Header>
            <AppShell.Navbar>
                <NavbarMinimal />
            </AppShell.Navbar>
            <AppShell.Main>
                {/* <Button onClick={toggleDesktop} visibleFrom="sm">
                    Toggle navbar
                </Button>
                <Button onClick={toggleMobile} hiddenFrom="sm">
                    Toggle navbar
                </Button> */}
            </AppShell.Main>
        </AppShell>
    )
}

export default Frontpage