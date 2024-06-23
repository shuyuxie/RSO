import React from 'react';

const Login: React.FC = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <form>
        <label>
          Username:
          <input type="text" required />
        </label>
        <br />
        <label>
          Password:
          <input type="password" required />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;