import { useLocation } from 'react-router-dom';
import { MdAccountCircle } from 'react-icons/md';
import { FaSearch } from 'react-icons/fa';
import { BsCollectionFill } from 'react-icons/bs';
import './Navbar.scss';

const usePathName = () => {
  const location = useLocation();
  return location.pathname;
}

const Navbar = () => {
  return (
    <header id="navbar">
      <nav>
        <ul className="menu-links">
          <li className={usePathName() === '/browse' ? 'menu-links-item current' : "menu-links-item"}>
            <a className="menu-link" href="/browse"><FaSearch /></a>
          </li>
          <li className={usePathName() === '/library' ? 'menu-links-item current' : "menu-links-item"}>
            <a className="menu-link" href="/library"><BsCollectionFill /></a>
          </li>
          <li className={usePathName() === '/account' ? 'menu-links-item current' : "menu-links-item"}>
            <a className="menu-link" href="/account"><MdAccountCircle /></a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar;