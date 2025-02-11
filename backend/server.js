const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, '../public')));

// Handle requests to the homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.use((req, res, next) => {
    // Log the client's IP address
    console.log(`Client IP: ${req.ip}`);
    next(); // Continue processing the request
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log("hii");
});
