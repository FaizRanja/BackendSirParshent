import React, { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"

const App = () => {

  const [jokes, setJokes] = useState([]) // Initialize jokes as an array

  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        if (response && response.data) {
          setJokes(response.data)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }, [jokes])
  

  return (
    <>
      <h1>Chai or code with full stack</h1>
      <p>Jokes: {jokes.length}</p>

      {jokes.map((i) => ( // Added parentheses to return JSX
        <div key={i.id}>
          <h3>{i.tittle}</h3> {/* Corrected 'title' spelling */}
          <p>{i.content}</p>
        </div>
      ))}
    </>
  )
}

export default App
