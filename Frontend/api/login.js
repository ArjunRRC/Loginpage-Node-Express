const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const passwordPattern = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,}$/

const myEmail = "sriarjun003.sa@gmail.com"
const myPassword = "Abc@123"

export default function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send("Method not allowed")
    return
  }

  const { email, password } = req.body || {}

  if (!email || !password) {
    res.send("Please enter email and password")
    return
  }

  if (!emailPattern.test(email)) {
    res.send("Please enter a valid email")
    return
  }

  if (!passwordPattern.test(password)) {
    res.send("Password must be at least 6 characters and include a letter and a number")
    return
  }

  if (email === myEmail && password === myPassword) {
    res.send("success")
  } else {
    res.send("Invalid email or password")
  }
}
