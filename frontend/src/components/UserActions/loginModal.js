import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from '../context/Modal'
import {login} from '../../store/session';
import LoginForm from './loginForm'

function LoginModal() {
    const dispatch = useDispatch()
    const [ showModal, setShowModal ] = useState(false)

    const demoLogin = async() => {
        await dispatch(login('demo@aa.io', 'password'))
    }

    return (
        <div className=''>
            <div onClick={()=> setShowModal(true)}> Login </div>
            {showModal && (
                <Modal onClose={()=> setShowModal(false)}>
                    <LoginForm />
                </Modal>
            )}

            <div onClick={demoLogin}>Login as Demo</div>
        </div>
    )
}


export default LoginModal;
