const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());


const dbURI = "mongodb+srv://Admin:<admin>@admin.qe1vxlq.mongodb.net/?appName=admin";
mongoose.connect(dbURI)
  .then(() => console.log('MongoDB Connected Successfully!'))
  .catch((err) => console.error('Connection Error:', err));


const Product = mongoose.model('Product', {
  name: String,
  price: Number,
  category: String
});

app.get('/', (req, res) => {
  res.send('QUZZY & Anopia Agro Backend is now connected to MongoDB!');
});

app.post('/add', async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).send('Product Saved Successfully!');
  } catch (e) {
    res.status(400).send(e.message);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
