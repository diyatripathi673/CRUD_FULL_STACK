import express from "express"; // Import express
import mongoose from "mongoose"; // Import mongoose for MongoDB
import bodyParser from 'body-parser'; // Import body-parser
import dotenv from 'dotenv'; // Import dotenv for environment variables
import cors from 'cors'; // Import cors for cross-origin requests
import route from "./routes/userRoute.js"; // Import user routes

dotenv.config();  // Load environment variables from .env file

const app = express(); // Create an express app

// Use middlewares
app.use(bodyParser.json()); // To parse JSON requests
app.use(cors()); // To enable Cross-Origin Resource Sharing

const PORT = process.env.PORT || 7000; // Port for the server
const URL = process.env.MONGO_URL; // MongoDB URL from .env

// Connect to MongoDB
mongoose.connect(URL)
  .then(() => {
    console.log("DB connected successfully"); // Log DB connection success
    app.listen(PORT, () => { 
      console.log(`Server is running on Port ${PORT}`); // Log server startup
    });
  })
  .catch((error) => {  // Catch DB connection errors
    console.log("Error connecting to DB:", error);  // Log connection error
  });

// Define API route
app.use("/api", route); // Use the userRoute file for /api paths
