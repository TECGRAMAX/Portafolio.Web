import '../estilos/blog.css'
import { useState} from 'react';
import { Helmet } from 'react-helmet-async';
import perfil from '../../assets/integrados/blog/tpd-a.webp'
import portada from '../../assets/integrados/blog/tpd-b.webp'
import boceto from '../../assets/integrados/blog/lilixsketch.webp'
import lilix from '../../assets/integrados/blog/lilix-c.webp'
import lilixidioma from '../../assets/integrados/blog/lilix-d.webp'
import lilixhabilidad from '../../assets/integrados/blog/lilix-b.webp'
import lilixsaiyan from '../../assets/integrados/lilix.webp'

const Blog = () => {
  const textoIntro = `<b>Gracias al permiso del autor y su marca «The piggy draws» será añadida a otvers su personaje «Lilix de Polymyr».<br/>
    Se ha llegado a un acuerdo con la marca para incluir a la «extraterrestre Lilix» en otvers.</b>`

  const subtitulo = `<b>Explica su autor:</b>`

  const textoRaza = `<b>De la raza Polymyr, raza actualmente casi extinta, solo quedan unos cuantos y lilix.</b>`

  const textoIdioma = `<b>El lenguaje particularmente de Lilix, es absurdamente técnico y detallado.</b>`

  const textoHabilidad = `<b>La composición corporal de su especie es libre del componente mineral óseo, siendo así de una masa libre y fácilmente moldeable; también cambia o modifica a voluntad la melamina de su cuerpo, adquiriendo el color que desee tanto en cabello o piel.</b>`

  const textoFinal = `<div class="headline-top"><b>¿Como aparecera Lilix en OT.VERS.?</b></div>
                      <div class="headline-bottom"><b>¡¡NO SE LO PIERDAN!!</b></div>`

  return (
    <div className="blog">
      <Helmet>
        <title>Blog - Lilix en OT.VERS</title>
        <meta property="og:title" content="Lilix de Polymyr en OT.VERS" />
        <meta property="og:description" content="Conoce a Lilix, personaje de la marca The Piggy Draws, ahora integrado en OT.VERS. Descubre su historia, habilidades y más." />
        <meta property="og:image" content="https://ot-vers-tiras.vercel.app/imagenes/lilix-portada.jpg" />
        <meta property="og:url" content="https://ot-vers-tiras.vercel.app/Blog" />
        <meta property="og:type" content="article" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Lilix de Polymyr en OT.VERS" />
        <meta name="twitter:description" content="Conoce a Lilix, personaje de la marca The Piggy Draws, ahora integrado en OT.VERS. Descubre su historia, habilidades y más." />
        <meta name="twitter:image" content="https://ot-vers-tiras.vercel.app/imagenes/lilix-portada.jpg" />
      </Helmet>
      <div className="presentacion">
        <img src={portada} alt="Portada" className="imgportada" />
        <img src={perfil} alt="Perfil" className="imgperfil" />
      </div>

      <div className="seccionint">
        <img src={boceto} alt="Boceto" className="imgboceto"  />
        <div className="textoint" dangerouslySetInnerHTML={{ __html: textoIntro }} />
      </div>

      <div className="autor">
        <div className="explica" dangerouslySetInnerHTML={{ __html: subtitulo }} />
      </div>

      <div className="mediosec">


        <div className="secderecha">
          <div className="texto" dangerouslySetInnerHTML={{ __html: textoRaza }} />
          <img src={lilix} alt="Lilix" className="imgmedio" />
        </div>

        <div className="amplio">
          <img src={lilixidioma} alt="Lilix Idioma" className="imgwide" />
          <div className="texto" dangerouslySetInnerHTML={{ __html: textoIdioma }} />
        </div>

        <div className="sectionbelow">
          <img src={lilixhabilidad} alt="Lilix Habilidad" className="imgamp" />
          <div className="text" dangerouslySetInnerHTML={{ __html: textoHabilidad }} />
        </div>

      </div>

      <div className="fondoprin">

        <div className="fondo">
          <img src={lilixsaiyan} alt="Lilix Saiyan" className="fondoimg" />
          <div className="fondotexto" dangerouslySetInnerHTML={{ __html: textoFinal }} />
        </div>

      </div>

    </div>
  )
}

export default Blog







/*
   // Estado para el efecto de "escribir"
    const [texto, setTexto] = useState("")

    useEffect(() => {
      let i = 0
      const intervalo = setInterval(() => {
        setTexto(textoCompleto.slice(0, i))
        i++
        if (i > textoCompleto.length) clearInterval(intervalo)
      }, 50) // velocidad de escritura (ms)
      return () => clearInterval(intervalo)
    }, [])

    return (
      <section className="Noticias">
        <div className="blog-container">
          {/* Imagen en la esquina superior izquierda *//*
          <img src={lilix} alt="Lilix de Polymyr" width='500px' />

          {/* Texto con efecto de escritura *//*
          <article className="blog-text">
            <p>{texto}</p>
          </article>
        </div>
      </section>
    )
  }
*/

