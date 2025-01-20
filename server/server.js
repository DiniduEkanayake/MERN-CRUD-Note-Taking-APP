// Load environment variables
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// Import dependencies
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectToDb = require("./config/connectToDB");
const notesController = require("./controllers/notesController");
const usersController = require("./controllers/usersController");
const requireAuth = require("./middleware/requireAuth");

// Create an express app
const app = express();

// Configure express app
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000", // Replace with your local frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Connect to database
connectToDb();

// Define routes
app.post("/signup", usersController.signup);
app.post("/login", usersController.login);
app.get("/logout", usersController.logout);
app.get("/check-auth", requireAuth, usersController.checkAuth);

app.get("/notes", requireAuth, notesController.fetchNotes);
app.get("/notes/:id", requireAuth, notesController.fetchNote);
app.post("/notes", requireAuth, notesController.createNote);
app.put("/notes/:id", requireAuth, notesController.updateNote);
app.delete("/notes/:id", requireAuth, notesController.deleteNote);

// Start the server
const PORT = process.env.PORT || 5000; // Default to 5000 if PORT is not set
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});