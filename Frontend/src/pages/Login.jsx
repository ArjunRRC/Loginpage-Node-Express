import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const passwordPattern = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,}$/

function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    if (email === "") {
      setError("Email is required")
      return
    }

    if (!emailPattern.test(email)) {
      setError("Please enter a valid email")
      return
    }

    if (!passwordPattern.test(password)) {
      setError("Password must be at least 6 characters and include a letter and a number")
      return
    }

    const res = await axios.post("http://localhost:5000/api/login", {
      email: email,
      password: password,
    })

    if (res.data === "success") {
      localStorage.setItem("cafeUser", "Arjun")
      navigate("/dashboard")
    } else {
      setError(res.data)
    }
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-linear-to-br from-[#3b2418] via-[#6f4e37] to-[#a9744f] p-6">
      <div className="w-full max-w-sm bg-[#fffaf3] rounded-2xl px-8 py-10 shadow-2xl shadow-black/40">
        <h1 className="text-center text-2xl font-serif text-[#4a2c17]">
          Arjun's Cafe
        </h1>
        <p className="text-center text-[#8a6a52] mt-2 mb-7 text-sm">
          Sign in to continue
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1 text-sm font-semibold text-[#5c3a24]">
              Email
            </label>
            <input
              type="text"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 rounded-lg text-sm bg-white border border-[#d9c3ae]"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-sm font-semibold text-[#5c3a24]">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 rounded-lg text-sm bg-white border border-[#d9c3ae]"
            />
          </div>

          {error && <p className="text-red-600 text-sm mb-4">{error}</p>}

          <button
            type="submit"
            className="w-full py-3 bg-[#6f4e37] text-white rounded-lg text-sm font-semibold"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
