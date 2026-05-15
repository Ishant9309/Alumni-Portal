import { useState } from "react"

import { signInWithEmailAndPassword } from "firebase/auth"

import { useNavigate } from "react-router-dom"

import auth from "../firebase/auth"

function AdminLogin() {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })

  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    try {

      const userCredential =
        await signInWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        )

      const user = userCredential.user

      // Admin Check
      if (user.email === "admin@alumni.com") {

        navigate("/admin")

      } else {

        alert("Access Denied 🚫")

      }

    } catch (error) {

      console.log(error)

      alert(error.message)

    }

  }

  return (

    <div className="relative min-h-screen bg-black flex items-center justify-center px-6 overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-500/20 rounded-full blur-3xl" />

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl" />

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md bg-white/10 border border-yellow-500/10 rounded-[40px] p-8 md:p-10 backdrop-blur-2xl shadow-2xl shadow-yellow-500/5">

        {/* Header */}
        <div className="text-center">

          <div className="inline-block px-6 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-300 mb-6">

            MPVPI Secure Access

          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white">

            Admin

            <span className="block text-yellow-400 mt-3">
              Login
            </span>

          </h1>

          <p className="text-gray-400 text-lg mt-6 leading-8">

            Authorized administrators only.

          </p>

        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col gap-6"
        >

          <input
            type="email"
            name="email"
            placeholder="Admin Email"
            value={formData.email}
            onChange={handleChange}
            className="bg-black/30 text-white border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-yellow-400 transition duration-300"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="bg-black/30 text-white border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-yellow-400 transition duration-300"
          />

          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 transition duration-300 py-4 rounded-2xl font-semibold text-black text-lg shadow-lg shadow-yellow-500/20"
          >

            Login As Admin

          </button>

        </form>

      </div>

    </div>

  )
}

export default AdminLogin