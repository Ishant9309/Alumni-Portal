import { useEffect, useState } from "react"

import {
  doc,
  getDoc,
  updateDoc
} from "firebase/firestore"

import { useNavigate, useParams } from "react-router-dom"

import db from "../firebase/firestore"

import AdminLayout from "../layouts/AdminLayout"

function EditEvent() {

  const { id } = useParams()

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    date: "",
    time: ""
  })

  const fetchEvent = async () => {

    try {

      const docRef = doc(db, "events", id)

      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {

        setFormData(docSnap.data())

      }

    } catch (error) {

      console.log(error)

    }
  }

  useEffect(() => {

    fetchEvent()

  }, [])

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })

  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    try {

      const docRef = doc(db, "events", id)

      await updateDoc(docRef, {
        ...formData
      })

      alert("Event Updated 🚀")

      navigate("/manage-events")

    } catch (error) {

      console.log(error)

    }
  }

  return (
    <AdminLayout>

      <div className="max-w-4xl mx-auto px-6 py-10">

        <div className="bg-white/10 border border-white/10 rounded-3xl p-8">

          <h1 className="text-5xl font-bold mb-10">
            Edit Event
          </h1>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-6"
          >

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Event Title"
              className="bg-white/10 border border-white/10 rounded-2xl px-5 py-4 outline-none"
            />

            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Location"
              className="bg-white/10 border border-white/10 rounded-2xl px-5 py-4 outline-none"
            />

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="bg-white/10 border border-white/10 rounded-2xl px-5 py-4 outline-none"
            />

            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="bg-white/10 border border-white/10 rounded-2xl px-5 py-4 outline-none"
            />

            <textarea
              name="description"
              rows="5"
              value={formData.description}
              onChange={handleChange}
              placeholder="Description"
              className="bg-white/10 border border-white/10 rounded-2xl px-5 py-4 outline-none"
            />

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 py-4 rounded-2xl text-lg font-semibold"
            >
              Update Event
            </button>

          </form>

        </div>

      </div>

    </AdminLayout>
  )
}

export default EditEvent