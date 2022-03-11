import React, { useState } from 'react';
import { Modal } from '../context/Modal'
import SignupForm from './signupForm';

function SignupModal() {
    const [ showModal, setShowModal ] = useState(false)

    return (
        <div className=''>
            <div onClick={()=> setShowModal(true)}> Login </div>
            {showModal && (
                <Modal onClose={()=> setShowModal(false)}>
                    <SignupForm />
                </Modal>
            )}
        </div>
    )
}


export default SignupModal;
