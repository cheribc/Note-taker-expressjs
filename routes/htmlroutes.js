const path = require('path');

const router = require('express').Router();

// Send notes to note.html file
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

// Route to homepage with default for path issues
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

module.exports = router;