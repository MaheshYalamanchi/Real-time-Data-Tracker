// server.js
const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/stock-crypto-tracker', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const DataSchema = new mongoose.Schema({
  symbol: String,
  price: Number,
  timestamp: { type: Date, default: Date.now },
});

const Data = mongoose.model('Data', DataSchema);

// Polling Function
const fetchData = async () => {
  const symbols = ['GOOG', 'BTC'];
  for (const symbol of symbols) {
    try {
      const response = await axios.get(`API_URL_FOR_${symbol}`);
      const data = new Data({
        symbol,
        price: response.data.price,
      });
      await data.save();
    } catch (error) {
      console.error(`Error fetching data for ${symbol}:`, error);
    }
  }
};

setInterval(fetchData, 5000);

// API Endpoint
app.get('/api/data/:symbol', async (req, res) => {
  const { symbol } = req.params;
  const data = await Data.find({ symbol }).sort({ timestamp: -1 }).limit(20);
  res.json(data);
});

app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
