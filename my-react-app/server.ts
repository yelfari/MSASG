import express from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 5000;

// Serve static files from the React build directory
app.use(express.static(path.join(__dirname, 'build')));

// Serve the index.html file for all routes (for React Router)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
