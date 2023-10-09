import { Notifications, ContactItem, Filter, Section, Title } from 'components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactsOperations';
import {
  selectContacts,
  selectDisplayedContacts,
  selectIsLoading,
} from 'redux/contacts/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const displayedContacts = useSelector(selectDisplayedContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Section>
        <Title>Contacts</Title>
        <Filter />
        {contacts.length > 0 && displayedContacts.length === 0 && (
          <Notifications message={'No one found with that name.'} />
        )}
        {contacts.length === 0 && !isLoading && (
          <Notifications message={'There are no contacts in your phonebook.'} />
        )}
        {contacts.length > 0 && (
          <ul>
            {displayedContacts.map(({ name, id, number }) => (
              <ContactItem name={name} key={id} id={id} number={number} />
            ))}
          </ul>
        )}
      </Section>
    </>
  );
};
