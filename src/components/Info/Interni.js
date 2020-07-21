import React from 'react';
import { useAuth } from 'react-use-auth';

const Interni = (props) => {
  const { isAuthenticated, login, logout } = useAuth();
  console.log(isAuthenticated);
  if (isAuthenticated()) {
    return (
      <div className='mainTextCont'>
        <div className='mainText'>
          <h1>Interní sekce</h1>
          <div>
            <h3 href='#'>Rozpis úklidů</h3>
            <h3 href='#'>Slavnosti</h3>
          </div>
          <button className='button' onClick={logout}>
            Odhlášení
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className='mainTextCont'>
        <div className='mainText'>
          <h1>Interní sekce - přihlášení</h1>
          <button className='button' onClick={login}>
            Přihlášení
          </button>
        </div>
      </div>
    );
  }
};

export default Interni;
