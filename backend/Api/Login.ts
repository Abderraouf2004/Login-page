
import { Request , Response} from 'express';
import { prisma } from "..";





export const Login =async(req:Request,res:Response)=>{

    const {name,email,password}=req.body;

    const users= await prisma.user.findFirst({where:{email,password}});

    if(!users){
        const user =await prisma.user.create({data:{
            name:name,
            email:email,
            password:password
        },})
        res.json(user);
    }
   
console.log(req.body)
}