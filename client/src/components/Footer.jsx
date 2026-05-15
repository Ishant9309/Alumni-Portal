import { Link } from "react-router-dom"

import logo from "../assets/logo.jpg"

function Footer() {

  return (

    <footer className="bg-black border-t border-yellow-500/10 mt-20">

      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Logo Section */}
          <div>

            <div className="flex items-center gap-4">

              <img
                src={logo}
                alt="Logo"
                className="w-14 h-14 rounded-full border-2 border-yellow-400 object-cover"
              />

              <div>

                <h2 className="text-2xl font-bold text-yellow-400">
                  MPVPI Nanded
                </h2>

                <p className="text-gray-400 text-sm">
                  Alumni Portal
                </p>

              </div>

            </div>

            <p className="text-gray-400 mt-6 leading-7">

              Connecting students and alumni through
              opportunities, networking, mentorship,
              and college events.

            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h2 className="text-2xl font-bold text-yellow-400 mb-6">
              Quick Links
            </h2>

            <div className="flex flex-col gap-4 text-gray-300">

              <Link
                to="/"
                className="hover:text-yellow-400 transition duration-300"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="hover:text-yellow-400 transition duration-300"
              >
                About
              </Link>

              <Link
                to="/alumni"
                className="hover:text-yellow-400 transition duration-300"
              >
                Alumni
              </Link>

              <Link
                to="/events"
                className="hover:text-yellow-400 transition duration-300"
              >
                Events
              </Link>

            </div>

          </div>

          {/* Contact Us */}
          <div>

            <h2 className="text-2xl font-bold text-yellow-400 mb-6">
              Contact Us
            </h2>

            <div className="space-y-4 text-gray-300">

              <a
                href="mailto:info@mpgin.edu.in"
                className="block hover:text-yellow-400 transition duration-300 break-all"
              >

                📧 info@mpgin.edu.in

              </a>

              <a
                href="tel:+912462269900"
                className="block hover:text-yellow-400 transition duration-300"
              >

                📞 +91 2462 269900

              </a>

              <a
                href="tel:+917507848160"
                className="block hover:text-yellow-400 transition duration-300"
              >

                📱 +91 7507848160

              </a>

            </div>

          </div>

          {/* Address */}
          <div>

            <h2 className="text-2xl font-bold text-yellow-400 mb-6">
              Address
            </h2>

            <p className="text-gray-300 leading-8">

              Jijau Nagar,
              Vishnupuri,
              Khupsarwadi,
              Nanded - 431606

            </p>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">

          <p className="text-gray-500 text-center md:text-left">

            © 2026 MPVPI Nanded Alumni Portal.
            All Rights Reserved.

          </p>

          <div className="text-center md:text-right">

            <p className="text-yellow-400 font-semibold">

              Developed & Managed By Ishant Teli

            </p>

            <a
              href="tel:+919309075838"
              className="text-gray-400 mt-2 block hover:text-yellow-400 transition duration-300"
            >

              📞 +91 9309075838

            </a>

          </div>

        </div>

      </div>

    </footer>

  )
}

export default Footer