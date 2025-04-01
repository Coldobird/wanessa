import mainLogo from './images/mainLogo.svg';
import hamburgerMenu from './images/hamburgerMenu.svg';
import './Header.css';
import { useEffect, useRef, useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [justOpened, setJustOpened] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const darkLayer = useRef(null);

  // Refs to track the mouse/touch release and animation end
  const releaseRef = useRef(false);
  const transitionEndedRef = useRef(false);

  const toggleMenu = (ev) => {
    ev.stopPropagation();
    console.log('toggleMenu triggered. Event type:', ev.type);
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
    console.log('MouseUp/TouchEnd triggered:', ev.type);
    if (isOpen && justOpened) {
      releaseRef.current = true;
      if (transitionEndedRef.current) {
        console.log('Both mouse release and transition ended. Clearing justOpened.');
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
        console.log('Transition ended on menu:', ev.propertyName);
        if (isOpen && justOpened) {
          transitionEndedRef.current = true;
          if (releaseRef.current) {
            console.log('Both mouse release and transition ended (in transition event). Clearing justOpened.');
            setJustOpened(false);
          }
        }
      };

      menuElement.addEventListener('transitionend', handleTransitionEnd);

      // Clean up the listener when isOpen changes or on unmount
      return () => {
        menuElement.removeEventListener('transitionend', handleTransitionEnd);
      };
    }
  }, [isOpen, justOpened]);

  const handleOutsideClick = (ev) => {
    console.log('handleOutsideClick triggered. Event type:', ev.type, 'ev.target:', ev.target);
    // Ignore clicks inside the hamburger container or on the hamburger button
    if (
      ev.target.closest('hamburger-container') ||
      ev.target.closest('button.hamburguer')
    ) {
      console.log('Clicked inside a protected element; ignoring.');
      return;
    }
    console.log('Outside click detected, closing menu.');
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
      console.log(
        'Navigation button clicked. Section:',
        sectionId,
        'Event type:',
        ev.type,
        'justOpened:',
        justOpened
      );
      if (justOpened) {
        console.log('Ignoring navigation due to justOpened flag.');
        return;
      }
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    };
  };

  const prevent = (ev) => {
    ev.stopPropagation();
    ev.preventDefault();
  };

  return (
    <header-container>
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
          onClick={prevent}
          onTouchEnd={prevent}
        >
          Home
        </navigation-btn>
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
