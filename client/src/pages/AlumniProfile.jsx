import { useEffect, useState } from "react"

import { useParams } from "react-router-dom"

import { doc, getDoc } from "firebase/firestore"

import db from "../firebase/firestore"

import MainLayout from "../layouts/MainLayout"

function AlumniProfile() {

  const { id } = useParams()

  const [alumni, setAlumni] = useState(null)

  const fetchAlumni = async () => {

    try {

      const docRef = doc(db, "alumni", id)

      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {

        setAlumni(docSnap.data())

      }

    } catch (error) {

      console.log(error)

    }
  }

  useEffect(() => {

    fetchAlumni()

  }, [])

  if (!alumni) {

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

      <div className="px-6 py-10">

        <div className="max-w-6xl mx-auto bg-white/10 border border-yellow-500/10 backdrop-blur-2xl rounded-[40px] overflow-hidden shadow-2xl shadow-yellow-500/5">

          {/* Banner */}
          <div className="relative h-72 bg-gradient-to-r from-yellow-500/30 via-yellow-400/10 to-black overflow-hidden">

            <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-500/20 rounded-full blur-3xl" />

            <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl" />

          </div>

          {/* Content */}
          <div className="relative px-6 md:px-10 pb-12">

            {/* Profile Image */}
            <div className="flex flex-col md:flex-row md:items-end gap-8 -mt-24 relative z-10">

              <img
                src={alumni.imageUrl}
                alt={alumni.name}
                className="w-44 h-44 rounded-full object-cover border-4 border-yellow-400 shadow-xl shadow-yellow-500/20 bg-black"
              />

              <div className="pb-4">

                <h1 className="text-4xl md:text-5xl font-bold text-white">

                  {alumni.name}

                </h1>

                <p className="text-yellow-400 text-lg mt-3">

                  {alumni.role || alumni.branch}

                </p>

                <p className="text-gray-400 mt-2">

                  📍 {alumni.location || "India"}

                </p>

              </div>

            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-14">

              {/* Left */}
              <div className="space-y-8">

                {/* Professional */}
                <div className="bg-black/30 border border-white/10 rounded-[30px] p-8">

                  <h2 className="text-2xl font-bold text-yellow-400 mb-6">

                    Professional Details

                  </h2>

                  <div className="space-y-4 text-gray-300 text-lg">

                    <p>
                      🏢 Company: {alumni.company || "Not Added"}
                    </p>

                    <p>
                      💼 Role: {alumni.role || "Not Added"}
                    </p>

                    <p>
                      💰 Package: ₹ {alumni.package || "Not Added"}
                    </p>

                    <p>
                      🎓 Branch: {alumni.branch}
                    </p>

                    <p>
                      📅 Passing Year: {alumni.passingYear}
                    </p>

                  </div>

                </div>

                {/* About */}
                <div className="bg-black/30 border border-white/10 rounded-[30px] p-8">

                  <h2 className="text-2xl font-bold text-yellow-400 mb-6">

                    About

                  </h2>

                  <p className="text-gray-300 leading-8 text-lg">

                    {alumni.bio || "No bio added yet."}

                  </p>

                </div>

              </div>

              {/* Right */}
              <div className="space-y-8">

                {/* Skills */}
                <div className="bg-black/30 border border-white/10 rounded-[30px] p-8">

                  <h2 className="text-2xl font-bold text-yellow-400 mb-6">

                    Skills

                  </h2>

                  <div className="flex flex-wrap gap-4">

                    {alumni.skills ? (

                      alumni.skills
                        .split(",")
                        .map((skill, index) => (

                          <span
                            key={index}
                            className="bg-yellow-500/10 border border-yellow-500/20 text-yellow-300 px-5 py-3 rounded-2xl"
                          >

                            {skill}

                          </span>

                        ))

                    ) : (

                      <p className="text-gray-400">
                        No skills added.
                      </p>

                    )}

                  </div>

                </div>

                {/* Social Links */}
                <div className="bg-black/30 border border-white/10 rounded-[30px] p-8">

                  <h2 className="text-2xl font-bold text-yellow-400 mb-6">

                    Social Links

                  </h2>

                  <div className="flex flex-col gap-5">

                    {alumni.linkedin && (

                      <a
                        href={alumni.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-white/5 hover:bg-yellow-500/10 border border-white/10 hover:border-yellow-400/20 transition rounded-2xl px-5 py-4 text-blue-400"
                      >

                        LinkedIn Profile

                      </a>

                    )}

                    {alumni.github && (

                      <a
                        href={alumni.github}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-white/5 hover:bg-yellow-500/10 border border-white/10 hover:border-yellow-400/20 transition rounded-2xl px-5 py-4 text-green-400"
                      >

                        GitHub Profile

                      </a>

                    )}

                  </div>

                </div>

                {/* Contact */}
                <div className="bg-black/30 border border-white/10 rounded-[30px] p-8">

                  <h2 className="text-2xl font-bold text-yellow-400 mb-6">

                    Contact

                  </h2>

                  <div className="space-y-4 text-gray-300 text-lg">

                    <p>
                      📧 {alumni.email}
                    </p>

                    <p>
                      📍 {alumni.location || "Not Added"}
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </MainLayout>

  )
}

export default AlumniProfile