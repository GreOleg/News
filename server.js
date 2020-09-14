const express = require('express');

const connectDb = require('./config/db');
const auth = require('./src/routes/auth');

const app = express();

app.use(express.json({ extended: false }));
app.use("/api/auth", auth);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});

connectDb();