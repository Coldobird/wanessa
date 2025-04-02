import mainLogo from './images/mainLogo.svg';
import hamburgerMenu from './images/hamburgerMenu.svg';
import './Header.css';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [justOpened, setJustOpened] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const darkLayer = useRef(null);

  // Refs to track mouse/touch release and the time the transition started.
  const releaseRef = useRef(false);
  const transitionStartRef = useRef(0);
  const debounceTimeoutRef = useRef(null);
  const debounceDelay = 500; // Delay in ms after closing before re-opening is allowed

  // Use useLayoutEffect to measure header height after render
  useLayoutEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.getBoundingClientRect().height);
    }
  }, []);

  const transitionDuration = 500; // in ms (0.5s)
  const threshold = transitionDuration - 100; // 400ms threshold

  const toggleMenu = (ev) => {
    ev.stopPropagation();

    // Prevent opening if debounce is active (i.e. the menu was closed too recently)
    if (!isOpen && debounceTimeoutRef.current !== null) {
      console.log('Debounce active - ignoring toggle');
      return;
    }

    const newOpen = !isOpen;
    setIsOpen(newOpen);
    if (newOpen) {
      setJustOpened(true);
      releaseRef.current = false;
      transitionStartRef.current = Date.now();
    } else {
      // On close, start debounce timer so the button can't trigger an immediate re-open.
      if (debounceTimeoutRef.current !== null) {
        clearTimeout(debounceTimeoutRef.current);
      }
      debounceTimeoutRef.current = setTimeout(() => {
        debounceTimeoutRef.current = null;
      }, debounceDelay);
    }
  };

  // When the user releases the mouse or touch, check if the elapsed time
  // is at least the threshold. If not, wait the remaining time before clearing justOpened.
  const handleMouseUpOrTouchEnd = (ev) => {
    if (isOpen && justOpened) {
      releaseRef.current = true;
      const elapsed = Date.now() - transitionStartRef.current;
      if (elapsed >= threshold) {
        setJustOpened(false);
      } else {
        setTimeout(() => {
          if (releaseRef.current) {
            setJustOpened(false);
          }
        }, threshold - elapsed);
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

  const handleOutsideClick = (ev) => {
    if (
      ev.target.closest('hamburger-container') ||
      ev.target.closest('button.hamburguer')
    ) {
      return;
    }
    setIsOpen(false);
    // Also start debounce timer if the menu is closed via an outside click
    if (debounceTimeoutRef.current !== null) {
      clearTimeout(debounceTimeoutRef.current);
    }
    debounceTimeoutRef.current = setTimeout(() => {
      debounceTimeoutRef.current = null;
    }, debounceDelay);
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
      if (justOpened) return;
      const section = document.getElementById(sectionId);
      const root = document.getElementById('root');
      if (section) {
        const toScrollPosition =
          section.getClientRects()[0].top - headerHeight + root.scrollTop;
        root.scrollTo({ top: toScrollPosition, behavior: "smooth" });
        setIsOpen(false);
        // Start debounce timer on close via navigation as well.
        if (debounceTimeoutRef.current !== null) {
          clearTimeout(debounceTimeoutRef.current);
        }
        debounceTimeoutRef.current = setTimeout(() => {
          debounceTimeoutRef.current = null;
        }, debounceDelay);
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

      <hamburger-container
        ref={menuRef}
        className={isOpen ? 'open' : ''}
        style={{ transition: `transform cubic-bezier(0.075, 0.82, 0.165, 1) ${transitionDuration}ms` }}
      >
        <navigation-btn
          onMouseDown={navigateToSection('home')}
          onTouchStart={navigateToSection('home')}
        >
          FUNCIOANNANANNANA
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
