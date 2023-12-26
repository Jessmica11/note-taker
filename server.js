// Require directories/libraries
const express = require('express');
const path = require('path');
// uuid function for creating new id # for each note
const { v4: uuidv4 } = require('uuid');
const app = express();

// Start program on PORT location
// allow choice if 3001 taken
const PORT = process.env.PORT || 3001;

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
    // Get existing notes from the db.json file
    const notes = JSON.parse(fs.readFileSync(path.join(__dirname, 'db', 'db.json'), 'utf8'));
    
    // Will need to add new notes to existing location as PUSH
    // Add the new note to the array
    notes.push(newNote);
    // Write the updated info back to the db.json file
    fs.writeFileSync(path.join(__dirname, 'db', 'db.json'), JSON.stringify(notes));
    res.json(newNote); // Return the new note to the client
});

// Redirect all other routes to the homepage
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start program
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});