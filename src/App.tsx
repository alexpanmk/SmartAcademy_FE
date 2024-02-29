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
import SignUpFlow from "./Components/SignUpFlow/SignUpFlow";


//Stores
import useAuthStore from "./stores/useAuthStore";

//Auth
import { SignedOut, SignedIn, useAuth, useSession } from "@clerk/clerk-react";

//UI Components
import { NavbarSimpleColored } from "./Components/NavbarSimpleColored/NavbarSimpleColored";
import CourseEditView from "./Components/CourseEditView/CourseEditView";

//service
import { loginUser } from "./api/users";


function App() {

  const { session } = useSession();
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => async () => {

    //get token from current clerk session
    try {
      const token = await session.getToken();
      setToken(token);
      console.log(token);
    } catch (error) {
      console.log(error);
    }

    //get user from current clerk session
    try {
      const user = await loginUser(token);
      setUser(user);
      console.log(user);
    } catch (error) {
      console.log(error);
    }

    //send token to store to check user exists, if not open signupflow modal to complete flow and create user in BE

    //if user exists, proceed.

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
        <Router>


          <AppShell.Navbar>
            <NavbarSimpleColored />
          </AppShell.Navbar>
          <AppShell.Main pl={315}>


            <Routes>
              <Route path="/signupflow" element={<CourseListPage signUpFlow />} />
              <Route path="/" element={<CourseListPage />} />
              <Route path="/learner/:courseId" element={<LearnerView />} />
              <Route path="/course/edit/:courseId" element={<CourseEditView />} />
              {/* <Route path="/course/:courseId" element={<CourseViewPage />} /> */}
            </Routes>

          </AppShell.Main>
        </Router>
      </SignedIn>
    </AppShell >
  )
}
export default App
