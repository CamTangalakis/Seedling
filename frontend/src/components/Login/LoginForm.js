import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../store/session';
import './login.css'

const LoginForm = () => {
    const [errors, setErrors] = useState([])
    const [credential, setCredential] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const onLogin = async(e) => {
        e.preventDefault()

        return dispatch(login(credential, password))
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

                <input
                    className='credentialInput'
                    name='credential'
                    type='text'
                    placeholder='Enter credentials'
                    value={credential}
                    required
                    onChange={(e) => setCredential(e.target.value)} />

                <input
                    className='credentialInput'
                    name='password'
                    type='password'
                    placeholder='Enter password'
                    value={password}
                    required
                    onChange={(e) => setPassword(e.target.value)} />

                <button type='submit' className='loginButton'>Let's Go!</button>
            </form>
        </div>
    )
}


export default LoginForm;
