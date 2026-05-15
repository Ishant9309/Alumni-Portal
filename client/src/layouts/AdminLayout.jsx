import AdminNavbar from "../components/AdminNavbar"

function AdminLayout({ children }) {

  return (
    <div className="bg-black min-h-screen text-white">

      <AdminNavbar />

      <div className="pt-24">
        {children}
      </div>

    </div>
  )
}

export default AdminLayout