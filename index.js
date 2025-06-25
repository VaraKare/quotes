import express from 'express'
const app = express();
const PORT = process.env.PORT || 3000;

const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Your limitation—it's only your imagination. - Unknown",
    "Push yourself, because no one else is going to do it for you. - Unknown"
];

app.get('/', (req, res) => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    res.send(`
        <div style="font-family: sans-serif; text-align: center; margin-top: 50px;">
            <h1>Quote of the Moment</h1>
            <p style="font-size: 24px;"><i>"${randomQuote}"</i></p>
            <p><small>Version: 1.0</small></p>
        </div>
    `);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
