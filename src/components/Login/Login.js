import React, { useState } from 'react';
import { Link } from "react-router-dom";

import './Login.css';

export default function LogIn() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Login</h1>
        <div>
          <input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input placeholder="Password" className="joinInput mt-20" type="password" onChange={(event) => setPassword(event.target.value)} />
        </div>
        <Link onClick={e => (!name || !password) ? e.preventDefault() : null} to={`/chat?name=${name}`}>
          <button className={'button mt-20'} type="submit">Log In</button>
        </Link>
      </div>
    </div>
  );
}
