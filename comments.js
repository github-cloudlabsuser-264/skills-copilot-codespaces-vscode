// Create web server using Express.js
const express = require('express');
const app = express();
const port = 3000;
// Use static files
app.use(express.static('public'));
// Create route for comments
app.get('/comments', (req, res) => {
    res.send('Comments');
});
// Start server
app.listen(port, () => console.log(`Server is running on port ${port}!`));