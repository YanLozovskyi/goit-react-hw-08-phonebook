import { Title } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { selectUserEmail, selectUsername } from 'redux/auth/authSelectors';
import {
  ContentWrap,
  LogOutButton,
  LogoutIcon,
  ProfileWrap,
  Text,
} from './Profile.style';

export const Profile = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectUsername);
  const email = useSelector(selectUserEmail);

  return (
    <ProfileWrap>
      <Title style={{ color: 'white' }}>Profile</Title>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '20px',
        }}
      >
        <img
          style={{ width: '200px' }}
          src="https://static-00.iconduck.com/assets.00/user-icon-1024x1024-dtzturco.png"
          alt="user_photo"
        />
        <ContentWrap>
          <Text style={{ color: '#ff5959' }}>Name:</Text>
          <Text>{name}</Text>
          <Text style={{ color: '#ff5959' }}>Email:</Text>
          <Text style={{ marginBottom: '0px' }}>{email}</Text>
        </ContentWrap>
      </div>
      <LogOutButton onClick={() => dispatch(logOut())} type="button">
        Logout
        <LogoutIcon />
      </LogOutButton>
    </ProfileWrap>
  );
};
