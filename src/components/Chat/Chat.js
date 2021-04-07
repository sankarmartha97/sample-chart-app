import React, { useState, useEffect } from "react";
import queryString from 'query-string';
import io from "socket.io-client";

import Messages from '../Messages/Messages';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';

import './Chat.css';

const ENDPOINT = 'localhost:5000';

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [users, setUsers] = useState('');
  const [type, setType] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [file] = useState('');
  const fileAttachment = React.createRef();

  useEffect(() => {
    const { name } = queryString.parse(location.search);
  
    socket = io(ENDPOINT);

  
    setName(name)

    socket.emit('join', { name }, (error) => {
      if(error) {
        alert(error);
      }
    });
    return () =>{
      socket.emit('disconnect')
      socket.off()
    }
  }, [location.search]);
  
  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [ ...messages, message ]);
    });
    
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);

  const sendMessage = (event) => {
    const { type } = event.target;
    event.preventDefault();
    if(message) {
      socket.emit('sendMessage', message,type, () =>  setMessage('') );
    }
  }

  const uploadMessage = (file, fileMessage, type) => {
    console.log(file, fileMessage,type);
    console.log(messages);
    if (type === 'video'){
      file = '';
    }
    if(fileMessage) {
      socket.emit('sendFileMessage', fileMessage, file, file.name, type, () =>  setMessage('') );
    }
  }

  return (
    <div className="outerContainer">
      <div className="container">
          <InfoBar name={name} users={users}/>
          <Messages messages={messages} name={name} />
          <Input socket={socket} message={message} type={type} fileAttachment={fileAttachment} file={file} setType={setType} setMessage={setMessage} sendMessage={sendMessage} uploadMessage={uploadMessage} />
      </div>
    </div>
  );
}

export default Chat;
