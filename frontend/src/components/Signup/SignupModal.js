import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignUpFormPage from './SignUpForm';
import './signup.css'

function SignUpModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='signupModalButton' onClick={() => setShowModal(true)}>Sign Up</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignUpFormPage />
        </Modal>
      )}
    </>
  );
}

export default SignUpModal;
