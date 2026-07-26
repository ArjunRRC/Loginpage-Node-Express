const express = require("express")
const cors = require("cors")

const app = express()
const PORT = 5000

app.use(cors())
app.use(express.json())

const myEmail = "sriarjun003.sa@gmail.com"
const myPassword = "Abc@123"

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const passwordPattern = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,}$/

app.post("/api/login", (req, res) => {
  const email = req.body.email
  const password = req.body.password

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
})

app.listen(PORT, () => {
  console.log("Server started on port " + PORT)
})
