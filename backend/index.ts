import  express  from 'express';
import { PrismaClient } from "@prisma/client";
import { Login } from './Api/Login';
import cors from 'cors';
export const prisma =new PrismaClient();

const app= express();

app.use(express.json());
app.use(cors());
app.post("/Login",Login);
app.listen(8000,()=>{
    console.log("succed")
})