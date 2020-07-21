import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Nav({ navLinks }) {
  const [navOpen, setNavOpen] = useState(false);

  const [subNavLinksOpen, setSubNavLinksOpen] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  const subNavOpeningHandler = (e) => {
    const subs = [...subNavLinksOpen];
    const currentId = e.currentTarget.id - 1;
    if (window.innerWidth < 768) {
      subs[currentId] = !subs[currentId];
    }
    setSubNavLinksOpen(subs);
  };

  return (
    <div className='nav'>
      <div
        className={navOpen ? 'sideNavSpacerActive' : 'sideNavSpacer'}
        onClick={() => setNavOpen((navOpen) => (navOpen = false))}
      ></div>
      <div className='spacer'></div>
      <div onClick={() => setNavOpen((navOpen) => (navOpen = false))}>
        <div className='logo'>
          <div className='logoCont'>
            <Link to='/'>
              <img
                src='https://res.cloudinary.com/tomastuser/image/upload/v1587164936/marianka-logo_jo1a9u.png'
                alt=''
              ></img>
            </Link>
          </div>
          <div className='logoText'>
            <Link to='/'>
              <h1>Mariánka</h1>
              <p>Lesní mateřská škola v Brně-Líšni</p>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={
          navOpen ? 'navLinks sideNavActive sideNavSpacer' : 'navLinks'
        }
      >
        {/* 
        onClick={() => setNavOpen((navOpen) => (navOpen = false))} 
      */}
        <ul>
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                activeClassName='navLinkActive'
                className='navLink'
                to={link.path}
                onClick={subNavOpeningHandler}
                id={link.id}
              >
                <p>{link.name}</p>
              </NavLink>
              <ul className='subNav'>
                {link.subNavLinks.map((subLink) => (
                  <li
                    key={subLink.name}
                    className={
                      window.innerWidth < 768
                        ? subNavLinksOpen[link.id - 1]
                          ? 'subNavLi subNavActive'
                          : 'subNavLi'
                        : 'subNavLi'
                    }
                  >
                    <NavLink
                      className='navLink'
                      activeClassName='navLinkActive'
                      to={{ pathname: subLink.path }}
                    >
                      <p>{subLink.name}</p>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <div className='burger-container'>
        <div className='burger' onClick={() => setNavOpen(!navOpen)}>
          <div className='line1'></div>
          <div className='line2'></div>
          <div className='line3'></div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
