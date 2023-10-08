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

const EditModal = ({ modalIsOpen, closeModal, name, phone, id }) => {
  const [nameValue, setNameValue] = useState(name);
  const [phoneValue, setPhoneValue] = useState(phone);
  const dispatch = useDispatch();

  const handleNameChange = e => {
    setNameValue(e.target.value);
  };

  const handlePhoneChange = e => {
    setPhoneValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const updatedContact = { id, name: nameValue, phone: phoneValue };

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
        <input type="text" value={phoneValue} onChange={handlePhoneChange} />
        <button type="submit">Save</button>
      </form>
    </Modal>
  );
};

export default EditModal;
