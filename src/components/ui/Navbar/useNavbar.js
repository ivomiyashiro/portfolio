import { useCallback, useEffect, useState } from 'react';

export const useNavbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isContentVisible, setContentVisible] = useState(false);
  const [isWindowOnTop, setWindowOnTop] = useState(true);

  const controlNavbar = useCallback(() => {
    if (typeof window !== 'undefined') { 
      if (window.scrollY > lastScrollY) {
        setShow(false); 
      } else {
        setShow(true);  
      }
      setLastScrollY(window.scrollY); 
    }
  }, [lastScrollY]);

  useEffect(() => {
    if (typeof window !== 'undefined' && !isMobileMenuOpen) {
      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY, controlNavbar, isMobileMenuOpen]);

  useEffect(() => {
    window.onscroll = () =>
      window.pageYOffset === 0 
        ? setWindowOnTop(true)
        : setWindowOnTop(false);

    return () => (window.onscroll = null);
  }, []);

  const toggleMenuVisibility = () => {
    setContentVisible(prev => !prev);
    
    if (!isMobileMenuOpen) {
      return setMobileMenuOpen(true);
    }

    setTimeout(() => {
      setMobileMenuOpen(prev => !prev);
    }, 200);

  };

  return {
    show,
    isMobileMenuOpen,
    isContentVisible,
    isWindowOnTop,
    toggleMenuVisibility,
  };
};
