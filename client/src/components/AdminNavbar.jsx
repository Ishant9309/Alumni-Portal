import { Link, useNavigate } from "react-router-dom"

import { signOut } from "firebase/auth"

import auth from "../firebase/auth"

function AdminNavbar() {

  const navigate = useNavigate()

  const handleLogout = async () => {

    try {

      await signOut(auth)

      navigate("/admin-login")

    } catch (error) {

      console.log(error)

    }
  }

  return (
    <nav className="w-full fixed top-0 left-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link
          to="/admin"
          className="text-2xl font-bold text-white"
        >
          Admin Panel
        </Link>

        <div className="flex items-center gap-8 text-white">

          <Link to="/admin">
            Dashboard
          </Link>

          <Link to="/create-event">
  Create Event
</Link>

<Link to="/manage-events">
  Manage Events
</Link>

          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 px-5 py-2 rounded-xl"
          >
            Logout
          </button>

        </div>

      </div>

    </nav>
  )
}

export default AdminNavbar