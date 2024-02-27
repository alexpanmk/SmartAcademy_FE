import { React, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
// TODO: import { getUser } from "./service/users";

import { AppShell } from '@mantine/core'

//UI Components
import { AuthenticationImage } from './Components/AuthenticationImage/AuthenticationImage'
import Frontpage from "./Components/Frontpage/Frontpage";

//SA Components
import CourseListPage from "./Components/CourseListPage/CourseListPage";
import CourseViewPage from "./Components/CourseViewPage/CourseViewPage";

//Stores
import useAuthStore from "./stores/useAuthStore";

//Auth
import { SignedOut, SignedIn } from "@clerk/clerk-react";

//UI Components
import { NavbarSimpleColored } from "./Components/NavbarSimpleColored/NavbarSimpleColored";


function App() {

  const { user } = useAuthStore();

  return (
    <AppShell
      padding="md"
      header={{ height: 0 }}
      navbar={{
        width: 300
      }}>

      <SignedOut>
        <AuthenticationImage />
      </SignedOut>

      <SignedIn>

        <AppShell.Navbar>
          <NavbarSimpleColored />
        </AppShell.Navbar>
        <AppShell.Main pl={315}>
          <CourseListPage />
        </AppShell.Main>

      </SignedIn>
    </AppShell >
    // <Router>
    //   {user ? (
    //     <Routes>
    //       <Route path="/" element={<Frontpage />} />
    //     </Routes>
    //   )
    //     : (
    //       <Routes>
    //         <Route path="/" element={<AuthenticationImage />} />
    //         <Route path="/signup" element={<AuthenticationImage />} />
    //       </Routes>
    //     )}
    // </Router >
  )
}
export default App
