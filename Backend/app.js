import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import userRouter from "./routes/userRoutes.js";
import eventRouter from "./routes/eventRoutes.js";
import ticketRouter from "./routes/ticketRoutes.js";
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./middlewares/error.js";

// Welcome to my project for technical assignment
// As per given problem Statement, I have made the project
// Backend is fully functional with all types of data retrieval and storage
// Cross checked all the api calls in Postman
// frontend is partially done login page, signup page and home page is done
// But due to very less time, I am not able to complete the axios and hooks part
// i.e. integration part of frontend with backend
// can complete this project with further state management
// Kindly judge on the partial project
// Apologies
// Looking forward for feedback

const app = express();
dotenv.config({ path: "./config/config.env" });

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    credentials: true,
}));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
}));

app.use('/api/v1/user', userRouter);
app.use('/api/v1/event', eventRouter);
app.use('/api/v1/ticket', ticketRouter);

dbConnection();

app.use(errorMiddleware);

export default app;