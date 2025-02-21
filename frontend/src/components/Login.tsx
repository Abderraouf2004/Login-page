import  { useState } from "react";
import { User } from "../types/User";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [user,setuser]=useState<User>({ name: "", email: "", password: "" });
    const navigate = useNavigate();
    
const login =(event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    axios.post('http://localhost:8000/Login',user).then((res) => {
        console.log("Connexion réussie ", res.data);
        navigate("/home", { state: { name: user.name } });
    }).catch(err=>console.log(err));
  
    
}
  return (
    <form className="login-form " onSubmit={login}>
        <h1>Login Page</h1>
        <div>
        <label htmlFor="name">Name</label>
        <input  type="text" placeholder="enter your name" onChange={(e)=>setuser({...user,name:e.target.value})} value={user.name || ""}/>
        </div>
        <div>
        <label htmlFor="email">Email</label>
        <input type="text" placeholder="enter your email" onChange={(e)=>setuser({...user,email:e.target.value})} value={user.email || ""}/>
        </div>
        <div>
        <label htmlFor="password">Password</label>
        <input type="text" placeholder="enter your password" onChange={(e)=>setuser({...user,password:e.target.value})} value={user.password || ""}/>
        </div>
        <button type="submit" >Login</button>
    </form>
    
  )
}

export default Login
