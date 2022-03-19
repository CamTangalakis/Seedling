import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../store/session';
import { TextField } from '@material-ui/core'
import './login.css'

const LoginForm = ({setShowModal}) => {
    const [errors, setErrors] = useState([])
    const [credential, setCredential] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const onLogin = async(e) => {
        e.preventDefault()

        const data = await dispatch(login({credential, password}))
        if(data) {
            setErrors([data])
        }
    }

    return (
        <div className='loginContainer'>
            <form onSubmit={onLogin} className='loginForm'>
                <div className='errors'>
                    {errors.map((error, i) => (
                        <div key={i}>{error}</div>
                    ))}
                </div>

                <h2 className='loginHeader'>Login</h2>

                <TextField
                    className='credentialInput'
                    name='credential'
                    type='text'
                    placeholder='Enter email or username'
                    label="Credentials"
                    value={credential}
                    required
                    onChange={(e: any) => setCredential(e.target.value)}
                    style={{"margin": "1vw 0vw",
                    "border": "none"}}
                />

                <TextField
                    className='credentialInput'
                    name='password'
                    type='password'
                    placeholder='Enter password'
                    label='Password'
                    value={password}
                    required
                    onChange={(e: any) => setPassword(e.target.value)}
                    style={{"margin": "1vw 0vw",
                    "border": "none"}}
                />

                <button type='submit' className='loginButton'>Let's Go!</button>
            </form>
        </div>
    )
}


export default LoginForm;
