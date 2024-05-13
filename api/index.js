import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.routes.js';
dotenv.config();

mongoose
    .connect("mongodb+srv://brandonmunongi:cIiYk3gOqiXxV7eD@mern.szwpi9k.mongodb.net/mern-auth?retryWrites=true&w=majority&appName=mern")
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.log(err);
    })

const app = express();

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});

app.use("/api/user", userRoutes)