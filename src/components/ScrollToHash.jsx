import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ScrollToHash() {
  const location = useLocation();
  const navigate = useNavigate();
  const firstLoad = useRef(true);
  const navbarHeight = 80; // altezza della navbar fissa, modifica se serve

  useEffect(() => {
    // Alla prima render (caricamento), scroll in cima pagina
    if (firstLoad.current) {
      window.scrollTo(0, 0);
      firstLoad.current = false;
      return;
    }

    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);

      if (el) {
        setTimeout(() => {
          // Calcola posizione con offset per navbar fissa
          const yOffset = -navbarHeight;
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;

          window.scrollTo({ top: y, behavior: "smooth" });

          // Rimuove hash dall'URL senza ricaricare la pagina
          window.history.replaceState(null, "", location.pathname + location.search);
          
          // Alternativa con react-router navigate
          // navigate(location.pathname + location.search, { replace: true });
        }, 100);
      }
    }
  }, [location, navigate]);

  return null;
}

export default ScrollToHash;
