import './estilos/tomos.css';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Routes, Route, Link, Navigate, useLocation} from 'react-router-dom';
import img from './tomos/hojas/hcero/hoja-a.webp';
import Cero from './tomos/cero.jsx';
import donaciones from '../assets/donar.png';
import x from '../assets/donarx.png';
import bandera from '../assets/arg.png';

const Tomos = () => {
    const location = useLocation(); // Detecta la ruta actual
    const [mostrarSubmenu, setMostrarSubmenu] = useState(false);

    const tarjetas = [
        {
            tomo: 'TOMO 0 (Especial)',
            titulo: 'UN EVENTO DECISIVO',
            image: [img],
            Cero: ['/Cero'],
            descrip: 'Este es un especial que explica qué evento desató una cadena de cambios en tiempos futuros.',
        },
    ];

    const esRutaCero = location.pathname.endsWith('/Cero');  // Detecta si estás en "/Cero"

    const toggleSubmenu = (e) => {
        e.preventDefault();
        setMostrarSubmenu((prev) => !prev);
    };//  evita el comportamiento por defecto del evento (por ejemplo, que un enlace <a> recargue la página o navegue a otra URL).
    
//DONACIONES:
    const ua = navigator.userAgent;
    const cbu = "1430001713046954610018";
    const dolarTag = "197328agosto";

    const BrubankClick = (e) => {
      e.preventDefault();

      let appUrl = "";
      let storeUrl = "";


      if (/Android/i.test(ua)) {
        // Intent en Android: abre la app si está instalada, si no → Play Store
        appUrl = "intent://brubank#Intent;scheme=brubank;package=com.brubank;end";
        storeUrl = "https://play.google.com/store/apps/details?id=com.brubank";
      } else if (/iPhone|iPad|iPod/i.test(ua)) {
        // En iOS se usa el esquema brubank:// y fallback a App Store
        appUrl = "brubank://";
        storeUrl = "https://apps.apple.com/ar/app/brubank/id1436487560";
      }  else {
        appUrl = "";
        storeUrl = "";
        // En desktop u otros sistemas → abrir web oficial en pestaña nueva
        window.open("https://www.brubank.com", "_blank", "noopener,noreferrer");
        return; // salir de la función para no ejecutar lo demás
      }

      // Intentar abrir la app en móviles
      const now = Date.now();
      window.location.href = appUrl;

      // Si no abre en ~1s, redirigir a la tienda
      setTimeout(() => {
        if (Date.now() - now < 1500 && storeUrl) {
          window.location.href = storeUrl;
        }
      }, 1000);

    // Mensaje informativo
      alert("CBU para transferir: " + cbu);
    };

    const DolarAPPClick = (e) => {
      e.preventDefault();

      let appUrl = "dolarapp://"; 
      let storeUrl = "";


      if (/Android/i.test(ua)) {
        storeUrl = "https://play.google.com/store/apps/details?id=com.dolarapp";
      } else if (/iPhone|iPad|iPod/i.test(ua)) {
        storeUrl = "https://apps.apple.com/ar/app/dolarapp/id1500916609";
      } else {
        // En desktop u otros sistemas → abrir web oficial en pestaña nueva
        window.open("https://www.dolarapp.com", "_blank", "noopener,noreferrer");
        return; // salir de la función para no ejecutar lo demás
      }

      // Intentar abrir la app en móviles
      const now = Date.now();
      window.location.href = appUrl;

      // Si no abre en ~1s, redirigir a la tienda
      setTimeout(() => {
        if (Date.now() - now < 1500 && storeUrl) {
          window.location.href = storeUrl;
        }
      }, 1000);

      alert("Dolar Tag para transferir: " + dolarTag);
    };
//_______________________________________

    return (
        <>
            <Routes>
                <Route path="Cero" element={
                    <>
                        <Helmet>
                            <title>Noticia - Tomo Cero</title>
                            <meta property="og:title" content="Tomo 0 (Especial) - Un Evento Decisivo" />
                            <meta property="og:description" content="Este es un especial que explica qué evento desató una cadena de cambios en tiempos futuros." />
                            <meta property="og:image" content="https://ot-vers-tiras.vercel.app/imagenes/noticia1.jpg" />
                            <meta property="og:url" content="https://ot-vers-tiras.vercel.app/Cero" />
                            <meta property="og:type" content="article" />
                            <meta name="twitter:card" content="summary_large_image" />
                            <meta name="twitter:title" content="Tomo 0 (Especial) - Un Evento Decisivo" />
                            <meta name="twitter:description" content="Este es un especial que explica qué evento desató una cadena de cambios en tiempos futuros." />
                            <meta name="twitter:image" content="https://ot-vers-tiras.vercel.app/imagenes/noticia1.jpg" />
                        </Helmet>
                        
                        <Cero />
                    </>
                } />
            </Routes>

            {!esRutaCero && ( //  Oculta la sección si la ruta es "/Cero"
                <section className="Tomos">
                    <h2>TODOS LOS TOMOS:</h2>

                    <div className="cartas">
                        {tarjetas.map((card, index) => {
                            const noHayEnlace = card.urlv === '#';
                            const almoadilla = noHayEnlace
                                ? { onClick: mantener, style: { cursor: 'default' } }
                                : { target: '_blank', href: card.urlv };
                                
                            return (
                                <div key={index} className="card">
                                    <h3 className="descripcion">{card.tomo}</h3>
                                    <h3 className="titulo">{card.titulo}</h3>
                                    <div className="img">
                                        <Link to="Cero">
                                            <img width="100%" src={card.image} alt={card.titulo} />
                                        </Link>
                                    </div>
                                    <p className="descripcion">{card.descrip}</p>

                                    <p className="enlaces" style={{ position: 'relative'}}>
                                        <button onClick={toggleSubmenu} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                                            <img
                                                width={mostrarSubmenu ? "30px" : "120px"}
                                                src={mostrarSubmenu ? x : donaciones}
                                                alt="donaciones"
                                                style={mostrarSubmenu ? {
                                                    position: 'absolute', 
                                                    top: 0,
                                                    right: 0,
                                                    zIndex: 10
                                                } : {}}
                                            />
                                        </button>

                                        {mostrarSubmenu && (
                                            <div className="submenu">
                                                <a href="https://www.brubank.com" 
                                                    target="_blank" rel="noopener noreferrer" 
                                                    onClick={BrubankClick} >
                                                        BRUBANK (<b>ARG</b>)
                                                </a>
                                                <a href="https://www.dolarapp.com" 
                                                    target="_blank" rel="noopener noreferrer" 
                                                    onClick={DolarAPPClick} >
                                                        DOLAR APP  (<b>INT</b>)
                                                </a>
                                                
                                            </div>
                                        )}
                                    </p>
                                </div>
                        );
                        })}
                    </div>
                </section>
            )}
        </>
    );
};

export default Tomos;