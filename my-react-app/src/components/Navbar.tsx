import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.scss'; // Import the SCSS module

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles['navbar-items']}>
        <li><Link to="/" className={styles.link}>Home</Link></li>
        <li><Link to="/events" className={styles.link}>Events</Link></li>
        <li><Link to="/contact" className={styles.link}>Contact</Link></li>
        <li className={styles.aboutElement}>
          <Link to="/about" className={styles.aboutElementText}>
            About <span className={styles['dropdown-arrow']}>&lt;</span>
          </Link>
          <ul className={styles.dropDownMenu}>
            <li><Link to="/statuten" className={styles.statutenText}>Statuten</Link></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;