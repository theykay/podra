import { NavLink } from 'react-router-dom';
import { MdAccountCircle } from 'react-icons/md';
import { FaSearch } from 'react-icons/fa';
import { BsCollectionFill } from 'react-icons/bs';
import './Navbar.scss';

const Navbar = () => {
  return (
    <header id="navbar">
      <nav>
        <ul className="menu-links">
          <li className="menu-links-item">
            <NavLink to='browse' className="menu-link" activeClassName="current"><FaSearch /></NavLink>
          </li>
          <li className="menu-links-item">
            <NavLink to='library' className="menu-link" activeClassName="current"><BsCollectionFill /></NavLink>
          </li>
          <li className="menu-links-item">
            <NavLink to='account' className="menu-link" activeClassName="current"><MdAccountCircle /></NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar;