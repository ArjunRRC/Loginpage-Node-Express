import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function Dashboard() {
  const navigate = useNavigate()
  const [name, setName] = useState("")

  useEffect(() => {
    const user = localStorage.getItem("cafeUser")
    if (!user) {
      navigate("/")
    } else {
      setName(user)
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("cafeUser")
    navigate("/")
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-linear-to-br from-[#3b2418] via-[#6f4e37] to-[#a9744f] p-6">
      <div className="w-full max-w-md bg-[#fffaf3] rounded-2xl px-8 py-12 text-center shadow-2xl shadow-black/40">
        <h1 className="mb-2 text-[#4a2c17] font-serif text-2xl">
          Welcome to Arjun's Cafe
        </h1>
        <p className="text-[#8a6a52] mb-7 text-sm">
          Hello {name}, Glad to see you here!
        </p>
        <button
          onClick={handleLogout}
          className="px-7 py-2.5 bg-[#6f4e37] text-white rounded-lg text-sm font-semibold"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Dashboard;
