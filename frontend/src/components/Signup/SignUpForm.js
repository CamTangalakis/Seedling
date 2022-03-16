import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signup } from '../../store/session';
import './signup.css'
import {TextField} from '@material-ui/core'

const SignupForm = () => {
    const [errors, setErrors] = useState([])
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [email, setEmail] = useState('')
    const [profilePic, setProfilePic] = useState('')

    const user = useSelector(state => state.session.user)
    const dispatch = useDispatch()

    const onSignUp = async(e) => {
        e.preventDefault()

        const data = await dispatch(signup({username, profilePic, email, password, profilePic}))
        if(data) {
             setErrors(data)
        }
    }

    const updateUsername = (e) => {
        setUsername(e.target.value)
    }

    const updateEmail = (e) => {
        setEmail(e.target.value)
    }

    const updateProfilePic = (e) => {
        setProfilePic(e.target.value)
    }

    const updatePassword = (e) => {
        setPassword(e.target.value)
    }

    const updateConfirmPass = (e) => {
        setConfirmPass(e.target.value)
    }

    return (
        <div className='signupContainer'>
            <form onSubmit={onSignUp} className='signupForm'>
                <div className='errors'>
                    {errors.map((error, i) => (
                        <div key={i}>{error}</div>
                    ))}
                </div>

                <h2 className='signupHeader'>Sign Up</h2>

                <TextField
                    className='signupInput'
                    name='username'
                    type='text'
                    placeholder='Enter username'
                    label='Username'
                    value={username}
                    required
                    onChange={updateUsername} />

                <TextField
                    className='signupInput'
                    name='profilePic'
                    type='text'
                    placeholder='Enter image url'
                    label='Profile Picture'
                    value={profilePic}
                    required
                    onChange={updateProfilePic} />

                <TextField
                    className='signupInput'
                    name='email'
                    type='text'
                    placeholder='user@mail.com'
                    label='Email'
                    value={email}
                    required
                    onChange={updateEmail} />

                <TextField
                    className='signupInput'
                    name='password'
                    type='password'
                    placeholder='Enter password'
                    label="Password"
                    value={password}
                    required
                    onChange={updatePassword} />

                <TextField
                    className='signupInput'
                    name='confirmPass'
                    type='password'
                    placeholder='Confirm password'
                    label="Confirm Password"
                    value={confirmPass}
                    required
                    onChange={updateConfirmPass} />

                <button type='submit' className='signupButton'>Let's Go!</button>
            </form>
        </div>
    )
}


export default SignupForm;
