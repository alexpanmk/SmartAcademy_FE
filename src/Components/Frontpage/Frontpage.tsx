import React, { useState, useEffect } from 'react'

// UI Components
import { AppShell } from '@mantine/core'
// import { NavbarMinimal } from '../NavbarMinimal/NavbarMinimal'
import { NavbarSimpleColored } from '../NavbarSimpleColored/NavbarSimpleColored'

function Frontpage() {
    return (
        <AppShell
            padding="md"
            header={{ height: 0 }}
            navbar={{
                // height: "1000px",

            }}
        >
            {/* <AppShell.Header >Header</AppShell.Header> */}
            <AppShell.Navbar>
                <NavbarSimpleColored />
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