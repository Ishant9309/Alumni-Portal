import { useEffect, useState } from "react"

import { doc, getDoc } from "firebase/firestore"

import { Link } from "react-router-dom"

import auth from "../firebase/auth"

import db from "../firebase/firestore"

import MainLayout from "../layouts/MainLayout"

function Dashboard() {

  const [userData, setUserData] = useState(null)

  const fetchUserData = async () => {

    try {

      const user = auth.currentUser

      if (!user) return

      const docRef = doc(db, "alumni", user.uid)

      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {

        setUserData(docSnap.data())

      }

    } catch (error) {

      console.log(error)

    }

  }

  useEffect(() => {

    fetchUserData()

  }, [])

  return (

    <MainLayout>

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Welcome Section */}
        <div className="relative overflow-hidden bg-white/10 border border-white/10 backdrop-blur-xl rounded-[40px] p-10">

          {/* Glow Effects */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            <div>

              <div className="inline-block px-5 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-300 mb-6">

                Welcome Back 👋

              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white">

                Hello,

                <span className="block text-yellow-400 mt-3">
                  {userData?.name || "Alumni"}
                </span>

              </h1>

              <p className="text-gray-300 text-lg leading-8 mt-8 max-w-2xl">

                Stay connected with your alumni network,
                explore upcoming events, update your profile,
                and build meaningful professional connections.

              </p>

              <div className="flex flex-wrap gap-5 mt-10">

                <Link
                  to="/profile"
                  className="bg-yellow-500 hover:bg-yellow-600 transition px-8 py-4 rounded-2xl text-black font-semibold"
                >

                  Edit Profile

                </Link>

                <Link
                  to="/events"
                  className="border border-yellow-400/20 hover:bg-yellow-500/10 transition px-8 py-4 rounded-2xl text-white font-semibold"
                >

                  View Events

                </Link>

              </div>

            </div>

            {/* Profile Card */}
            <div className="flex justify-center">

              <div className="bg-black/30 border border-white/10 backdrop-blur-xl rounded-3xl p-8 w-full max-w-md">

                <div className="flex flex-col items-center text-center">

                  <img
                    src={userData?.imageUrl}
                    alt={userData?.name}
                    className="w-36 h-36 rounded-full object-cover border-4 border-yellow-400"
                  />

                  <h2 className="text-3xl font-bold text-white mt-6">
                    {userData?.name}
                  </h2>

                  <p className="text-yellow-400 mt-2">
                    {userData?.role || "Alumni Member"}
                  </p>

                  <div className="mt-8 space-y-4 text-gray-300 w-full">

                    <div className="bg-white/5 rounded-2xl p-4">
                      🎓 {userData?.branch}
                    </div>

                    <div className="bg-white/5 rounded-2xl p-4">
                      🏢 {userData?.company || "Not Added"}
                    </div>

                    <div className="bg-white/5 rounded-2xl p-4">
                      📍 {userData?.location || "Nanded"}
                    </div>

                    <div className="bg-white/5 rounded-2xl p-4">
                      📅 {userData?.passingYear}
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>


        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">

          <Link
            to="/alumni"
            className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:-translate-y-2 hover:border-yellow-400/30 transition duration-300"
          >

            <div className="text-5xl mb-6">
              👨‍🎓
            </div>

            <h2 className="text-3xl font-bold text-white">
              Alumni
            </h2>

            <p className="text-gray-400 mt-4 leading-7">

              Explore and connect with alumni
              from different batches and companies.

            </p>

          </Link>

          <Link
            to="/events"
            className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:-translate-y-2 hover:border-yellow-400/30 transition duration-300"
          >

            <div className="text-5xl mb-6">
              🎉
            </div>

            <h2 className="text-3xl font-bold text-white">
              Events
            </h2>

            <p className="text-gray-400 mt-4 leading-7">

              Participate in alumni meetups,
              workshops, and college events.

            </p>

          </Link>

          <Link
            to="/about"
            className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:-translate-y-2 hover:border-yellow-400/30 transition duration-300"
          >

            <div className="text-5xl mb-6">
              🏫
            </div>

            <h2 className="text-3xl font-bold text-white">
              About College
            </h2>

            <p className="text-gray-400 mt-4 leading-7">

              Learn more about MPVPI Nanded,
              its mission, and alumni network.

            </p>

          </Link>

        </div>

      </div>

    </MainLayout>

  )
}

export default Dashboard