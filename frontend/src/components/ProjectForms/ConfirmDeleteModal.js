import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import { Button } from '@material-ui/core'
import { useDispatch } from 'react-redux';
import { delProject } from '../../store/project';
import { useNavigate } from 'react-router-dom';

function ConfirmDeleteModal({projectId}) {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [showModal, setShowModal] = useState(false);

  const deleteProject = () => {
    dispatch(delProject(projectId))
    navigate('/home')
  }

  return (
    <>
      <Button className='confirmDeleteButton' onClick={() => setShowModal(true)}>Delete</Button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
            <p>Are you sure you want to delete this project?</p>
            <Button onClick={() => setShowModal(false)}>Cancel</Button>
            <Button onClick={deleteProject}>Delete</Button>
        </Modal>
      )}
    </>
  );
}

export default ConfirmDeleteModal;
