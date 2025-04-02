import mainLogo from './images/mainLogo.svg';
import hamburgerMenu from './images/hamburgerMenu.svg';
import './Header.css';
import { useEffect, useRef, useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [justOpened, setJustOpened] = useState(false);
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const darkLayer = useRef(null);
  const headerheight = headerRef.current.getBoundingClientRect().height

  // Refs to track the mouse/touch release and animation end
  const releaseRef = useRef(false);
  const transitionEndedRef = useRef(false);

  const toggleMenu = (ev) => {
    ev.stopPropagation();
    const newOpen = !isOpen;
    setIsOpen(newOpen);
    if (newOpen) {
      setJustOpened(true);
      // Reset both flags when opening
      releaseRef.current = false;
      transitionEndedRef.current = false;
    }
  };

  // Clear the justOpened flag only when both the mouse/touch has been released
  // and the menu animation has ended
  const handleMouseUpOrTouchEnd = (ev) => {
    if (isOpen && justOpened) {
      releaseRef.current = true;
      if (transitionEndedRef.current) {
        setJustOpened(false);
      }
    }
  };

  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUpOrTouchEnd);
    document.addEventListener('touchend', handleMouseUpOrTouchEnd);
    return () => {
      document.removeEventListener('mouseup', handleMouseUpOrTouchEnd);
      document.removeEventListener('touchend', handleMouseUpOrTouchEnd);
    };
  }, [isOpen, justOpened]);

  // Listen for the transition end on the hamburger container
  useEffect(() => {
    const menuElement = menuRef.current;
    if (isOpen && menuElement) {
      const handleTransitionEnd = (ev) => {
        if (isOpen && justOpened) {
          transitionEndedRef.current = true;
          if (releaseRef.current) {
            setJustOpened(false);
          }
        }
      };

      menuElement.addEventListener('transitionend', handleTransitionEnd);
      return () => {
        menuElement.removeEventListener('transitionend', handleTransitionEnd);
      };
    }
  }, [isOpen, justOpened]);

  const handleOutsideClick = (ev) => {
    if (
      ev.target.closest('hamburger-container') ||
      ev.target.closest('button.hamburguer')
    ) {
      return;
    }
    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, []);

  const navigateToSection = (sectionId) => {
    return (ev) => {
      if (justOpened) return
      const section = document.getElementById(sectionId);
      const root = document.getElementById('root');
      if (section) {
        const toScrollPosition = section.getClientRects()[0].top - headerheight + root.scrollTop;
        root.scrollTo({ top: toScrollPosition, behavior: "smooth" });
        setIsOpen(false);
      }
    };
  };

  return (
    <header-container ref={headerRef}>
      <img src={mainLogo} className="wanessaLogo" alt="Wanessa logo" />
      <button
        ref={buttonRef}
        onMouseDown={toggleMenu}
        onTouchStart={toggleMenu}
        className="hamburguer"
      >
        <img src={hamburgerMenu} className="hamburgerMenu" alt="hamburger menu" />
      </button>

      <darken-layer ref={darkLayer} className={isOpen ? 'open' : ''}></darken-layer>

      <hamburger-container ref={menuRef} className={isOpen ? 'open' : ''}>
        <navigation-btn
          onMouseDown={navigateToSection('home')}
          onTouchStart={navigateToSection('home')}
        >
          Home
        </navigation-btn>
        <navigation-btn
          onMouseDown={navigateToSection('sintomas')}
          onTouchStart={navigateToSection('sintomas')}
        >
          Sintomas
        </navigation-btn>
        <navigation-btn
          onMouseDown={navigateToSection('como-funciona')}
          onTouchStart={navigateToSection('como-funciona')}
        >
          Como Funciona
        </navigation-btn>
        <navigation-btn
          onMouseDown={navigateToSection('depoimentos')}
          onTouchStart={navigateToSection('depoimentos')}
        >
          Depoimentos
        </navigation-btn>
        <navigation-btn
          onMouseDown={navigateToSection('sobre-mim')}
          onTouchStart={navigateToSection('sobre-mim')}
        >
          Sobre Mim
        </navigation-btn>
        <navigation-btn
          onMouseDown={navigateToSection('agendar')}
          onTouchStart={navigateToSection('agendar')}
        >
          Agendar
        </navigation-btn>
      </hamburger-container>
    </header-container>
  );
}

export default Header;
