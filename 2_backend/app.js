const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

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
