import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../redux/auth/auth-operations';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

// const mapDispatchToProps = {
//   onLogin: authOperations.logIn,
// };

// export default connect(null, mapDispatchToProps)(LoginView);

export default function LoginView () {
  const initialState = {
    email: '',
    password: '',
  };
  const dispatch = useDispatch();
  const [state, setState] = useState(initialState);
  const onLogin = (data) => dispatch(authOperations.logIn(data));

  const handleChange = ({ target: { name, value } }) => {
    setState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    onLogin(state);

    setState(prev => ({
      ...prev,
      email: '',
      password: ''
    }))
  };

    const { email, password } = state;

    return (
      <div>
        <h1>Страница логина</h1>

        <form
          onSubmit={handleSubmit}
          style={styles.form}
          autoComplete="off"
        >
          <label style={styles.label}>
            Почта
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </label>

          <label style={styles.label}>
            Пароль
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </label>

          <button type="submit">Войти</button>
        </form>
      </div>
    );
}