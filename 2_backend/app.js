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
// GET
// -- get all users
app.get("/api/users", (req, res) => {
  User.find({}).then((data) => res.json(data));
});

// POST
// -- add new movie
app.post("/api/users", (req, res) => {
  const name = req.body.name;
  const surname = req.body.surname;
  const email = req.body.email;
  const age = req.body.age;

  // saving new user to User model
  const user = new User({
    name,
    surname,
    email,
    age,
  });

  user.save();
});

// PUT
// -- update user
app.put("/api/users/:id", (req, res) => {
  const userId = req.params.id;
  const updatedUser = req.body;

  User.findByIdAndUpdate(userId, updatedUser);
});

// DELETE
// -- delete user
app.delete("/api/users/:id", (req, res) => {
  const userId = req.params.id;

  User.findByIdAndDelete(userId);
});
