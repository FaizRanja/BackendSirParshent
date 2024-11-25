import  express  from "express";
import path from "path";
const app= express();
import mongoose from "mongoose";
import dotenv from 'dotenv';



dotenv.config();

mongoose
  .connect(process.env.MongoDb)
  .then(() => {
    console.log('MongoDb is connected successfully');
  })
  .catch((err) => {
    console.log(err);
  });

app.set('view engine', 'ejs');

const user =[]

// middleware for loading
app.use(express.static(path.join(path.resolve(), "public")));
app.use (express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
res.render('index', {name:'rana faiz uttra'})
})
app.get('/success', (req, res) => {
res.render("success")
})


app.post('/contact', (req, res) => {
console.log(req.body)
user.push({ email :req.body.email , password : req.body.password })

res.redirect("/success")
})

app.get("/user",(req,res)=>{
res.json
({
    user
})
})


app.listen(5000,()=>{
    console.log('listening on port')
})