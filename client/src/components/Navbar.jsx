import { Link, useNavigate } from "react-router-dom"

import { onAuthStateChanged, signOut } from "firebase/auth"

import { useEffect, useState } from "react"

import auth from "../firebase/auth"

import logo from "../assets/logo.jpg"

function Navbar() {

  const [user, setUser] = useState(null)

  const [menuOpen, setMenuOpen] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {

    const unsubscribe =
      onAuthStateChanged(auth, (currentUser) => {

        setUser(currentUser)

      })

    return () => unsubscribe()

  }, [])

  const handleLogout = async () => {

    try {

      await signOut(auth)

      navigate("/")

    } catch (error) {

      console.log(error)

    }

  }

  return (

    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-2xl border-b border-yellow-500/10 shadow-lg shadow-black/20">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-4 group"
        >

          <div className="relative">

            <img
              src={logo}
              alt="Logo"
              className="w-14 h-14 rounded-full object-cover border-2 border-yellow-400 shadow-lg shadow-yellow-500/20 group-hover:scale-105 transition duration-300"
            />

            <div className="absolute inset-0 rounded-full bg-yellow-500/10 blur-xl" />

          </div>

          <div>

            <h1 className="text-xl md:text-2xl font-bold text-yellow-400 tracking-wide">

              MPVPI Nanded

            </h1>

            <p className="text-xs md:text-sm text-gray-400">

              Alumni Portal

            </p>

          </div>

        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-white font-medium">

          <Link
            to="/"
            className="hover:text-yellow-400 transition duration-300 hover:scale-105"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="hover:text-yellow-400 transition duration-300 hover:scale-105"
          >
            About
          </Link>

          <Link
            to="/alumni"
            className="hover:text-yellow-400 transition duration-300 hover:scale-105"
          >
            Alumni
          </Link>

          <Link
            to="/events"
            className="hover:text-yellow-400 transition duration-300 hover:scale-105"
          >
            Events
          </Link>

          {user ? (
            <>

              <Link
                to="/dashboard"
                className="hover:text-yellow-400 transition duration-300 hover:scale-105"
              >
                Dashboard
              </Link>

              <Link
                to="/profile"
                className="hover:text-yellow-400 transition duration-300 hover:scale-105"
              >
                Profile
              </Link>

              <button
                onClick={handleLogout}
                className="bg-yellow-500 hover:bg-yellow-600 hover:scale-105 transition duration-300 px-6 py-3 rounded-2xl text-black font-semibold shadow-lg shadow-yellow-500/20"
              >

                Logout

              </button>

            </>
          ) : (
            <>

              <Link
                to="/login"
                className="hover:text-yellow-400 transition duration-300 hover:scale-105"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="bg-yellow-500 hover:bg-yellow-600 hover:scale-105 transition duration-300 px-6 py-3 rounded-2xl text-black font-semibold shadow-lg shadow-yellow-500/20"
              >

                Register

              </Link>

            </>
          )}

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-4xl text-yellow-400 hover:scale-110 transition duration-300"
        >

          {menuOpen ? "✕" : "☰"}

        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (

        <div className="md:hidden bg-black/95 backdrop-blur-2xl border-t border-yellow-500/10 px-6 py-8 flex flex-col gap-6 text-white animate-fadeIn">

          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            className="hover:text-yellow-400 transition duration-300"
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="hover:text-yellow-400 transition duration-300"
          >
            About
          </Link>

          <Link
            to="/alumni"
            onClick={() => setMenuOpen(false)}
            className="hover:text-yellow-400 transition duration-300"
          >
            Alumni
          </Link>

          <Link
            to="/events"
            onClick={() => setMenuOpen(false)}
            className="hover:text-yellow-400 transition duration-300"
          >
            Events
          </Link>

          {user ? (
            <>

              <Link
                to="/dashboard"
                onClick={() => setMenuOpen(false)}
                className="hover:text-yellow-400 transition duration-300"
              >
                Dashboard
              </Link>

              <Link
                to="/profile"
                onClick={() => setMenuOpen(false)}
                className="hover:text-yellow-400 transition duration-300"
              >
                Profile
              </Link>

              <button
                onClick={handleLogout}
                className="bg-yellow-500 hover:bg-yellow-600 transition duration-300 px-5 py-4 rounded-2xl text-black font-semibold shadow-lg shadow-yellow-500/20"
              >

                Logout

              </button>

            </>
          ) : (
            <>

              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
                className="hover:text-yellow-400 transition duration-300"
              >
                Login
              </Link>

              <Link
                to="/register"
                onClick={() => setMenuOpen(false)}
                className="bg-yellow-500 hover:bg-yellow-600 transition duration-300 px-5 py-4 rounded-2xl text-black font-semibold text-center shadow-lg shadow-yellow-500/20"
              >

                Register

              </Link>

            </>
          )}

        </div>

      )}

    </nav>

  )
}

export default Navbar