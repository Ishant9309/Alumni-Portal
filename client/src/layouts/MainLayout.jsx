import Footer from "../components/Footer"

import Navbar from "../components/Navbar"

function MainLayout({ children }) {

  return (
    <div className="bg-black min-h-screen text-white">

      <Navbar />

      <div className="pt-24">
        {children}
    
      </div>

      <Footer />

    </div>
  )
}

export default MainLayout
