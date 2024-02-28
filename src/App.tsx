import { React, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  useNavigate,
} from "react-router-dom";
// TODO: import { getUser } from "./service/users";

import { AppShell } from '@mantine/core'

//UI Components
import { AuthenticationImage } from './Components/AuthenticationImage/AuthenticationImage'
// import Frontpage from "./Components/Frontpage/Frontpage";

//SA Components
import CourseListPage from "./Components/CourseListPage/CourseListPage";
import CourseViewPage from "./Components/CourseViewPage/CourseViewPage";
import LearnerView from "./Components/LearnerView/LearnerView";

//Stores
import useAuthStore from "./stores/useAuthStore";

//Auth
import { SignedOut, SignedIn, useAuth } from "@clerk/clerk-react";

//UI Components
import { NavbarSimpleColored } from "./Components/NavbarSimpleColored/NavbarSimpleColored";
import CourseEditView from "./Components/CourseEditView/CourseEditView";


function App() {

  const { saveToken, token } = useAuthStore();
  const { user, getToken } = useAuth();

  useEffect(() => {
    //Try save token to store
    saveToken(getToken());

  }, []);


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
          <Router>

            <Routes>
              <Route path="/" element={<CourseListPage />} />
              <Route path="/learner/:courseId" element={<LearnerView />} />
              <Route path="/course/edit/:courseId" element={<CourseEditView />} />
              {/* <Route path="/course/:courseId" element={<CourseViewPage />} /> */}
            </Routes>
          </Router>
        </AppShell.Main>

      </SignedIn>
    </AppShell >
  )
}
export default App
