import express  from "express";
const app = express();

app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.get('/faiz',(req,res)=>{
    res.send("hello i am rana faiz and i am a mern satact developler ")
})

app.get('/login', (req ,res)=>{
res.send('<h1>Hello i am a fornant developers</h1>')
})

app.listen(2000,()=>{
    console.log("Server is running on port 2000");
})