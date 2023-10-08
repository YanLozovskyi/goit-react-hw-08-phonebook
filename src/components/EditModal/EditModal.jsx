import { useState } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { editContact } from 'redux/contacts/contactsOperations';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const EditModal = ({ modalIsOpen, closeModal, name, number, id }) => {
  const [nameValue, setNameValue] = useState(name);
  const [numberValue, setNumberValue] = useState(number);
  const dispatch = useDispatch();

  const handleNameChange = e => {
    setNameValue(e.target.value);
  };

  const handlePhoneChange = e => {
    setNumberValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const updatedContact = { id, name: nameValue, number: numberValue };

    dispatch(editContact(updatedContact));
    closeModal();
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <form onSubmit={handleSubmit}>
        <input type="text" value={nameValue} onChange={handleNameChange} />
        <input type="text" value={numberValue} onChange={handlePhoneChange} />
        <button type="submit">Save</button>
      </form>
    </Modal>
  );
};

export default EditModal;
