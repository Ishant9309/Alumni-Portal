import { useEffect, useState } from "react"

import {
  collection,
  getDocs,
  deleteDoc,
  doc
} from "firebase/firestore"

import { Link } from "react-router-dom"

import db from "../firebase/firestore"

import AdminLayout from "../layouts/AdminLayout"

function ManageEvents() {

  const [events, setEvents] = useState([])

  const fetchEvents = async () => {

    try {

      const querySnapshot =
        await getDocs(collection(db, "events"))

      const eventsData = []

      querySnapshot.forEach((doc) => {

        eventsData.push({
          id: doc.id,
          ...doc.data()
        })

      })

      setEvents(eventsData)

    } catch (error) {

      console.log(error)

    }
  }

  useEffect(() => {

    fetchEvents()

  }, [])

  const handleDelete = async (id) => {

    try {

      await deleteDoc(doc(db, "events", id))

      setEvents(
        events.filter((item) => item.id !== id)
      )

      alert("Event Deleted 🚀")

    } catch (error) {

      console.log(error)

    }
  }

  return (

    <AdminLayout>

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-14">

          <div>

            <div className="inline-block px-6 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-300 mb-6">

              MPVPI Event Management

            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-white">

              Manage

              <span className="block text-yellow-400 mt-3">
                Events
              </span>

            </h1>

            <p className="text-gray-400 text-lg mt-6 leading-8 max-w-3xl">

              Manage alumni events, workshops,
              seminars, and networking activities
              from the admin dashboard.

            </p>

          </div>

          <Link
            to="/create-event"
            className="bg-yellow-500 hover:bg-yellow-600 transition duration-300 px-8 py-4 rounded-2xl text-black font-semibold text-lg shadow-lg shadow-yellow-500/20 text-center"
          >

            + Create Event

          </Link>

        </div>

        {/* Events */}
        <div className="space-y-10">

          {events.map((event) => (

            <div
              key={event.id}
              className="bg-white/10 border border-white/10 rounded-[40px] overflow-hidden backdrop-blur-2xl hover:border-yellow-400/20 hover:-translate-y-1 transition duration-300 shadow-xl shadow-black/20"
            >

              <div className="grid grid-cols-1 lg:grid-cols-3">

                {/* Image */}
                <div className="relative overflow-hidden">

                  <img
                    src={event.imageUrl}
                    alt={event.title}
                    className="w-full h-full object-cover lg:min-h-[350px] hover:scale-105 transition duration-500"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                </div>

                {/* Content */}
                <div className="lg:col-span-2 p-8 md:p-10">

                  <h2 className="text-4xl font-bold text-white leading-tight">

                    {event.title}

                  </h2>

                  <div className="flex flex-wrap gap-6 mt-6">

                    <p className="text-gray-400 text-lg">

                      📍 {event.location}

                    </p>

                    <p className="text-yellow-400 text-lg">

                      📅 {event.date}

                    </p>

                    <p className="text-yellow-300 text-lg">

                      ⏰ {event.time}

                    </p>

                  </div>

                  <p className="text-gray-300 mt-8 leading-8 text-lg">

                    {event.description}

                  </p>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-5 mt-10">

                    <Link
                      to={`/edit-event/${event.id}`}
                      className="bg-yellow-500 hover:bg-yellow-600 transition duration-300 px-8 py-4 rounded-2xl text-black font-semibold shadow-lg shadow-yellow-500/20"
                    >

                      Edit Event

                    </Link>

                    <button
                      onClick={() => handleDelete(event.id)}
                      className="bg-red-500 hover:bg-red-600 transition duration-300 px-8 py-4 rounded-2xl text-white font-semibold shadow-lg"
                    >

                      Delete Event

                    </button>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </AdminLayout>

  )
}

export default ManageEvents