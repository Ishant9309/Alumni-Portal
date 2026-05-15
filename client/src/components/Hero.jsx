import { Link } from "react-router-dom"

import campusImage from "../assets/campus.png"

function Hero() {

  return (

    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">

      {/* Background Image */}
      <img
        src={campusImage}
        alt="Campus"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Yellow Glow Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl" />

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl">

        <div className="inline-block px-6 py-2 rounded-full bg-yellow-500/20 border border-yellow-500/20 text-yellow-300 mb-8 backdrop-blur-xl">

          MPVPI Nanded Alumni Network

        </div>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">

          Connect With Your

          <span className="block text-yellow-400 mt-3">
            Alumni Network
          </span>

        </h1>

        <p className="text-gray-300 text-lg md:text-xl leading-8 mt-8 max-w-3xl mx-auto">

          Build meaningful alumni connections, explore opportunities,
          participate in college events, and grow your professional network
          with the MPVPI Nanded Alumni Portal.

        </p>

        {/* Buttons */}
        <div className="flex items-center justify-center gap-6 mt-12 flex-wrap">

          <Link
            to="/alumni"
            className="bg-yellow-500 hover:bg-yellow-600 transition px-8 py-4 rounded-2xl text-lg font-semibold text-black shadow-lg shadow-yellow-500/20"
          >

            Explore Alumni

          </Link>

          <Link
            to="/events"
            className="border border-yellow-400/30 hover:bg-yellow-500/10 transition px-8 py-4 rounded-2xl text-lg font-semibold text-white backdrop-blur-xl"
          >

            Upcoming Events

          </Link>

        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">

          <div className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:-translate-y-2 transition duration-300">

            <h2 className="text-4xl font-bold text-yellow-400">
              1000+
            </h2>

            <p className="text-gray-300 mt-3">
              Alumni Connections
            </p>

          </div>

          <div className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:-translate-y-2 transition duration-300">

            <h2 className="text-4xl font-bold text-yellow-400">
              50+
            </h2>

            <p className="text-gray-300 mt-3">
              Events & Workshops
            </p>

          </div>

          <div className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:-translate-y-2 transition duration-300">

            <h2 className="text-4xl font-bold text-yellow-400">
              Careers
            </h2>

            <p className="text-gray-300 mt-3">
              Networking & Opportunities
            </p>

          </div>

        </div>

      </div>

    </section>

  )
}

export default Hero