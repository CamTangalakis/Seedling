import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../store/session';
import './loginForm.css'

const LoginForm = ({setShowModal}) => {
    const [errors, setErrors] = useState([])
    const [credential, setCredential] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onLogin = async(e) => {
        e.preventDefault()

        // const data = await dispatch(login(credential, password))
        // console.log(data, '<<<----')
        // if(data) {
        //      setErrors(data)
        // }

        return dispatch(login(credential, password))
            .catch(async (res) => {
                const data = await res.json()
                if (data.errors) setErrors(data.errors)
                console.log(errors, '<<--')
            })
            .then(()=> {
                navigate('/')
                setShowModal(false)
            })
    }

    const updateCredential = (e) => {
        e.preventDefault()
        setCredential(e.target.value)
    }

    const updatePassword = (e) => {
        e.preventDefault()
        setPassword(e.target.value)
    }

    return (
        <div className='loginContainer'>
            <form onSubmit={onLogin} className='loginForm'>
                <div className='errors'>
                    {errors.map((error, i) => (
                        <div key={i}>{error.split(':')[1]}</div>
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
                    onChange={updateCredential} />

                <input
                    className='credentialInput'
                    name='password'
                    type='text'
                    placeholder='Enter password'
                    value={password}
                    required
                    onChange={updatePassword} />

                <button type='submit' className='loginButton'>Let's Go!</button>
            </form>
        </div>
    )
}


export default LoginForm;
