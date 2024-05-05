import express from 'express';
import bodyParser from 'body-parser';
import { OpenAI } from 'openai';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

// Define your API key directly in the code
const apiKey = 'sk-proj-JeAhuojs8U1wZ4uPgAEQT3BlbkFJjPCu2oBt3HEdjD6kIWBc';

const openai = new OpenAI({
    apiKey: apiKey,
});

app.post('/generate-script', async (req, res) => {
    // const { title, synopsis, genre } = req.body;

    // // Formulate prompt based on user inputs
    // const prompt = `Title: ${title}\nSynopsis: ${synopsis}\nGenre: ${genre}\n\nGenerate a detailed script based on the above details:`;

    try {
        // Call the OpenAI API to generate script
        const chatCompletion = await openai.chat.completions.create({
            messages: [{ role: "user", content: prompt }],
            model: "gpt-3.5-turbo",
        });

        const script = chatCompletion.data.choices[0].message.content;

        console.log('Script generated:', script);
        res.json({ script });
    } catch (error) {
        console.error('Error calling OpenAI API:', error);
        res.status(500).json({ error: 'An error occurred while generating the script' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
    res.send('Welcome to my server!');
});
