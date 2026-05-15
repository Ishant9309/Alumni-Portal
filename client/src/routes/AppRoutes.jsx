import { Routes, Route } from "react-router-dom"

import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Profile from "../pages/Profile"
import Alumni from "../pages/Alumni"
import AlumniProfile from "../pages/AlumniProfile"
import Dashboard from "../pages/Dashboard"
import Admin from "../pages/Admin"
import AdminLogin from "../pages/AdminLogin"
import AdminRoute from "../protected/AdminRoute"
import Events from "../pages/Events"
import CreateEvent from "../pages/CreateEvent"
import ManageEvents from "../pages/ManageEvents"
import EditEvent from "../pages/EditEvent"
import About from "../pages/About"

function AppRoutes() {

  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="/alumni" element={<Alumni />} />

      <Route path="/alumni/:id" element={<AlumniProfile />} />

      <Route path="/profile" element={<Profile />} />

      <Route path="/events" element={<Events />} />
      
      <Route path="/create-event" element={<CreateEvent />} />

      <Route
path="/admin"
  element={
    <AdminRoute>
      <Admin />
    </AdminRoute>
  }
/>

      <Route path="/admin-login" element={<AdminLogin />} />

      <Route path="/manage-events" element={<ManageEvents />} />

      <Route path="/edit-event/:id" element={<EditEvent />} />

      <Route path="/about" element={<About />} />



    </Routes>
  )
}

export default AppRoutes