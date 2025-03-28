import mainLogo from './images/mainLogo.svg';
import hamburgerMenu from './images/hamburgerMenu.svg';
import './Header.css';
import { useEffect, useRef, useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const darkLayer = useRef(null);

  const toggleMenu = (ev) => {
    ev.stopPropagation();
    setIsOpen(!isOpen)
  };

  const handleOutsideClick = (ev) => {
    
    if (darkLayer.current === ev.target) {
      console.log('outside click', ev.target);
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

  const navigateToSection = (sectionId) => {
    return (ev) => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    };
  }
  const prevent = (ev) => {
    ev.stopPropagation();
    ev.preventDefault();
  }

  return (
    <header-container>
      <img src={mainLogo} className='wanessaLogo' alt="Wanessa logo" />
      <button ref={buttonRef} onMouseDown={toggleMenu} onTouchStart={toggleMenu} className="hamburguer">
        <img src={hamburgerMenu} className='hamburgerMenu' alt="hamburger menu" />
      </button>

      <darken-layer ref={darkLayer} className={isOpen ? 'open' : ''}></darken-layer>

      <hamburger-container ref={menuRef} className={isOpen ? 'open' : ''}>
        <navigation-btn onMouseDown={navigateToSection('home')} onTouchStart={navigateToSection('home')} onClick={prevent} onTouchEnd={prevent}>Home</navigation-btn>
        <navigation-btn href="#section-id">Sintomas</navigation-btn>
        <navigation-btn href="#section-id">Como Funciona</navigation-btn>
        <navigation-btn href="#section-id">Depoimentos</navigation-btn>
        <navigation-btn href="#section-id">Sobre Mim</navigation-btn>
        <navigation-btn href="#section-id">Agendar</navigation-btn>
      </hamburger-container>
    </header-container>
  );
}

export default Header;
