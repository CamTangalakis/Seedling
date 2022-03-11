import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../store/session';

const LoginForm = () => {
    const [errors, setErrors] = useState([])
    const [credential, setCredential] = useState('')
    const [password, setPassword] = useState('')
    const user = useSelector(state => state.session.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onLogin = async(e) => {
        e.preventDefault()

        const data = await dispatch(login(credential, password))
        if(data) {
             setErrors(data)
        }

        navigate('/')
    }

    const updateCredential = (e) => {
        setCredential(e.target.value)
    }

    const updatePassword = (e) => {
        setPassword(e.target.value)
    }

    return (
        <div>
            <form onSubmit={onLogin}>
                <div className='errors'>
                    {errors.map((error, i) => (
                        <div key={i}>{error.split(':')[1]}</div>
                    ))}
                </div>

                <input
                    className='credentialInput'
                    name='credential'
                    type='text'
                    placeholder='Enter credentials'
                    value={credential}
                    required
                    onChange={updateCredential} />

                <input
                    className='passwordInput'
                    name='password'
                    type='text'
                    placeholder='Enter password'
                    value={password}
                    required
                    onChange={updatePassword} />

                <button type='submit' className='loginButton'>Login</button>
            </form>
        </div>
    )
}


export default LoginForm;
