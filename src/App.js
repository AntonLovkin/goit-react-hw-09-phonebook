import { Switch } from 'react-router-dom';
import AppBar from './UserMenu/AppBar';
// import ContactsView from './views/ContactsView';
// import RegisterView from './views/RegisterView';
// import LoginView from './views/LoginView';
import { Component, lazy, Suspense } from 'react';
import authOperations from './redux/auth/auth-operations';
import { connect } from 'react-redux';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const ContactsView = lazy(() => import('./views/ContactsView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));

class App extends Component {

  componentDidMount() {
    this.props.onGetCurrentUser();
}

  render() {
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
}
  
const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser
}

export default connect(null, mapDispatchToProps)(App);