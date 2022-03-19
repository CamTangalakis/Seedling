import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import { Button } from '@material-ui/core'
import CreateFundForm from './CreateFundForm';
import './funding.css'

function CreateFundModal({projectId}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button className='fundModalButton' onClick={() => setShowModal(true)} style={{"backgroundColor": "rgb(90, 36, 92)", "color": "beige"}}>Fund It!</Button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateFundForm projectId={projectId} setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default CreateFundModal;
