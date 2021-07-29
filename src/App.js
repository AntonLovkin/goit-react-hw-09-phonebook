import { Switch } from 'react-router-dom';
import AppBar from './UserMenu/AppBar';
import { lazy, Suspense, useEffect } from 'react';
import authOperations from './redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const ContactsView = lazy(() => import('./views/ContactsView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));


// const mapDispatchToProps = {
//   onGetCurrentUser: authOperations.getCurrentUser
// }

//  componentDidMount() {
//     this.props.onGetCurrentUser();
// }

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser())
  }, [dispatch]);

    return (
      <>
        <AppBar />

        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <PublicRoute path="/register" restricted component={RegisterView} redirectTo='/contacts'/>
            <PublicRoute path="/login" restricted component={LoginView} redirectTo='/contacts'/>
            <PrivateRoute path="/contacts" component={ContactsView} redirectTo='/login' />
          </Switch>
        </Suspense>
      </>
    );
  }