import { ContactList, ContactForm, Loader } from 'components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/contacts/selectors';

const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} theme="dark" />
      <ContactForm />

      {isLoading && <Loader />}
      <ContactList />
    </>
  );
};

export default Contacts;
