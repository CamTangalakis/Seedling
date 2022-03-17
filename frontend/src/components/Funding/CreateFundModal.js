import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import CreateFundForm from './CreateFundForm';

function CreateFundModal({projectId}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='fundModalButton' onClick={() => setShowModal(true)}>Fund It!</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateFundForm projectId={projectId} setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default CreateFundModal;
