import mainLogo from './images/mainLogo.svg';
import hamburgerMenu from './images/hamburgerMenu.svg';
import './Header.css';
import { useEffect, useRef, useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = (ev) => {
    ev.stopPropagation();
    setIsOpen(!isOpen)
  };
  const handleOutsideClick = (ev) => {
    if (menuRef.current && !menuRef.current.contains(ev.target) && !buttonRef.current.contains(ev.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, [])

  return (
    <header-container>
      <img src={mainLogo} className='wanessaLogo' alt="Wanessa logo" />
      <button ref={buttonRef} onMouseDown={toggleMenu} onTouchStart={toggleMenu} className="hamburguer">
        <img src={hamburgerMenu} className='hamburgerMenu' alt="hamburger menu" />
      </button>

      <hamburger-container ref={menuRef} className={isOpen ? 'open' : ''}>
        <a href="#section-id">Home</a>
        <a href="#section-id">Home</a>
      </hamburger-container>
    </header-container>
  );
}

export default Header;
