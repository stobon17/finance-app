// src/app.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
app.use('/', require('./routes/expenses'));

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
