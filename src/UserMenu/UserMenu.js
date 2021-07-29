import {useCallback} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../redux/auth/auth-selectors';
import authOperations from '../redux/auth/auth-operations';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

// const mapStateToProps = state => ({
//   name: authSelectors.getUsername(state),
// });

// const mapDispatchToProps = {
//   onLogout: authOperations.logOut,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);

export default function UserMenu() {
  const dispatch = useDispatch();

  const onLogout = useCallback(() => {
    dispatch(authOperations.logOut());
  }, [dispatch]);

  const name = useSelector(authSelectors.getUsername);

  return (
  <div style={styles.container}>
    <span style={styles.name}>Welcome, {name}</span>
    <button type="button" onClick={onLogout}>
      Logout
    </button>
  </div>
  );
};