import { Link } from 'react-router-dom';
import {
  ContentWrap,
  HeroWrap,
  Item,
  ListWrap,
  SubTitle,
  Text,
  Title,
} from './HomeContent.style';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

export const HomeContent = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <ContentWrap>
      <HeroWrap>
        <Title>Welcome to the PHONEBOOK app! </Title>
        <SubTitle> Organize your contacts with convenience and ease. </SubTitle>
        <Text>
          With our web application, you can create and maintain your contact
          list hassle-free. No more messy handwritten notes or confusing paper
          records.
          {!isLoggedIn && (
            <Text>
              <Link to="/register">
                <u>Create a personal account</u>
              </Link>{' '}
              or{' '}
              <Link to="/login">
                <u>login</u>
              </Link>{' '}
              to an existing one to store your contacts.
            </Text>
          )}
        </Text>
        <ListWrap>
          <SubTitle>Key Features:</SubTitle>
          <ul>
            <Item>
              <Text>
                Add and Edit Contacts: Easily input and update contact details
                like names and phone numbers.
              </Text>
            </Item>
            <Item>
              <Text>
                Search and Filter: Quickly find the contacts you need without
                any hassle.
              </Text>
            </Item>
          </ul>
        </ListWrap>
        <Text>
          Join our user community today and experience a more organized way to
          manage your contacts. Sign up now to get quick access to your
          important information!
        </Text>
      </HeroWrap>
    </ContentWrap>
  );
};
