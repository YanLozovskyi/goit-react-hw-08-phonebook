import { Notifications, ContactItem } from 'components';
import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectDisplayedContacts,
  selectIsLoading,
} from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const displayedContacts = useSelector(selectDisplayedContacts);
  return (
    <>
      {contacts.length > 0 && displayedContacts.length === 0 && (
        <Notifications message={'No one found with that name.'} />
      )}
      {contacts.length === 0 && !isLoading && (
        <Notifications message={'There are no contacts in your phonebook.'} />
      )}
      {contacts.length > 0 && (
        <ul>
          {displayedContacts.map(({ name, id, phone }) => (
            <ContactItem name={name} key={id} id={id} phone={phone} />
          ))}
        </ul>
      )}
    </>
  );
};
