const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('QUZZY & Anopia Agro Backend is Live!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
const express = require('express');
const cors = require('cors'); // Ei line-ta khub dorkar
const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); // Shob jayga theke access allow korbe

app.get('/', (req, res) => {
  res.send('QUZZY & Anopia Agro Backend is Live!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
