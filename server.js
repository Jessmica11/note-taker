// Require directories/libraries
const express = require('express');
const path = require('path');
// uuid function for creating new id # for each note
const { v4: uuidv4 } = require('uuid');
const app = express();

// Start program on PORT location
const PORT = 3001;

// GET request for HTTP
app.get('./notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'notes.html'));
})

app.get('*', (req,res) => {
    res.sendStatus(path.join(__dirname, 'public', 'index.html'));
})

// Create location for "API"
// POST req,res
app.post('/api/notes', (req, res) => {
    const newNote = req.body;
    newNote.id = uuid4();
})


// Will need to add new notes to existing location as PUSH



// Start program