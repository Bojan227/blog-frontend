import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import React, { useState, useContext } from 'react';
import theme from '../images/theme-light-dark.png';
import github from '../images/github.png';
import linkedin from '../images/linkedin.png';
import twitter from '../images/twitter.png';
import menu from '../images/menu.png';
import { ThemeContext } from '../App';

const Nav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { toggleTheme } = useContext(ThemeContext);

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '-100%' },
  };

  return (
    <nav className="navigation-menu">
      <ul className="info-navigation">
        <li onClick={() => setToggleMenu(!toggleMenu)} className="menu">
          <img src={menu} alt="menu" />
        </li>
        <Link to="/" style={{ color: 'black' }}>
          <h1>Boki's Blog</h1>
        </Link>

        <li onClick={toggleTheme}>
          <img src={theme} alt="theme" />
        </li>
      </ul>

      <ul className="main-navigation">
        <div>
          <Link to="/">
            <li style={{ color: 'black' }}>Home</li>
          </Link>

          <li>Portfolio</li>
        </div>
        <div className="icons-container">
          <a
            href="https://github.com/Bojan227"
            target="_blank"
            rel="noreferrer"
          >
            <li>
              <img src={github} alt="github" />
            </li>
          </a>
          <a
            href="https://www.linkedin.com/in/bojanblazevski/"
            target="_blank"
            rel="noreferrer"
          >
            <li>
              <img src={linkedin} alt="linkedin" />
            </li>
          </a>
          <a
            href="https://twitter.com/b_blazevski"
            target="_blank"
            rel="noreferrer"
          >
            <li>
              <img src={twitter} alt="twitter" />
            </li>
          </a>
        </div>
      </ul>
      <motion.div
        animate={toggleMenu ? 'open' : 'closed'}
        variants={variants}
        className="side-menu"
      >
        <div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Link to="/">
              <li
                style={{ color: 'black' }}
                onClick={() => setToggleMenu(!toggleMenu)}
              >
                Home
              </li>
            </Link>
            <button
              style={{
                marginRight: '55px',
                backgroundColor: 'inherit',
                border: '0',
                fontSize: '1.5rem',
                cursor: 'pointer',
              }}
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              X
            </button>
          </div>
          <li>Portfolio</li>
        </div>
      </motion.div>
    </nav>
  );
};

export default Nav;
