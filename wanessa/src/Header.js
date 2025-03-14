import mainLogo from './images/mainLogo.svg';
import hamburgerMenu from './images/hamburgerMenu.svg';
import './Header.css';

function Header() {
  return (
    <header-container>
        <img src={mainLogo} className='wanessaLogo' alt="Wanessa logo" />
        <button className="hamburguer">
          <img src={hamburgerMenu} className='hamburgerMenu' alt="hamburger menu" />
        </button>
    </header-container>
  );
}

export default Header;
