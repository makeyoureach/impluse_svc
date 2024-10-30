const express = require('express');
const userRoutes = require('../Router/userRouter');
const { closePool } = require('../SQL/database');
const serverless = require('serverless-http');
const cors = require('cors');

const app = express();
const PORT = 3002;

app.use(express.json()); // Parse JSON bodies

// Enable CORS for all routes
app.use(cors({
    origin: 'https://impulsecoachinginstitute.co.in', // Allow only this origin to access the API
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allowed HTTP methods
    credentials: true, // Allow cookies to be sent with requests
}));


app.use('/.netlify/functions/api', userRoutes);
module.exports.handler = serverless(app);

// app.use('/api', userRoutes); // Mount the user routes at `/api`


// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });

// Handle graceful shutdown
process.on('SIGINT', async () => {
    await closePool();
    console.log('Server and database connection closed.');
    process.exit(0);
});