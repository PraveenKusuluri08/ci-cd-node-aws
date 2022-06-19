const express = require("express")
const path = require("path")
const app = express()
const bodyParser = require("body-parser")
const Users = require("./data.json")
const fs = require("fs")
const stream = require("stream")
app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"))
app.use(express.json())

app.get("/", (req, res) => {
  res.write("<a href='/form.html'>Form</a>")
})

app.post("/", (req, res) => {
  console.log(req.body)
  req.app.set("user", req.body)
  return res.redirect("/users")
})

app.get("/users", (req, res) => {
  console.log(req.app.get("user"))
  return res.send(req.app.get("user"))
})

app.get("/userslist", (req, res) => {
  res.send(Users)
})

app.get("/userlist/:id", (req, res) => {
  const { id } = req.params
  console.log(id)
  let user = Users.filter((user) => user["id"] == id)

  res.send(user)
})
app.listen(8080, () => {
  console.log("App is listining")
})
