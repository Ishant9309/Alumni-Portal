import { useEffect, useState } from "react"

import { doc, getDoc, updateDoc } from "firebase/firestore"

import auth from "../firebase/auth"

import db from "../firebase/firestore"

import MainLayout from "../layouts/MainLayout"

function Profile() {

  const [loading, setLoading] = useState(true)

  const [formData, setFormData] = useState({
    name: "",
    branch: "",
    passingYear: "",
    company: "",
    package: "",
    imageUrl: "",
    role: "",
    location: "",
    bio: "",
    linkedin: "",
    github: "",
    skills: ""
  })

  const fetchUserData = async () => {

    try {

      const user = auth.currentUser

      if (!user) return

      const docRef = doc(db, "alumni", user.uid)

      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {

        setFormData(docSnap.data())

      }

      setLoading(false)

    } catch (error) {

      console.log(error)

    }

  }

  useEffect(() => {
    fetchUserData()
  }, [])

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })

  }

  const handleImageUpload = async (e) => {

    const file = e.target.files[0]

    if (!file) return

    try {

      const imageData = new FormData()

      imageData.append("file", file)

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

      setFormData({
        ...formData,
        imageUrl: data.secure_url
      })

    } catch (error) {

      console.log(error)

    }
  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    try {

      const user = auth.currentUser

      if (!user) return

      const docRef = doc(db, "alumni", user.uid)

      await updateDoc(docRef, {

        name: formData.name,
        branch: formData.branch,
        passingYear: formData.passingYear,
        company: formData.company,
        package: formData.package,
        imageUrl: formData.imageUrl,
        role: formData.role,
        location: formData.location,
        bio: formData.bio,
        linkedin: formData.linkedin,
        github: formData.github,
        skills: formData.skills

      })

      alert("Profile Updated 🚀")

    } catch (error) {

      console.log(error)

      alert(error.message)

    }
  }

  if (loading) {

    return (
      <MainLayout>

        <div className="flex items-center justify-center min-h-[60vh] text-white text-2xl">
          Loading...
        </div>

      </MainLayout>
    )
  }

  return (
    <MainLayout>

      <div className="max-w-5xl mx-auto px-6 py-10">

        <div className="bg-white/10 border border-yellow-500/10 rounded-[40px] p-6 md:p-10 backdrop-blur-2xl shadow-2xl shadow-yellow-500/5">

          {/* Header */}
          <div className="text-center mb-12">

            <div className="inline-block px-6 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-300 mb-6">

              MPVPI Alumni Profile

            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white">

              Edit

              <span className="block text-yellow-400 mt-3">
                Your Profile
              </span>

            </h1>

          </div>

          {/* Profile Image */}
          <div className="flex justify-center mb-12">

            <div className="relative">

              <img
                src={formData.imageUrl}
                alt={formData.name}
                className="w-40 h-40 rounded-full object-cover border-4 border-yellow-400 shadow-lg shadow-yellow-500/20"
              />

            </div>

          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none text-white focus:border-yellow-400 transition duration-300"
            />

            <input
              type="text"
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              placeholder="Branch"
              className="bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none text-white focus:border-yellow-400 transition duration-300"
            />

            <input
              type="text"
              name="passingYear"
              value={formData.passingYear}
              onChange={handleChange}
              placeholder="Passing Year"
              className="bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none text-white focus:border-yellow-400 transition duration-300"
            />

            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Current Company"
              className="bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none text-white focus:border-yellow-400 transition duration-300"
            />

            <input
              type="text"
              name="package"
              value={formData.package}
              onChange={handleChange}
              placeholder="Package"
              className="bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none text-white focus:border-yellow-400 transition duration-300"
            />

            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              placeholder="Job Role"
              className="bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none text-white focus:border-yellow-400 transition duration-300"
            />

            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Location"
              className="bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none text-white focus:border-yellow-400 transition duration-300"
            />

            <input
              type="text"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              placeholder="LinkedIn Profile URL"
              className="bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none text-white focus:border-yellow-400 transition duration-300 md:col-span-2"
            />

            <input
              type="text"
              name="github"
              value={formData.github}
              onChange={handleChange}
              placeholder="GitHub Profile URL"
              className="bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none text-white focus:border-yellow-400 transition duration-300 md:col-span-2"
            />

            <input
              type="text"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              placeholder="Skills (React, Java, Firebase)"
              className="bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none text-white focus:border-yellow-400 transition duration-300 md:col-span-2"
            />

            <textarea
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              placeholder="Write something about yourself..."
              rows="5"
              className="bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none text-white focus:border-yellow-400 transition duration-300 md:col-span-2"
            />

            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="bg-black/30 border border-white/10 rounded-2xl px-5 py-4 outline-none text-white focus:border-yellow-400 transition duration-300 md:col-span-2"
            />

            <button
              type="submit"
              className="md:col-span-2 bg-yellow-500 hover:bg-yellow-600 text-black transition py-4 rounded-2xl text-lg font-semibold"
            >
              Save Changes
            </button>

          </form>

        </div>

      </div>

    </MainLayout>
  )
}

export default Profile