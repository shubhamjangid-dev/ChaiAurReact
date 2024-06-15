import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext';


function Login() {
    
    const {setUser} = useContext(UserContext)

    const handleSubmit = (e)=>{
        e.preventDefault();
        // context me store kr denge
        setUser({Username, Password});
    }

    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
  return (
    <>
        <input 
            type ='text'
            placeholder='Username'
            value = {Username}
            onChange={(e)=>{setUsername(e.target.value)}}
        />
        <br/>
        <input 
            type ='text'
            placeholder='Password'
            value = {Password}
            onChange={(e)=>{setPassword(e.target.value)}}
        />
        <br/>
        <button onClick={handleSubmit}>Submit</button>
        <br/>
    </>
  )
}

export default Login