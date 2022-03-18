import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import { Button } from '@material-ui/core'
import CreateFundForm from './CreateFundForm';

function CreateFundModal({projectId}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button className='fundModalButton' onClick={() => setShowModal(true)}>Fund It!</Button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateFundForm projectId={projectId} setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default CreateFundModal;
