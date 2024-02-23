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

function App() {
  const [user, setUser] = useState("alexpan@gmail.com")



  return (
    <Router>
      {user ? (
        <Routes>
          <Route path="/" element={<Frontpage />} />
        </Routes>
      )
        : (
          <Routes>
            <Route path="/" element={<AuthenticationImage />} />
            <Route path="/signup" element={<AuthenticationImage />} />
          </Routes>
        )}
    </Router >
  )
}
export default App
