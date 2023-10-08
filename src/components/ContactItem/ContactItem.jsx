import {
  StyledContactItem,
  DeleteButton,
  EditButton,
} from './ContactItem.styled';
import { BiTrash, BiEdit } from 'react-icons/bi';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { deleteContact } from 'redux/contacts/contactsOperations';
import { selectIsDeleting } from 'redux/contacts/selectors';
import EditModal from 'components/EditModal/EditModal';

export const ContactItem = ({ name, id, number }) => {
  const dispatch = useDispatch();
  const isDeleting = useSelector(selectIsDeleting);
  const [showModal, setShowModal] = useState(false);
  const [deleteButtonLabel, setDeleteButtonLabel] = useState('Delete');

  const handleDeleteButtonClick = id => {
    setDeleteButtonLabel('Deleting...');
    toast.info(`${name} was deleted from your contact list.`);
    dispatch(deleteContact(id)).then(() => {
      setDeleteButtonLabel('Delete');
    });
  };

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  return (
    <>
      <StyledContactItem>
        {name}: {number}
        <div>
          <EditButton type="button" onClick={toggleModal}>
            <BiEdit />
          </EditButton>
          <DeleteButton
            type="button"
            onClick={() => handleDeleteButtonClick(id)}
            disabled={isDeleting}
          >
            {deleteButtonLabel}
            <BiTrash />
          </DeleteButton>
        </div>
        <EditModal
          modalIsOpen={showModal}
          closeModal={toggleModal}
          name={name}
          number={number}
          id={id}
        />
      </StyledContactItem>
    </>
  );
};
