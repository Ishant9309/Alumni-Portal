import { useEffect, useState } from "react"

import {
  collection,
  getDocs,
  deleteDoc,
  doc
} from "firebase/firestore"

import auth from "../firebase/auth"

import db from "../firebase/firestore"

import MainLayout from "../layouts/MainLayout"

function Events() {

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

    <MainLayout>

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Header */}
        <div className="text-center mb-16">

          <div className="inline-block px-6 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-300 mb-6">

            MPVPI Events & Activities

          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white">

            Upcoming

            <span className="block text-yellow-400 mt-3">
              College Events
            </span>

          </h1>

          <p className="text-gray-400 text-lg leading-8 mt-8 max-w-3xl mx-auto">

            Participate in alumni meetups, workshops,
            technical events, seminars, and networking activities
            happening at MPVPI Nanded.

          </p>

        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {events.map((event) => (

            <div
              key={event.id}
              className="bg-white/10 border border-white/10 backdrop-blur-2xl rounded-[35px] overflow-hidden hover:-translate-y-2 hover:border-yellow-400/30 transition duration-300 shadow-xl shadow-black/20"
            >

              {/* Image */}
              <div className="relative overflow-hidden">

                <img
                  src={event.imageUrl}
                  alt={event.title}
                  className="w-full h-72 object-cover hover:scale-105 transition duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Date Badge */}
                <div className="absolute top-5 left-5 bg-yellow-500 text-black px-5 py-2 rounded-2xl font-semibold shadow-lg">

                  📅 {event.date}

                </div>

              </div>

              {/* Content */}
              <div className="p-8">

                <div className="flex items-center gap-3 text-yellow-400 mb-4">

                  <span className="text-lg">
                    ⏰
                  </span>

                  <p className="font-medium">
                    {event.time}
                  </p>

                </div>

                <h2 className="text-3xl font-bold text-white leading-tight">

                  {event.title}

                </h2>

                <div className="flex items-center gap-3 text-gray-400 mt-5">

                  <span className="text-lg">
                    📍
                  </span>

                  <p>
                    {event.location}
                  </p>

                </div>

                <p className="text-gray-300 leading-8 mt-6">

                  {event.description}

                </p>

                {/* Bottom */}
                <div className="flex flex-wrap items-center gap-4 mt-8">


                  {auth.currentUser?.email === "admin@alumni.com" && (

                    <button
                      onClick={() => handleDelete(event.id)}
                      className="bg-red-500 hover:bg-red-600 transition px-6 py-3 rounded-2xl text-white font-semibold"
                    >

                      Delete Event

                    </button>

                  )}

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* Empty State */}
        {events.length === 0 && (

          <div className="text-center py-20">

            <h2 className="text-4xl font-bold text-white">
              No Events Yet
            </h2>

            <p className="text-gray-400 mt-5 text-lg">

              Upcoming events will appear here.

            </p>

          </div>

        )}

      </div>

    </MainLayout>

  )
}

export default Events