import React from 'react'
import RootLayout from './layouts/RootLayout.jsx'
import Dashboard from './layouts/Dashboard.jsx'

import Login from './pages/auth/Login.jsx'
import Signin from './pages/auth/Signin.jsx'
import MakePassword from './pages/auth/MakePassword.jsx'
import EmailVerifivation from './pages/auth/EmailVerification.jsx'
    
import Home from './pages/main/Home.jsx'
import Meetings from './pages/main/Meetings.jsx'
import Create from './pages/main/Create.jsx'

import './App.css'

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from 'react-router-dom'




const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            {/* Authentication & Guest entrance */}
            <Route path="/auth" element={<RootLayout />}>
                <Route index element={<Login />} />
                <Route path="sign" element={<Signin />} />
                <Route path="forgotpassword/verifyemail" element={<EmailVerifivation />} />
                <Route path="forgotpassword/new" element={<MakePassword title="Enter new Password" description="Enter Password" />} />
                <Route path="sign/authcontinue/password" element={<MakePassword title="Create Password" description="Enter Password" />} />
            </Route>
            
            {/* Logged in User */}
            <Route path="/" element={<Dashboard />}>
                <Route index element={<Home />} />
                <Route path="meets" element={<Meetings />} />
                <Route path="room" element="Chat Room" />
                <Route path="create" element={<Create />} />          
                <Route path="create-ann" element="Announcement Creation Page" />          
                <Route path="create-meet" element="Meeting Creation Page" />          
            </Route>
        </>
    )
)

const App = () => {
  return <RouterProvider router={router}/>
}


export default App
