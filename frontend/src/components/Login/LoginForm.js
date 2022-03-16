import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../store/session';
import {TextField} from '@material-ui/core'
import './login.css'

const LoginForm = () => {
    const [errors, setErrors] = useState([])
    const [credential, setCredential] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const onLogin = async(e) => {
        e.preventDefault()

        return dispatch(login({credential, password}))
            .catch(async (res) => {
                const data = await res.json()
                if (data.errors) setErrors(data.errors)
            })
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
                    onChange={(e) => setCredential(e.target.value)} />

                <TextField
                    className='credentialInput'
                    name='password'
                    type='password'
                    placeholder='Enter password'
                    label='Password'
                    value={password}
                    required
                    onChange={(e) => setPassword(e.target.value)} />

                <button type='submit' className='loginButton'>Let's Go!</button>
            </form>
        </div>
    )
}


export default LoginForm;
