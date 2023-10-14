const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());
const PORT = 7000;
const API_KEY = "e914f3376c414b70861753b1906d2a13";

app.get("/api/news", async (req, res) => {
  try {
    const { topic } = req.query;
    if (!topic) {
      return res.status(400).json({ error: "Topic is required for search." });
    } else {
      const API_URL = `https://newsapi.org/v2/everything?q=${topic}&from=2023-09-14&sortBy=publishedAt&apiKey=${API_KEY}`;
      const response = await axios.get(API_URL);
      const news = response.data;
      res.json(news);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while fetching news." });
  }
});

app.listen(PORT, () => {
  console.log(`Server is Running on localhost: ${PORT}`);
});
