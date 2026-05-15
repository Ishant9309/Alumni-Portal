import { useState } from "react"

import {
  collection,
  addDoc
} from "firebase/firestore"

import db from "../firebase/firestore"

import AdminLayout from "../layouts/AdminLayout"

function CreateEvent() {

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    date: "",
    time: "",
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

      // Upload Image To Cloudinary
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

      // Save Event
      await addDoc(collection(db, "events"), {

        title: formData.title,
        description: formData.description,
        location: formData.location,
        date: formData.date,
        time: formData.time,
        imageUrl: imageUrl,
        createdAt: new Date()

      })

      alert("Event Created 🚀")

      setFormData({
        title: "",
        description: "",
        location: "",
        date: "",
        time: "",
        image: null
      })

    } catch (error) {

      console.log(error)

      alert(error.message)

    }

  }

  return (

    <AdminLayout>

      <div className="max-w-5xl mx-auto px-6 py-10">

        {/* Header */}
        <div className="mb-14">

          <div className="inline-block px-6 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-300 mb-6">

            MPVPI Admin Panel

          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white">

            Create

            <span className="block text-yellow-400 mt-3">
              New Event
            </span>

          </h1>

          <p className="text-gray-400 text-lg mt-6 leading-8 max-w-3xl">

            Create alumni events, workshops, meetups,
            seminars, and college activities for students
            and alumni members.

          </p>

        </div>

        {/* Form Card */}
        <div className="bg-white/10 border border-yellow-500/10 rounded-[40px] p-8 md:p-12 backdrop-blur-2xl shadow-2xl shadow-yellow-500/5">

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-6"
          >

            {/* Event Title */}
            <input
              type="text"
              name="title"
              placeholder="Event Title"
              value={formData.title}
              onChange={handleChange}
              className="bg-black/30 border border-white/10 rounded-2xl px-5 py-5 outline-none text-white focus:border-yellow-400 transition duration-300"
            />

            {/* Location */}
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={formData.location}
              onChange={handleChange}
              className="bg-black/30 border border-white/10 rounded-2xl px-5 py-5 outline-none text-white focus:border-yellow-400 transition duration-300"
            />

            {/* Date */}
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="bg-black/30 border border-white/10 rounded-2xl px-5 py-5 outline-none text-white focus:border-yellow-400 transition duration-300"
            />

            {/* Time */}
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="bg-black/30 border border-white/10 rounded-2xl px-5 py-5 outline-none text-white focus:border-yellow-400 transition duration-300"
            />

            {/* Description */}
            <textarea
              name="description"
              placeholder="Event Description"
              rows="5"
              value={formData.description}
              onChange={handleChange}
              className="bg-black/30 border border-white/10 rounded-2xl px-5 py-5 outline-none text-white focus:border-yellow-400 transition duration-300 resize-none"
            />

            {/* Image Upload */}
            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  image: e.target.files[0]
                })
              }
              className="bg-black/30 border border-white/10 rounded-2xl px-5 py-5 outline-none text-white focus:border-yellow-400 transition duration-300"
            />

            {/* Button */}
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 transition duration-300 py-5 rounded-2xl text-lg font-semibold text-black shadow-lg shadow-yellow-500/20"
            >

              Create Event

            </button>

          </form>

        </div>

      </div>

    </AdminLayout>

  )
}

export default CreateEvent