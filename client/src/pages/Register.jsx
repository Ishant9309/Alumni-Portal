import { useState } from "react"

import { createUserWithEmailAndPassword } from "firebase/auth"
import { doc, setDoc } from "firebase/firestore"

import { useNavigate } from "react-router-dom"

import auth from "../firebase/auth"
import db from "../firebase/firestore"

function Register() {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    branch: "",
    passingYear: "",
    company: "",
    package: "",
    role: "",
    location: "",
    bio: "",
    linkedin: "",
    github: "",
    skills: "",
    image: null
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

      let imageUrl = ""

      if (formData.image) {

        const imageData = new FormData()

        imageData.append("file", formData.image)

        imageData.append(
          "upload_preset",
          "alumni_upload"
        )

        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dj7zswsko/image/upload",
          {
            method: "POST",
            body: imageData
          }
        )

        const data = await response.json()

        imageUrl = data.secure_url

      }

      // Create User In Firebase Auth
      const userCredential =
        await createUserWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        )

      const user = userCredential.user

      // Save User Data In Firestore
      await setDoc(doc(db, "alumni", user.uid), {

        name: formData.name,
        email: formData.email,
        branch: formData.branch,
        passingYear: formData.passingYear,
        company: formData.company,
        package: formData.package,
        role: formData.role,
        location: formData.location,
        bio: formData.bio,
        linkedin: formData.linkedin,
        github: formData.github,
        skills: formData.skills,
        imageUrl: imageUrl,

        createdAt: new Date()

      })

      alert("Registration Successful 🚀")

      console.log("User Saved Successfully")

      // Redirect To Profile
      navigate("/dashboard")

      // Clear Form
      setFormData({
        name: "",
        email: "",
        password: "",
        branch: "",
        passingYear: "",
        company: "",
        package: "",
        role: "",
        location: "",
        bio: "",
        linkedin: "",
        github: "",
        skills: "",
        image: null
      })

    } catch (error) {

      console.log(error)

      alert(error.message)

    }

  }

  return (

    <div className="relative min-h-screen bg-black flex items-center justify-center px-6 py-16 overflow-hidden">

      {/* Glow Effects */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-500/20 rounded-full blur-3xl" />

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl" />

      {/* Form Card */}
      <div className="relative z-10 w-full max-w-3xl bg-white/10 backdrop-blur-2xl border border-yellow-500/10 rounded-[40px] p-8 md:p-12 shadow-2xl shadow-yellow-500/5">

        {/* Header */}
        <div className="text-center">

          <div className="inline-block px-6 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-300 mb-6">

            MPVPI Alumni Portal

          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white">

            Create Your

            <span className="block text-yellow-400 mt-3">
              Alumni Account
            </span>

          </h1>

          <p className="text-gray-400 text-lg mt-6 leading-8">

            Join your college alumni network and connect with alumni.

          </p>

        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6"
        >

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="bg-black/30 text-white border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-yellow-400 transition duration-300"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="bg-black/30 text-white border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-yellow-400 transition duration-300"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="bg-black/30 text-white border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-yellow-400 transition duration-300"
            required
          />

          <input
            type="text"
            name="branch"
            placeholder="Branch"
            value={formData.branch}
            onChange={handleChange}
            className="bg-black/30 text-white border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-yellow-400 transition duration-300"
            required
          />

          <input
            type="text"
            name="passingYear"
            placeholder="Passing Year"
            value={formData.passingYear}
            onChange={handleChange}
            className="bg-black/30 text-white border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-yellow-400 transition duration-300"
            required
          />

          <input
            type="text"
            name="company"
            placeholder="Current Company"
            value={formData.company}
            onChange={handleChange}
            className="bg-black/30 text-white border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-yellow-400 transition duration-300"
          />

          <input
            type="text"
            name="package"
            placeholder="Current Package"
            value={formData.package}
            onChange={handleChange}
            className="bg-black/30 text-white border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-yellow-400 transition duration-300 md:col-span-2"
          />

          <input
            type="text"
            name="role"
            placeholder="Job Role"
            value={formData.role}
            onChange={handleChange}
            className="bg-black/30 text-white border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-yellow-400 transition duration-300"
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            className="bg-black/30 text-white border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-yellow-400 transition duration-300"
          />

          <input
            type="text"
            name="linkedin"
            placeholder="LinkedIn Profile URL"
            value={formData.linkedin}
            onChange={handleChange}
            className="bg-black/30 text-white border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-yellow-400 transition duration-300 md:col-span-2"
          />

          <input
            type="text"
            name="github"
            placeholder="GitHub Profile URL"
            value={formData.github}
            onChange={handleChange}
            className="bg-black/30 text-white border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-yellow-400 transition duration-300 md:col-span-2"
          />

          <input
            type="text"
            name="skills"
            placeholder="Skills (React, Java, Firebase)"
            value={formData.skills}
            onChange={handleChange}
            className="bg-black/30 text-white border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-yellow-400 transition duration-300 md:col-span-2"
          />

          <textarea
            name="bio"
            placeholder="Write something about yourself..."
            value={formData.bio}
            onChange={handleChange}
            rows="4"
            className="bg-black/30 text-white border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-yellow-400 transition duration-300 md:col-span-2"
          />

          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              setFormData({
                ...formData,
                image: e.target.files[0]
              })
            }
            className="bg-black/30 text-white border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-yellow-400 transition duration-300 md:col-span-2"
          />

          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-black transition py-4 rounded-2xl font-semibold text-lg md:col-span-2 shadow-lg shadow-yellow-500/20"
          >

            Register

          </button>

        </form>

      </div>

    </div>

  )
}

export default Register