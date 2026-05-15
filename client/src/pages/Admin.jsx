import { useEffect, useState } from "react"

import {
  collection,
  getDocs,
  deleteDoc,
  doc
} from "firebase/firestore"

import auth from "../firebase/auth"

import db from "../firebase/firestore"

import AdminLayout from "../layouts/AdminLayout"

function Admin() {

  const [alumni, setAlumni] = useState([])

  const [loading, setLoading] = useState(true)

  const fetchAlumni = async () => {

    try {

      const querySnapshot =
        await getDocs(collection(db, "alumni"))

      const alumniData = []

      querySnapshot.forEach((doc) => {

        alumniData.push({
          id: doc.id,
          ...doc.data()
        })

      })

      setAlumni(alumniData)

      setLoading(false)

    } catch (error) {

      console.log(error)

    }
  }

  useEffect(() => {

    fetchAlumni()

  }, [])

  const handleDelete = async (id) => {

    try {

      await deleteDoc(doc(db, "alumni", id))

      setAlumni(
        alumni.filter((item) => item.id !== id)
      )

      alert("Alumni Deleted 🚀")

    } catch (error) {

      console.log(error)

    }
  }

  if (
    !auth.currentUser ||
    auth.currentUser.email !== "admin@alumni.com"
  ) {

    return (

      <AdminLayout>

        <div className="flex items-center justify-center min-h-[60vh] text-4xl font-bold text-red-400">

          Access Denied 🚫

        </div>

      </AdminLayout>

    )
  }

  if (loading) {

    return (

      <AdminLayout>

        <div className="flex items-center justify-center min-h-[60vh] text-3xl text-white">

          Loading...

        </div>

      </AdminLayout>

    )
  }

  return (

    <AdminLayout>

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Header */}
        <div className="mb-14">

          <div className="inline-block px-6 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-300 mb-6">

            MPVPI Admin Panel

          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white">

            Admin

            <span className="block text-yellow-400 mt-3">
              Dashboard
            </span>

          </h1>

          <p className="text-gray-400 text-lg mt-6 leading-8 max-w-3xl">

            Manage alumni members, monitor registrations,
            and control alumni data from the admin dashboard.

          </p>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">

          <div className="bg-white/10 border border-yellow-500/10 rounded-[35px] p-8 backdrop-blur-2xl hover:-translate-y-2 transition duration-300 shadow-xl shadow-yellow-500/5">

            <h2 className="text-5xl font-bold text-yellow-400">

              {alumni.length}

            </h2>

            <p className="text-gray-400 mt-4 text-lg">

              Total Alumni

            </p>

          </div>

          <div className="bg-white/10 border border-yellow-500/10 rounded-[35px] p-8 backdrop-blur-2xl hover:-translate-y-2 transition duration-300 shadow-xl shadow-yellow-500/5">

            <h2 className="text-5xl font-bold text-yellow-400">

              Active

            </h2>

            <p className="text-gray-400 mt-4 text-lg">

              Alumni Network

            </p>

          </div>

          <div className="bg-white/10 border border-yellow-500/10 rounded-[35px] p-8 backdrop-blur-2xl hover:-translate-y-2 transition duration-300 shadow-xl shadow-yellow-500/5">

            <h2 className="text-5xl font-bold text-yellow-400">

              Admin

            </h2>

            <p className="text-gray-400 mt-4 text-lg">

              Control Panel

            </p>

          </div>

        </div>

        {/* Alumni List */}
        <div className="space-y-8">

          {alumni.map((item) => (

            <div
              key={item.id}
              className="bg-white/10 border border-white/10 rounded-[35px] p-6 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-8 backdrop-blur-2xl hover:border-yellow-400/20 hover:-translate-y-1 transition duration-300 shadow-xl shadow-black/20"
            >

              {/* Left */}
              <div className="flex flex-col md:flex-row items-center gap-6 w-full">

                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-28 h-28 rounded-full object-cover border-4 border-yellow-400 shadow-lg shadow-yellow-500/20"
                />

                <div className="text-center md:text-left">

                  <h2 className="text-3xl font-bold text-white">

                    {item.name}

                  </h2>

                  <p className="text-yellow-400 mt-2 text-lg">

                    {item.company || "Not Added"}

                  </p>

                  <p className="text-gray-400 mt-2">

                    🎓 {item.branch}

                  </p>

                  <p className="text-gray-500 mt-2 break-all">

                    📧 {item.email}

                  </p>

                </div>

              </div>

              {/* Delete Button */}
              <button
                onClick={() => handleDelete(item.id)}
                className="bg-red-500 hover:bg-red-600 transition duration-300 px-8 py-4 rounded-2xl text-white font-semibold shadow-lg"
              >

                Delete

              </button>

            </div>

          ))}

        </div>

      </div>

    </AdminLayout>

  )
}

export default Admin