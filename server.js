const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./Config/db'); 
const port = process.env.PORT || 3000;

connectDB(); 

const app = express();

// --- MIDDLEWARE ---
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// --- ROUTES ---
// 1. User Routes (Registration)
app.use('/api/users', require('./routes/userRoutes'));

// 2. Auth Routes (Login) <--- THIS IS LIKELY MISSING
app.use('/api/auth', require('./routes/auth')); 

// 3. Expense Routes
app.use('/api/expenses', require('./routes/expenses'));

app.listen(port, () => console.log(`Server started on port ${port}`));