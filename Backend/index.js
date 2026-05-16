import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import UserRoute from './routes/user.route.js';
import RecipeRoute from './routes/recipie.route.js';

import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 2000;

// Middleware
app.use(express.json());
app.use(cors());
// Request Logger
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Root Route
app.get('/', (req, res) => {
    res.status(200).send('🚀 Server Working Perfectly');
});

// API Routes
app.use('/api/user', UserRoute);
app.use('/api/food', RecipeRoute);



// Database Connection Function
const connectDB = async () => {

    try {

        await mongoose.connect(process.env.MONGO_URI)

        console.log('✅ MongoDB Connected')

    } catch (error) {

        console.log('❌ MongoDB Connection Error')

        console.log(error.message)

        process.exit(1)

    }
}

export default connectDB

// Start Server
const startServer = async () => {
    try {

        // Start Express Server First
        app.listen(PORT, '0.0.0.0', () => {
            console.log(`🚀 Server running on http://localhost:${PORT}`);
        });

        // Then Connect Database
        await connectDB();

    } catch (error) {
        console.log('❌ Server Error:', error.message);
    }
};

startServer();