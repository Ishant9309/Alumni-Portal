import { useEffect, useState } from "react"

import { collection, getDocs } from "firebase/firestore"

import { Link } from "react-router-dom"

import db from "../firebase/firestore"

import MainLayout from "../layouts/MainLayout"

function Alumni() {

  const [alumni, setAlumni] = useState([])

  const [search, setSearch] = useState("")

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

    } catch (error) {

      console.log(error)

    }

  }

  useEffect(() => {

    fetchAlumni()

  }, [])

  const filteredAlumni = alumni.filter((item) =>

    item.name?.toLowerCase().includes(search.toLowerCase()) ||

    item.company?.toLowerCase().includes(search.toLowerCase()) ||

    item.branch?.toLowerCase().includes(search.toLowerCase())

  )

  return (

    <MainLayout>

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Heading */}
        <div className="text-center mb-14">

          <div className="inline-block px-6 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-300 mb-6">

            MPVPI Alumni Directory

          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white">

            Explore Our

            <span className="block text-yellow-400 mt-3">
              Alumni Network
            </span>

          </h1>

          <p className="text-gray-400 text-lg mt-6 max-w-3xl mx-auto leading-8">

            Connect with alumni, discover professional journeys,
            and grow your network with the MPVPI community.

          </p>

        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-14">

          <input
            type="text"
            placeholder="Search by name, company, or branch..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white/10 border border-yellow-500/10 backdrop-blur-xl rounded-2xl px-6 py-5 text-white outline-none focus:border-yellow-400 transition"
          />

        </div>

        {/* Alumni Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredAlumni.map((item) => (

            <div
              key={item.id}
              className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-3xl overflow-hidden hover:-translate-y-2 hover:border-yellow-400/30 transition duration-300"
            >

              {/* Image */}
              <div className="relative">

                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-full h-72 object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

              </div>

              {/* Content */}
              <div className="p-6">

                <h2 className="text-2xl font-bold text-white">
                  {item.name}
                </h2>

                <p className="text-yellow-400 mt-2">
                  {item.role || "Alumni Member"}
                </p>

                <div className="mt-5 space-y-3 text-gray-300">

                  <p>
                    🎓 {item.branch}
                  </p>

                  <p>
                    🏢 {item.company || "Not Added"}
                  </p>

                  <p>
                    📍 {item.location || "Nanded"}
                  </p>

                  <p>
                    📅 {item.passingYear}
                  </p>

                </div>

                {/* Skills */}
                {item.skills && (

                  <div className="flex flex-wrap gap-3 mt-6">

                    {item.skills
                      .split(",")
                      .slice(0, 3)
                      .map((skill, index) => (

                        <span
                          key={index}
                          className="bg-yellow-500/10 border border-yellow-500/20 text-yellow-300 px-4 py-2 rounded-xl text-sm"
                        >
                          {skill}
                        </span>

                      ))}

                  </div>

                )}

                {/* Button */}
                <Link
                  to={`/alumni/${item.id}`}
                  className="block text-center bg-yellow-500 hover:bg-yellow-600 transition mt-8 py-4 rounded-2xl text-black font-semibold"
                >

                  View Profile

                </Link>

              </div>

            </div>

          ))}

        </div>

        {/* Empty State */}
        {filteredAlumni.length === 0 && (

          <div className="text-center mt-20">

            <h2 className="text-3xl font-bold text-white">
              No Alumni Found
            </h2>

            <p className="text-gray-400 mt-4">
              Try searching with another keyword.
            </p>

          </div>

        )}

      </div>

    </MainLayout>

  )
}

export default Alumni