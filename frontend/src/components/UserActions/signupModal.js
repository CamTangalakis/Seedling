import React, { useState } from 'react';
import { Modal } from '../context/Modal'
import SignupForm from './signupForm';
import './loginForm.css'

function SignupModal() {
    const [ showModal, setShowModal ] = useState(false)

    return (
        <div className=''>
            <div className='userButton' onClick={()=> setShowModal(true)}> Sign Up </div>
            {showModal && (
                <Modal onClose={()=> setShowModal(false)}>
                    <SignupForm />
                </Modal>
            )}
        </div>
    )
}


export default SignupModal;
