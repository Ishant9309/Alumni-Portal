import MainLayout from "../layouts/MainLayout"

import collegeImage from "../assets/college.jpg"
import principalImage from "../assets/principal.jpg"

function About() {

  const highlights = [
    "AICTE Approved Institute",
    "MSBTE Affiliated",
    "ISO 9001:2008 Certified",
    "25-Acre Green Campus",
    "Digital Smart Classrooms",
    "Advanced Laboratories",
    "700+ Seating Auditorium",
    "18,000+ Books Library",
    "Wi-Fi Enabled Campus",
    "Separate Hostel Facilities",
    "Strong Placement Cell",
    "Industry Collaborations"
  ]

  const infrastructure = [
    "Advanced Laboratories",
    "Digital Smart Classrooms",
    "Central Library",
    "Incubation Center",
    "Language Lab",
    "Wi-Fi Campus",
    "Auditorium",
    "Hostel Facilities",
    "Sports Complex"
  ]

  const placementTeam = [
    {
      name: "Mr. Shahaji P. Deshmukh",
      designation: "Principal",
      role: "Chairman"
    },
    {
      name: "Ms. Manisha K. More",
      designation: "HoD, Computer Engineering",
      role: "Member"
    },
    {
      name: "Ms. Ashwini B. Mule",
      designation: "I/C HoD, E & TC Engineering",
      role: "Member"
    },
    {
      name: "Mr. Sanjay J. Deshmukh",
      designation: "I/C HoD, Electrical Engineering",
      role: "Member"
    },
    {
      name: "Ms. Pooja O. Goud",
      designation: "I/C HoD Civil Engineering",
      role: "Member"
    },
    {
      name: "Dr. Sandip S. Hambarde",
      designation: "HoD First Year",
      role: "Member"
    },
    {
      name: "Mr. Prakash D. Pophale",
      designation: "T & P Officer",
      role: "Member Secretary"
    }
  ]

  return (

    <MainLayout>

      <div className="bg-black text-white overflow-hidden">

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">

          <img
            src={collegeImage}
            alt="College"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/80" />

          <div className="absolute top-10 left-10 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl" />

          <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl" />

          <div className="relative z-10 text-center max-w-6xl">

            <div className="inline-block px-6 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-300 mb-8 backdrop-blur-xl">

              MPVPI Nanded

            </div>

            <h1 className="text-5xl md:text-8xl font-bold leading-tight">

              Vishwabharati

              <span className="block text-yellow-400 mt-4">
                Polytechnic Institute
              </span>

            </h1>

            <p className="text-gray-300 text-lg md:text-2xl leading-9 mt-10 max-w-5xl mx-auto">

              A premier institute committed to delivering
              value-based technical education and developing
              future-ready engineers, innovators, and leaders.

            </p>

          </div>

        </section>

        {/* About */}
        <section className="max-w-7xl mx-auto px-6 py-24">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <div>

              <div className="inline-block px-5 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-300 mb-6">

                About Institute

              </div>

              <h2 className="text-5xl md:text-6xl font-bold leading-tight">

                Technical Wings

                <span className="block text-yellow-400 mt-3">
                  To The Brain
                </span>

              </h2>

              <p className="text-gray-300 text-lg leading-9 mt-8">

                Vishwabharati Polytechnic Institute (MPVPI),
                established in 2009 under Matoshri Pratishthan
                Group of Institutions, is a vibrant and innovative
                center for technical education.

                The institute focuses on nurturing skilled
                professionals, entrepreneurs, technocrats,
                and socially responsible leaders.

              </p>

            </div>

            <div className="grid grid-cols-2 gap-6">

              <div className="bg-white/10 border border-white/10 rounded-[35px] p-8 backdrop-blur-2xl hover:-translate-y-2 transition duration-300">

                <h3 className="text-5xl font-bold text-yellow-400">
                  2009
                </h3>

                <p className="text-gray-400 mt-4">
                  Established
                </p>

              </div>

              <div className="bg-white/10 border border-white/10 rounded-[35px] p-8 backdrop-blur-2xl hover:-translate-y-2 transition duration-300">

                <h3 className="text-5xl font-bold text-yellow-400">
                  AICTE
                </h3>

                <p className="text-gray-400 mt-4">
                  Approved
                </p>

              </div>

              <div className="bg-white/10 border border-white/10 rounded-[35px] p-8 backdrop-blur-2xl hover:-translate-y-2 transition duration-300">

                <h3 className="text-5xl font-bold text-yellow-400">
                  25
                </h3>

                <p className="text-gray-400 mt-4">
                  Acre Campus
                </p>

              </div>

              <div className="bg-white/10 border border-white/10 rounded-[35px] p-8 backdrop-blur-2xl hover:-translate-y-2 transition duration-300">

                <h3 className="text-5xl font-bold text-yellow-400">
                  1000+
                </h3>

                <p className="text-gray-400 mt-4">
                  Alumni Network
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* Highlights */}
        <section className="max-w-7xl mx-auto px-6 py-24">

          <div className="text-center mb-16">

            <div className="inline-block px-5 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-300 mb-6">

              Institute Highlights

            </div>

            <h2 className="text-5xl md:text-6xl font-bold">

              Why Choose

              <span className="block text-yellow-400 mt-3">
                MPVPI
              </span>

            </h2>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {highlights.map((item, index) => (

              <div
                key={index}
                className="bg-white/10 border border-white/10 rounded-[35px] p-8 backdrop-blur-2xl hover:border-yellow-400/20 hover:-translate-y-2 transition duration-300"
              >

                <div className="w-16 h-16 rounded-2xl bg-yellow-500/10 flex items-center justify-center text-3xl mb-6">

                  ⭐

                </div>

                <h3 className="text-2xl font-semibold text-white leading-10">

                  {item}

                </h3>

              </div>

            ))}

          </div>

        </section>

        {/* Vision Mission */}
        <section className="max-w-7xl mx-auto px-6 py-24">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

            <div className="bg-white/10 border border-white/10 rounded-[40px] p-10 backdrop-blur-2xl">

              <div className="text-5xl mb-8">
                🎯
              </div>

              <h2 className="text-4xl font-bold text-yellow-400 mb-8">

                Vision

              </h2>

              <p className="text-gray-300 text-lg leading-9">

                “It will be a national level institute imparting
                value-based technical education catering to the need
                of stakeholders, with fully developed professionalism
                among the students with a feeling of patriotism.”

              </p>

            </div>

            <div className="bg-white/10 border border-white/10 rounded-[40px] p-10 backdrop-blur-2xl">

              <div className="text-5xl mb-8">
                🚀
              </div>

              <h2 className="text-4xl font-bold text-yellow-400 mb-8">

                Mission

              </h2>

              <p className="text-gray-300 text-lg leading-9">

                “To become a top-class role model institute imparting
                excellent need-based technical education with continuous
                strive for center of excellence in all programmes under
                conducive environment beneficial for the society of nation.”

              </p>

            </div>

          </div>

        </section>

        {/* Principal Section */}
        <section className="max-w-7xl mx-auto px-6 py-24">

          <div className="bg-white/10 border border-white/10 rounded-[40px] p-10 md:p-16 backdrop-blur-2xl">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

              <div>

                <img
                  src={principalImage}
                  alt="Principal"
                  className="w-full rounded-[35px] object-cover border border-yellow-500/20 shadow-2xl shadow-yellow-500/10"
                />

              </div>

              <div>

                <div className="inline-block px-5 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-300 mb-6">

                  Principal's Message

                </div>

                <h2 className="text-5xl font-bold leading-tight">

                  Prof. Shahaji

                  <span className="block text-yellow-400 mt-3">
                    Deshmukh
                  </span>

                </h2>

                <p className="text-gray-300 text-lg leading-9 mt-10">

                  At Vishwabharati Polytechnic Institute,
                  we are committed to shaping the future
                  of students through technical education
                  that blends knowledge, skill, and character.

                  We believe in holistic development —
                  academic excellence, leadership qualities,
                  innovation, and ethical values.

                </p>

              </div>

            </div>

          </div>

        </section>

        {/* Infrastructure */}
        <section className="max-w-7xl mx-auto px-6 py-24">

          <div className="text-center mb-16">

            <div className="inline-block px-5 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-300 mb-6">

              Infrastructure

            </div>

            <h2 className="text-5xl md:text-6xl font-bold">

              World Class

              <span className="block text-yellow-400 mt-3">
                Facilities
              </span>

            </h2>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {infrastructure.map((item, index) => (

              <div
                key={index}
                className="bg-white/10 border border-white/10 rounded-[35px] p-8 backdrop-blur-2xl hover:border-yellow-400/20 hover:-translate-y-2 transition duration-300"
              >

                <div className="text-5xl mb-6">
                  🏛️
                </div>

                <h3 className="text-2xl font-semibold text-white leading-10">

                  {item}

                </h3>

              </div>

            ))}

          </div>

        </section>

        {/* Placement Team */}
        <section className="max-w-7xl mx-auto px-6 py-24">

          <div className="text-center mb-16">

            <div className="inline-block px-5 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-300 mb-6">

              Placement Cell

            </div>

            <h2 className="text-5xl md:text-6xl font-bold">

              Training &

              <span className="block text-yellow-400 mt-3">
                Placement Team
              </span>

            </h2>

          </div>

          <div className="space-y-6">

            {placementTeam.map((member, index) => (

              <div
                key={index}
                className="bg-white/10 border border-white/10 rounded-[30px] p-8 backdrop-blur-2xl flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 hover:border-yellow-400/20 transition duration-300"
              >

                <div>

                  <h3 className="text-3xl font-bold text-white">

                    {member.name}

                  </h3>

                  <p className="text-yellow-400 text-lg mt-3">

                    {member.designation}

                  </p>

                </div>

                <div className="bg-yellow-500/10 border border-yellow-500/20 px-6 py-3 rounded-2xl text-yellow-300 font-semibold">

                  {member.role}

                </div>

              </div>

            ))}

          </div>

        </section>

        {/* Alumni CTA */}
        <section className="max-w-7xl mx-auto px-6 py-24">

          <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-300/5 border border-yellow-500/10 rounded-[45px] p-10 md:p-20 text-center backdrop-blur-2xl">

            <div className="inline-block px-5 py-2 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-300 mb-8">

              Alumni Network

            </div>

            <h2 className="text-5xl md:text-7xl font-bold leading-tight">

              Join The

              <span className="block text-yellow-400 mt-4">
                MPVPI Alumni Community
              </span>

            </h2>

            <p className="text-gray-300 text-lg md:text-xl leading-9 mt-10 max-w-4xl mx-auto">

              Connect with alumni, discover opportunities,
              participate in events, and grow your professional network.

            </p>

            <button className="mt-12 bg-yellow-500 hover:bg-yellow-600 transition duration-300 px-10 py-5 rounded-2xl text-black font-bold text-lg shadow-xl shadow-yellow-500/20">

              Explore Alumni Network

            </button>

          </div>

        </section>

      </div>

    </MainLayout>

  )
}

export default About