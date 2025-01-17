const Note = require("../models/note");

const fetchNotes = async (req, res) => {
  try {
    // Find the notes
    const notes = await Note.find({ user: req.user._id });

    // Respond with them
    res.json({ notes });
  } catch (err) {
    res.status(500).json({ error: "An error occurred while fetching notes", message: err.message });
  }
};

const fetchNote = async (req, res) => {
  try {
    // Get id off the url
    const noteId = req.params.id;

    // Find the note using that id
    const note = await Note.findById({ _id: noteId, user: req.user._id });

    if (!note) {
      return res.status(404).json({ error: "Note not found" });
    }

    // Respond with the note
    res.json({ note });
  } catch (err) {
    res.status(500).json({ error: "An error occurred while fetching the note", message: err.message });
  }
};

const createNote = async (req, res) => {
  try {
    // Get the sent in data off request body
    const { title, body } = req.body;

    // Create a note with it
    const note = await Note.create({
      title,
      body,
      user: req.user._id,
    });

    // Respond with the new note
    res.json({ note });
  } catch (err) {
    res.status(500).json({ error: "An error occurred while creating the note", message: err.message });
  }
};

const updateNote = async (req, res) => {
  try {
    // Get the id off the url
    const noteId = req.params.id;

    // Get the data off the req body
    const { title, body } = req.body;

    // Find and update the record
    const updatedNote = await Note.findOneAndUpdate({ _id: noteId, user: req.user._id }, {
      title,
      body,
    }, { new: true });

    if (!updatedNote) {
      return res.status(404).json({ error: "Note not found or not authorized to update" });
    }

    // Respond with the updated note
    res.json({ note: updatedNote });
  } catch (err) {
    res.status(500).json({ error: "An error occurred while updating the note", message: err.message });
  }
};

const deleteNote = async (req, res) => {
  try {
    // get id off url
    const noteId = req.params.id;

    // Delete the record
    const result = await Note.deleteOne({ _id: noteId, user: req.user._id });

    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "Note not found or not authorized to delete" });
    }

    // Respond
    res.json({ success: "Record deleted" });
  } catch (err) {
    res.status(500).json({ error: "An error occurred while deleting the note", message: err.message });
  }
};

module.exports = {
  fetchNotes,
  fetchNote,
  createNote,
  updateNote,
  deleteNote,
};
