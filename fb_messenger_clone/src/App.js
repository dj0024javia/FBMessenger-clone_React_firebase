import React, { useState, useEffect } from 'react';
import './App.css';
import Button from '@material-ui/core/Button'
import { FormControl, InputLabel, Input, IconButton } from '@material-ui/core';
import Message from './Message';
import { db } from './firebase';
import firebase from 'firebase'
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';

function App() {
  const [input, setInput] = useState('')
  const [msgs, setMsgs] = useState([])
  const [username, setUsername] = useState('')

  const sendMessage = (event => {
    event.preventDefault();

    db.collection('fb-messenger-clone').add({
      username: username,
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  })

  // Below useEffect runs only when the page refresh/loads(syntax -->> useEffect(function, dependency)). 
  // So here dependency is []. If we put input, so whenever input variable changes, it runs this code.
  useEffect(() => {
    db.collection('fb-messenger-clone').orderBy('timestamp','desc').onSnapshot(snapshot => {
      
      setMsgs(snapshot.docs.map(doc => ({id: doc.id , data: doc.data()}))
      )
    })

    console.log(msgs)
  }
  , [])

  useEffect(() => {
    setUsername(prompt('What is Your Name??'))
  }, [])
  

  const formsubmit = (e => {
    e.preventDefault();
  })

  return (

    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" />
      <h1>Welcome to FB Messenger {username}!</h1>
      
      {/* Components Required
      1. Input field
      2. Send button
      3. Messages incoming and outgoing */}
      <form id="chat-console" className="app__form" onSubmit={formsubmit}>
        <FormControl className="app__formcontrol">
          {/* 1. Input Field */}
          {/* <InputLabel htmlFor="my-input">{username}</InputLabel> */}
          <Input className="app_formcontrol_input" id="my-input" aria-describedby="my-helper-text" placeholder="Type Your message here" value={input} onChange={e => 
          setInput(e.target.value)
          } />
          {/* 2. Button */}
          {/* <Button variant="contained" color="primary" type="submit" disabled={!input} onClick={sendMessage}>Send</Button> */}
          <IconButton className="app_formcontrol_iconbutton" type="submit" disabled={!input} onClick={sendMessage}>
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      {/* 3. Message Incoming and Outgoing. */}
      <FlipMove>
        {
          msgs.map(eachMessage =>
            (<Message key={eachMessage.id} object={eachMessage.data} username={username}/>)
            )
        }
        {/* So Above part is bit complicated to understand. Here we are passing eachMessage as an element from a dictionary of documents. 
        So, eachMessage has 2 elements, id and data. Go to onSnapshot part of the code and there you can see 2 keys of eachMessage element
        Now, here we were passing message object before which had 3 attributes, message, username and timestamp.
        Here we have converted that dict into another object(element of bigger dict) which is part of a dict(msgs)
        key property is required to prevent whole thing from re-rendering. it only renders new msg being pushed */}
      </FlipMove>

    </div>
  );
}

export default App;
