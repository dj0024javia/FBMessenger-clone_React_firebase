import React, { useState, useEffect } from 'react';
import './App.css';
import Button from '@material-ui/core/Button'
import { FormControl, InputLabel, Input } from '@material-ui/core';
import Message from './Message';


function App() {
  const [input, setInput] = useState('')
  const [allmessages, setAllMessages] = useState([
    {username :'abc', allmessages :'This is my default message'},
    {username :'XYZ', allmessages :'XYZmessage'}
      ])
  const [username, setUsername] = useState('')

  const sendMessage = (event => {
    event.preventDefault();
    setAllMessages(
      [...allmessages, {username: username, allmessages: input}
        ]
      );
    setInput('');
  })

  useEffect(() => {
    setUsername(prompt('What is Your Name??'))
  }, [])
  

  const formsubmit = (e => {
    e.preventDefault();
  })

  return (

    <div className="App">
      <h1>Welcome to FB Messenger</h1>

      {/* Components Required
      1. Input field
      2. Send button
      3. Messages incoming and outgoing */}
      <form id="chat-console" onSubmit={formsubmit}>
        <FormControl>
          {/* 1. Input Field */}
          <InputLabel htmlFor="my-input">{username}</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" label="Enter Message" placeholder="Type Your message here" value={input} onChange={e => 
          setInput(e.target.value)
          } />
          {/* 2. Button */}
          <Button variant="contained" color="primary" type="submit" disabled={!input} onClick={sendMessage}>Send</Button>
        </FormControl>
      </form>
      {/* 3. Message Incoming and Outgoing. */}
      
      {
        allmessages.map(eachMessage => 
          <Message object={eachMessage} username={username}/>
          )
      }

    </div>
  );
}

export default App;
