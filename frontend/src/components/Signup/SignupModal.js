import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignUpFormPage from './SignUpForm';

function SignUpFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <button id='formButton' onClick={() => setShowModal(true)}>Sign Up</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignUpFormPage />
        </Modal>
      )}
    </div>
  );
}

export default SignUpFormModal;
