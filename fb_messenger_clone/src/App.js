import React, { useState } from 'react';
import './App.css';
import Button from '@material-ui/core/Button'
import { TextField } from '@material-ui/core';

function App() {
  const [input, setInput] = useState('')
  const [allmessages, setAllMessages] = useState([])

  const sendMessage = (event => {
    event.preventDefault()
    setAllMessages([...allmessages, input])
    console.log(allmessages)
    setInput('')
  })

  return (

    <div className="App">
      <h1>Welcome to FB Messenger</h1>
      
      {/* Components Required
      1. Input field
      2. Send button
      3. Messages incoming and outgoing */}
      <form>
        {/* 1. Input Field */}
        <TextField id="standard-basic" label="Enter Message" placeholder="Type Your message here" value={input} onChange={e => 
        setInput(e.target.value)
        }></TextField>
        {/* 2. Button */}
        <Button variant="contained" color="primary" type="button" disabled={!input} onClick={sendMessage}>Send</Button>
      </form>
      {/* 3. Message Incoming and Outgoing. */}

      {
        allmessages.map(eachMessage => 
          <p>{eachMessage}</p>)
      }

    </div>
  );
}

export default App;
