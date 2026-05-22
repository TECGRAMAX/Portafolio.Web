import './estilos/noticias.css'
import lilix from '../assets/integrados/lilix.webp'
import parika from '../assets/integrados/blog/Parikapres.png'
import tpd from '../assets/integrados/tpd-b.webp'
import syaf from '../assets/integrados/SaiyanYulickAF/portada.webp'
import pride from '../assets/integrados/SaiyanJeanPride/portada.webp'
import javier from '../assets/integrados/JavierRosero/portada.webp'

import mellizas from '../assets/integrados/mellizas.webp'
import reina from '../assets/integrados/reina.webp'
import oche from '../assets/integrados/ochentera.webp'
import exp from '../assets/integrados/exploradora.webp'
import jean from '../assets/integrados/jeanprin.webp'
import atreintaicinco from '../assets/integrados/a35prin.webp'
import img1 from '../assets/actomos.png'

import NotUno from './noticias/not-1.jsx'
import NotDos from './noticias/not-2.jsx'
import NotTres from './noticias/not-3.jsx'
import NotCuatro from './noticias/not-4.jsx'
import NotCinco from './noticias/not-5.jsx'
import NotSeis from './noticias/not-6.jsx'
import NotSiete from './noticias/not-7.jsx'
import NotOcho from './noticias/not-8.jsx'

import facebookLogo from '../assets/facebook.png'
import instagramLogo from '../assets/instagram.png'
import xLogo from '../assets/donarx.png'
import gsites from '../assets/sites.png'

import { Routes, Route, useLocation, Link } from 'react-router-dom'

const Noticias = () => {
  const tarjetas = [
    {
      titular: 'EL ANDROIDE 35',
      subtitulo: 'Personaje perteneciente a «JAVIER ROSERO»',
      noticia: 'Un nuevo personaje ha sido incluído a Otvers. Esta vez del autor «JAVIER ROSERO», un androide hubicado luego de la saga de Moro en Dragonball Super.',
      image: atreintaicinco,
      autorImg: javier,
      redes: [
        { href: 'https://www.facebook.com/jaiver.rosero.731798', logo: facebookLogo, alt: 'Facebook' },
      ],
      abreNot: true,
      ruta: 'NotOcho',
    },
    {
      titular: 'Saiyagin Jean',
      subtitulo: 'Personaje de la marca «JEAN SAYAN PRIDE».',
      noticia:
        'Se ha llegado a un acuerdo con la marca para incluir a «Jean» en otvers. De la raza «Sayan» ambientado en planeta Vegeta en el año 3031, bajo el regente del universo Acit.',
      image: jean,
      autorImg: pride,
      redes: [
        { href: 'https://www.facebook.com/jeanpiere.apaza.3', logo: facebookLogo, alt: 'Facebook' },
        { href: 'https://www.instagram.com/sayan_pride', logo: instagramLogo, alt: 'Instagram' },
        { href: 'https://sites.google.com/view/sayan-pride-manga/cap%C3%ADtulos-a-color', logo: gsites, alt: 'google-sites' },
      ],
      abreNot: true,
      ruta: 'NotSiete',
    },
    {
      titular: 'SEÑORITA EXPLORADORA',
      subtitulo: 'Personaje perteneciente a «SAIYAN Yulick AF»',
      noticia: 'Un nuevo personaje ha sido incluído a Otvers. Nuevamente de «Saiyan Yulick AF», un personaje algo descuidado en apariencia.',
      image: exp,
      autorImg: syaf,
      redes: [
        { href: 'https://www.facebook.com/makio.jinatzuru', logo: facebookLogo, alt: 'Facebook' },
      ],
      abreNot: true,
      ruta: 'NotSeis',
    },
    {
      titular: 'SEÑORITA CON DISEÑO OCHENTERO',
      subtitulo: 'Personaje perteneciente a «SAIYAN Yulick AF»',
      noticia: 'Un nuevo personaje ha sido incluído a Otvers. Nuevamente de «Saiyan Yulick AF», un personaje que muestra elegancia.',
      image: oche,
      autorImg: syaf,
      redes: [
        { href: 'https://www.facebook.com/makio.jinatzuru', logo: facebookLogo, alt: 'Facebook' },
      ],
      abreNot: true,
      ruta: 'NotCinco',
    },
    {
      titular: 'REINA NO HUMANA',
      subtitulo: 'Personaje perteneciente a «SAIYAN Yulick AF»',
      noticia: 'Un nuevo personaje ha sido incluído a Otvers. Nuevamente de «Saiyan Yulick AF», un personaje que inspira respeto y cultura.',
      image: reina,
      autorImg: syaf,
      redes: [
        { href: 'https://www.facebook.com/makio.jinatzuru', logo: facebookLogo, alt: 'Facebook' },
      ],
      abreNot: true,
      ruta: 'NotCuatro',
    },
    {
      titular: 'MELLIZAS HÍBRIDAS',
      subtitulo: 'Personaje perteneciente a «SAIYAN Yulick AF»',
      noticia: 'Un par de hermanas han sido incluídas a Otvers. Esta vez de un nuevo autor, dos personajes con similitud a un personaje muy conocido',
      image: mellizas,
      autorImg: syaf,
      redes: [
        { href: 'https://www.facebook.com/makio.jinatzuru', logo: facebookLogo, alt: 'Facebook' },
      ],
      abreNot: true,
      ruta: 'NotTres',
    },
    {
      titular: 'MUJER SAIYAN',
      subtitulo: 'Personaje de la marca «THE PIGGY DRAWS».',
      noticia: 'Un Nuevo personaje ha llegado a OtVers, nuevamente de parte de la marca «The piggy draws», una mujer «saiyagin» con diseño renovado.',
      image: parika,
      autorImg: tpd,
      redes: [
        { href: 'https://www.facebook.com/profile.php?id=61575106370554', logo: facebookLogo, alt: 'Facebook' },
        { href: 'https://www.instagram.com/the.piggy.draws', logo: instagramLogo, alt: 'Instagram' },
        { href: 'https://twitter.com/thepiggydraws', logo: xLogo, alt: 'X/Twitter' },
      ],
      abreNot: true,
      ruta: 'NotDos',
    },
    {
      titular: 'Lilix de Polymyr',
      subtitulo: 'Personaje de la marca «THE PIGGY DRAWS».',
      noticia:
        'Se ha llegado a un acuerdo con la marca para incluir a «Lilix» en otvers. Una extraterrestre de la raza «Polymyr», de composición corporal libre del componente mineral óseo, siendo una masa libre y fácilmente moldeable; también cambia o modifica a voluntad la melamina de su cuerpo.',
      image: lilix,
      autorImg: tpd,
      redes: [
        { href: 'https://www.facebook.com/profile.php?id=61575106370554', logo: facebookLogo, alt: 'Facebook' },
        { href: 'https://www.instagram.com/the.piggy.draws', logo: instagramLogo, alt: 'Instagram' },
        { href: 'https://twitter.com/thepiggydraws', logo: xLogo, alt: 'X/Twitter' },
      ],
      abreNot: true,
      ruta: 'NotUno',
    },
    {
      titular: 'TITULO',
      subtitulo: 'Subtítulo',
      noticia: 'NOTICIA ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ... ...',
      image: img1,
      autorImg: null,
      redes: [],
      abreNot: false,
    },
    ]

  const location = useLocation()
  const esRutaNot =
    location.pathname.includes('/Noticias/NotUno') ||
    location.pathname.includes('/Noticias/NotDos') ||
    location.pathname.includes('/Noticias/NotTres') ||
    location.pathname.includes('/Noticias/NotCuatro') ||
    location.pathname.includes('/Noticias/NotCinco') ||
    location.pathname.includes('/Noticias/NotSeis') ||
    location.pathname.includes('/Noticias/NotSiete') ||
    location.pathname.includes('/Noticias/NotOcho')

  return (
    <>
      <Routes>
        <Route path="NotUno" element={<NotUno />} />
        <Route path="NotDos" element={<NotDos />} />
        <Route path="NotTres" element={<NotTres />} />
        <Route path="NotCuatro" element={<NotCuatro />} />
        <Route path="NotCinco" element={<NotCinco />} />
        <Route path="NotSeis" element={<NotSeis />} />
        <Route path="NotSiete" element={<NotSiete />} />
        <Route path="NotOcho" element={<NotOcho />} />
      </Routes>

      {!esRutaNot && (
        <section className="Noticias">
          <h2>TODAS LAS NOTICIAS:</h2>
          <div className="cartas">
            {tarjetas.map((card, index) => (
              <div key={index} className="carta">
                <article className="titular">
                  <h1>{card.titular}</h1>
                  <h2>{card.subtitulo}</h2>
                </article>

                <div className="noticia">
                  {card.abreNot && card.ruta ? (
                    <Link to={card.ruta}>
                      <img src={card.image} alt={card.titular} />
                    </Link>
                  ) : (
                    <img src={card.image} alt={card.titular} />
                  )}

                  <article className="articulo">
                  
                    <h2>{card.noticia}</h2>
                    {card.autorImg && (
                      <p className="autor">
                        <img className="autorImg" src={card.autorImg} alt="Autor" />
                      </p>
                    )}
                    <div className="redes">
                      {card.redes.map((red, i) => (
                        <a key={i} href={red.href} target="_blank" rel="noopener noreferrer">
                          <img src={red.logo} alt={red.alt} className="redImg" />
                        </a>
                      ))}
                    </div>

                  </article>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  )
}

export default Noticias