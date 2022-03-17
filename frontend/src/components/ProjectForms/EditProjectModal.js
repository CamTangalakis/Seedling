import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import EditProjectForm from './EditProjectForm';

function EditProjectModal({project}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='editProjectModalButton' onClick={() => setShowModal(true)}>Edit</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditProjectForm project={project} setShowModal={setShowModal} />
        </Modal>
      )}
    </>
  );
}

export default EditProjectModal;
