import React from 'react';
import { useSelector } from 'react-redux';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
import authSelectors from '../redux/auth/auth-selectors';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #2A363B',
  },
};

// const mapStateToProps = state => ({
//   isAuthenticated: authSelectors.getIsAuthenticated(state),
// });

// export default connect(mapStateToProps)(AppBar);

export default function AppBar() {

  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

  return (
    <header style={styles.header}>
    
      {isLoggedIn
        ?
        <>
          <Navigation />
          <UserMenu />
        
        </>
        : <AuthNav />}
        
    </header>
  );
};