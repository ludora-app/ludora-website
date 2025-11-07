import { useEffect, useState } from 'react';

const BREAKPOINT = 768;

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= BREAKPOINT);
    };

    // Exécute une fois au
    checkScreenSize();

    // Mets à jour à chaque resize
    window.addEventListener('resize', checkScreenSize);

    // Nettoyage de l'event listener
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return { isMobile };
};

export default useIsMobile;
