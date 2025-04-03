import mainLogo from './images/mainLogo.svg';
import hamburgerMenu from './images/hamburgerMenu.svg';
import './Header.css';
import { useEffect, useLayoutEffect, useRef, useState, useCallback } from 'react';

function Header() {
  // Detect if the device supports touch
  const isTouchDevice =
    typeof window !== 'undefined' &&
    ('ontouchstart' in window || navigator.maxTouchPoints > 0);

  const [isOpen, setIsOpen] = useState(false);
  const [justOpened, setJustOpened] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const darkLayer = useRef(null);

  // Refs to track the release status and transition timing.
  const releaseRef = useRef(false);
  const transitionStartRef = useRef(0);
  const debounceTimeoutRef = useRef(null);

  useLayoutEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.getBoundingClientRect().height);
    }
  }, []);

  const transitionDuration = 500; // in ms (0.5s)
  const threshold = transitionDuration - 200;

  // Returns the scrolling element.
  const logScrollTarget = () => {
    return document.scrollingElement || document.documentElement;
  };

  const toggleMenu = (ev) => {
    ev.stopPropagation();

    // Only trigger toggle if debounce is not active.
    if (!isOpen && debounceTimeoutRef.current !== null) {
      return;
    }
    const newOpen = !isOpen;
    setIsOpen(newOpen);
    if (newOpen) {
      setJustOpened(true);
      releaseRef.current = false;
      transitionStartRef.current = Date.now();
    } else {
      if (debounceTimeoutRef.current !== null) {
        clearTimeout(debounceTimeoutRef.current);
      }
      debounceTimeoutRef.current = setTimeout(() => {
        debounceTimeoutRef.current = null;
      }, threshold);
    }
  };

  // This effect resets the "justOpened" flag after the proper delay.
  const handleMouseUpOrTouchEnd = useCallback((ev) => {
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
  }, [isOpen, justOpened, threshold]);

  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUpOrTouchEnd);
    document.addEventListener('touchend', handleMouseUpOrTouchEnd);
    return () => {
      document.removeEventListener('mouseup', handleMouseUpOrTouchEnd);
      document.removeEventListener('touchend', handleMouseUpOrTouchEnd);
    };
  }, [handleMouseUpOrTouchEnd]);

  // Outside click handler.
  const handleOutsideClick = useCallback((ev) => {
    if (
      ev.target.closest('hamburger-container') ||
      ev.target.closest('button.hamburguer')
    ) {
      return;
    }
    setIsOpen(false);
    if (debounceTimeoutRef.current !== null) {
      clearTimeout(debounceTimeoutRef.current);
    }
    debounceTimeoutRef.current = setTimeout(() => {
      debounceTimeoutRef.current = null;
    }, threshold);
  }, [threshold]);

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('touchstart', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, [handleOutsideClick]);

  // Navigation: only trigger on the first touch.
  const navigateToSection = (sectionId) => {
    return (ev) => {
      if (justOpened) return;
      const section = document.getElementById(sectionId);
      const scrollContainer = logScrollTarget();
      if (section) {
        const toScrollPosition =
          section.getClientRects()[0].top -
          headerHeight +
          scrollContainer.scrollTop;
        scrollContainer.scrollTo({ top: toScrollPosition, behavior: "smooth" });
        setIsOpen(false);
        if (debounceTimeoutRef.current !== null) {
          clearTimeout(debounceTimeoutRef.current);
        }
        debounceTimeoutRef.current = setTimeout(() => {
          debounceTimeoutRef.current = null;
        }, threshold);
      }
    };
  };

  return (
    <header-container ref={headerRef}>
      <img src={mainLogo} className="wanessaLogo" alt="Wanessa logo" />
      <button
        ref={buttonRef}
        // On touch devices, only attach onTouchStart to prevent duplicate events.
        {...(isTouchDevice
          ? { onTouchStart: toggleMenu }
          : { onMouseDown: toggleMenu })}
        className="hamburguer"
      >
        <img src={hamburgerMenu} className="hamburgerMenu" alt="hamburger menu" />
      </button>

      <darken-layer ref={darkLayer} className={isOpen ? 'open' : ''}></darken-layer>

      <hamburger-container
        ref={menuRef}
        className={isOpen ? 'open' : ''}
        style={{
          transition: `transform cubic-bezier(0.075, 0.82, 0.165, 1) ${transitionDuration}ms`
        }}
      >
        <navigation-btn
          {...(isTouchDevice
            ? { onTouchStart: navigateToSection('home') }
            : { onMouseDown: navigateToSection('home') })}
        >
          Home
        </navigation-btn>
        <navigation-btn
          {...(isTouchDevice
            ? { onTouchStart: navigateToSection('sintomas') }
            : { onMouseDown: navigateToSection('sintomas') })}
        >
          Sintomas
        </navigation-btn>
        <navigation-btn
          {...(isTouchDevice
            ? { onTouchStart: navigateToSection('como-funciona') }
            : { onMouseDown: navigateToSection('como-funciona') })}
        >
          Como Funciona
        </navigation-btn>
        <navigation-btn
          {...(isTouchDevice
            ? { onTouchStart: navigateToSection('depoimentos') }
            : { onMouseDown: navigateToSection('depoimentos') })}
        >
          Depoimentos
        </navigation-btn>
        <navigation-btn
          {...(isTouchDevice
            ? { onTouchStart: navigateToSection('sobre-mim') }
            : { onMouseDown: navigateToSection('sobre-mim') })}
        >
          Sobre Mim
        </navigation-btn>
        <navigation-btn
          {...(isTouchDevice
            ? { onTouchStart: navigateToSection('agendar') }
            : { onMouseDown: navigateToSection('agendar') })}
        >
          Agendar
        </navigation-btn>
      </hamburger-container>
    </header-container>
  );
}

export default Header;
