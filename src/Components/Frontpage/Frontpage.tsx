import React, { useState, useEffect } from 'react'

// UI Components
import { AppShell } from '@mantine/core'
// import { NavbarMinimal } from '../NavbarMinimal/NavbarMinimal'
import { NavbarSimpleColored } from '../NavbarSimpleColored/NavbarSimpleColored'
import CourseListPage from '../CourseListPage/CourseListPage'



function Frontpage() {

    //TODO: track nav selection to render the right pages in the main section


    return (
        <AppShell
            padding="md"
            header={{ height: 0 }}
            navbar={{
                width: 300
            }}
        >
            {/* <AppShell.Header >Header</AppShell.Header> */}
            <AppShell.Navbar>
                <NavbarSimpleColored />
            </AppShell.Navbar>
            <AppShell.Main pl={315}>
                <CourseListPage />
            </AppShell.Main>
        </AppShell>
    )
}

export default Frontpage