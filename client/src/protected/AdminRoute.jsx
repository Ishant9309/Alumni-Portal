import { Navigate } from "react-router-dom"

import auth from "../firebase/auth"

function AdminRoute({ children }) {

  const user = auth.currentUser

  if (
    !user ||
    user.email !== "admin@alumni.com"
  ) {

    return <Navigate to="/admin-login" />

  }

  return children
}

export default AdminRoute