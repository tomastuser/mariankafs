import React from 'react';

const AdminNav = () => {
  return (
    <nav className='navBar'>
      <a className='navBarBrand' href='/admin'>
        LMŠ MARIÁNKA
      </a>
      <div className='navBarCollapse' id='navbarNav'>
        <ul className='navBarNav'>
          <li className='navItem'>
            <a className='adNavLink' href='/admin/aktuality'>
              Aktuality
            </a>
          </li>
          <li className='navItem active'>
            <a className='adNavLink' href='/admin/tym'>
              Tým
            </a>
          </li>
          <li className='navItem active'>
            <a className='adNavLink' href='/admin/stranky'>
              Stránky
            </a>
          </li>
        </ul>
        <form className='formInline'>
          <button className='navButton'>Odhlásit se</button>
        </form>
      </div>
    </nav>
  );
};

export default AdminNav;
