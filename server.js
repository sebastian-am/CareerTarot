import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Accept', 'Origin']
}));

app.post('/api/generate-insight', async (req, res) => {
  try {
    const { career, arcana, prompt } = req.body;
    
    // Generate two different types of insights
    const personalPrompt = `Give a brief, mystical insight about someone who draws the ${career} (${arcana}) card. Write 2-3 sentences about their personal qualities and potential. Keep it concise and mystical.`;

    const careerPrompt = `Give a brief, practical career insight about someone who draws the ${career} (${arcana}) card. Write 2-3 sentences about their career path and potential. Keep it concise and practical.`;

    // Call the Python LLM service for both insights
    const [personalRes, careerRes] = await Promise.all([
      fetch('http://127.0.0.1:5001/llm/generate-insight', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: personalPrompt }),
      }),
      fetch('http://127.0.0.1:5001/llm/generate-insight', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: careerPrompt }),
      })
    ]);

    const [personalData, careerData] = await Promise.all([
      personalRes.json(),
      careerRes.json()
    ]);

    res.json({ 
      personalInsight: personalData.insight,
      careerInsight: careerData.insight
    });
  } catch (error) {
    res.status(500).json({ error: error.message || 'Error generating insight' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 