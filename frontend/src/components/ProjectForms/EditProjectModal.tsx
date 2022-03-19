import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import { Button } from '@material-ui/core'
import EditProjectForm from './EditProjectForm';

function EditProjectModal({project}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Button className='editProjectModalButton' onClick={() => setShowModal(true)}>Edit</Button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditProjectForm project={project} setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default EditProjectModal;
