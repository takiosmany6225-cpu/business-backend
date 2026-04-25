const express = require('express');
const cors = require('cors'); 
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Main Route
app.get('/', (req, res) => {
  res.send('QUZZY & Anopia Agro Backend is Live!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
