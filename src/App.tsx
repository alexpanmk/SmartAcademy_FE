import { React, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  useNavigate,
} from "react-router-dom";
// TODO: import { getUser } from "./service/users";
import LandingPage from "./Components/LandingPage/LandingPage";


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
import { RedirectToSignIn, RedirectToSignUp, SignedOut, SignedIn, useAuth, useSession } from "@clerk/clerk-react";

//UI Components
import { NavbarSimpleColored } from "./Components/NavbarSimpleColored/NavbarSimpleColored";
import CourseEditView from "./Components/CourseEditView/CourseEditView";
import { HeaderMegaMenu } from "./Components/HeaderMegaMenu/HeaderMegaMenu";

//service
import { getUser } from "./api/users";


function App() {

  const { userId } = useAuth();
  const { session } = useSession();
  const [token, setToken] = useState(null);


  return (
    <>
      <SignedOut>

        <AppShell
          padding={0}
          header={{ height: 60 }}
        >
          <Router>
            <AppShell.Header>
              <HeaderMegaMenu />
            </AppShell.Header>

            <AppShell.Main pl={0} >

              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/signup" element={<RedirectToSignUp />} />
                <Route path="/signin" element={<RedirectToSignIn />} />
                <Route path="/signupflow" element={<SignUpFlow />} />
              </Routes>

            </AppShell.Main>
          </Router>
        </AppShell>




      </SignedOut>


      <AppShell
        padding="md"
        header={{ height: 0 }}
        navbar={{
          width: 300
        }}>


        <SignedIn>
          <Router>



            <AppShell.Navbar>
              <NavbarSimpleColored />
            </AppShell.Navbar>
            <AppShell.Main pl={315}>


              <Routes>
                <Route path="/" element={<CourseListPage />} />
                <Route path="/learner/:courseId" element={<LearnerView />} />
                <Route path="/course/edit/:courseId" element={<CourseEditView />} />
                {/* <Route path="/course/:courseId" element={<CourseViewPage />} /> */}
              </Routes>

            </AppShell.Main>
          </Router>
        </SignedIn>
      </AppShell >
    </>
  )
}
export default App
