// src/app.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");

// Middleware
app.use(express.json());
app.use(cors());
// Routes
app.use('/', require('./routes/expenses'));
app.use('/', require('./routes/users'));

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
