// server.js
import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const API_KEY = "AIzaSyBOBQrLqlWjN2Q30FJ3NVt-ZtjgRWvIgk8";

app.post("/ask", async (req, res) => {
  const { prompt } = req.body;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta2/models/text-bison-001:generateMessage?key=${API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: { text: prompt }, temperature: 0.7 }),
      }
    );
    const data = await response.json();
    const reply = data?.candidates?.[0]?.content || "⚠️ No response from Gemini!";
    res.json({ reply });
  } catch (err) {
    res.json({ reply: "⚠️ Error connecting to Gemini API" });
  }
});

app.listen(5500, () => console.log("Server running on http://localhost:5500"));
