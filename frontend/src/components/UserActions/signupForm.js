import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signup } from '../../store/session';
import './signupForm.css'

const SignupForm = () => {
    const [errors, setErrors] = useState([])
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const user = useSelector(state => state.session.user)
    const dispatch = useDispatch()

    const onSignUp = async(e) => {
        e.preventDefault()

        const data = await dispatch(signup(username, firstName, lastName, email, password))
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

    const updateFirstName = (e) => {
        setFirstName(e.target.value)
    }

    const updateLastName = (e) => {
        setLastName(e.target.value)
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
                        <div key={i}>{error.split(':')[1]}</div>
                    ))}
                </div>

                <h2 className='signupHeader'>Sign Up</h2>

                <input
                    className='signupInput'
                    name='username'
                    type='text'
                    placeholder='Enter username'
                    value={username}
                    required
                    onChange={updateUsername} />

                <input
                    className='signupInput'
                    name='firstName'
                    type='text'
                    placeholder='Enter first name'
                    value={firstName}
                    required
                    onChange={updateFirstName} />

                <input
                    className='signupInput'
                    name='lastName'
                    type='text'
                    placeholder='Enter last name'
                    value={lastName}
                    required
                    onChange={updateLastName} />

                <input
                    className='signupInput'
                    name='email'
                    type='text'
                    placeholder='Enter email'
                    value={email}
                    required
                    onChange={updateEmail} />

                <input
                    className='signupInput'
                    name='password'
                    type='text'
                    placeholder='Enter password'
                    value={password}
                    required
                    onChange={updatePassword} />

                <input
                    className='signupInput'
                    name='confirmPass'
                    type='text'
                    placeholder='Confirm password'
                    value={confirmPass}
                    required
                    onChange={updateConfirmPass} />

                <button type='submit' className='signupButton'>Let's Go!</button>
            </form>
        </div>
    )
}


export default SignupForm;
