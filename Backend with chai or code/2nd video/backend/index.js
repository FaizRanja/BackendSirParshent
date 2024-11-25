import express from "express";

const app =express()


const jokes=[
    {
      "id": 1,
      "title": "Funny Joke 1",
      "content": "Why couldn't the bicycle stand up by itself? Because it was two-tired!"
    },
    {
      "id": 2,
      "title": "Funny Joke 2",
      "content": "What do you get when you cross a snowman and a vampire? Frostbite!"
    },
    {
      "id": 3,
      "title": "Funny Joke 3",
      "content": "Why did the scarecrow win an award? Because he was outstanding in his field!"
    }
  ]

app.use(express.static("dist"))
app.get('/', async (req, res) => {
   await  res.send('Hello World')
})

app.get("/api/jokes",(req,res)=>{
res.send(jokes)
})
app.listen(4000,()=>{
console.log(`server is running on http://localhost:${4000}`)
})