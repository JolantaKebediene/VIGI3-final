const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

const User = require("./models/user.model.js");

// Middlewares
app.use(express.json());
app.use(cors());

// Connecting to MongoDB
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    console.log("Connected to mongoDB");

    // Starting server
    app.listen(PORT, () => console.log(`Server is running on port:${PORT}`));
  })
  .catch((err) => console.log(err));

// Routes
app.get("/", (req, res) => res.send("API is running...."));
// GET
// -- get all users
app.get("/api/users", (req, res) => {
  User.find({}).then((data) => res.json(data));
});

// POST
// -- add new movie
app.post("/api/users", (req, res) => {
  const userData = req.body; // user data from frontend

  // saving new user to User model
  const user = new User(userData);

  user
    .save()
    .then((result) => res.send({ message: "User saved" }))
    .catch((err) => res.send({ message: "User not saved, try again latter" }));
});

// PUT
// -- update user
app.put("/api/users/:id", (req, res) => {
  const userId = req.params.id;
  const updatedUser = req.body;

  User.findByIdAndUpdate(userId, updatedUser)
    .then((result) => res.json({ message: "User updated" }))
    .catch((err) => res.json({ message: "User not updated, try again later" }));
});

// DELETE
// -- delete user
app.delete("/api/users/:id", (req, res) => {
  const userId = req.params.id;

  User.findByIdAndDelete(userId)
    .then((result) => res.json({ message: "User deleted" }))
    .catch((err) => res.send({ message: "User not deleted, try again later" }));
});
