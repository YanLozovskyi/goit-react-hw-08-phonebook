import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { selectUserEmail, selectUsername } from 'redux/auth/authSelectors';

export const Profile = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectUsername);
  const email = useSelector(selectUserEmail);

  return (
    <div>
      <div>
        <p>Name: {name}</p>
        <p>email: {email}</p>
        <button type="button" onClick={() => dispatch(logOut())}>
          Logout
        </button>
      </div>
    </div>
  );
};
