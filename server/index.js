import express from "express";
import cors from "cors";
import Signup from "./controllers/Signup.js";
import Login from "./controllers/Login.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import {createStudent, getAllStudents, getStudentById} from "./controllers/student.js";
import { postComplaint } from "./controllers/complaint.js";  

const app = express()
app.use(express.json())
app.use(cors())

const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGODB_URL)

    if (conn) {
        console.log('MongoDB Connected');
    }
    else {
        console.log('Failure in connection')
    }
}
connectDB();

app.get('/health', (req, res) => {
    res.json({
        success: true,
        message: "server is working successfully!!!"
    })
})

app.post("/login",Login)
app.post("/signup",Signup)

app.post("/createstudent",createStudent)
app.get("/getAllStudents",getAllStudents)
app.get("/getStudentById",getStudentById)

app.post('/complaint', postComplaint)
app.get('/complaintsbyid/:id', getComplaintById)



const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
