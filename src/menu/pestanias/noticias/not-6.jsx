import '../estilos/blogdos.css'
import { useState} from 'react';
import perfil from '../../assets/integrados/SaiyanYulickAF/perfil.webp'
import portada from '../../assets/integrados/SaiyanYulickAF/portada.webp'
import boceto from '../../assets/integrados/SaiyanYulickAF/exploradoraboceto.webp'
import presentacion from '../../assets/integrados/SaiyanYulickAF/exploradora.webp'
import caracteristicas from '../../assets/integrados/SaiyanYulickAF/exploradorajotapegeotravez.webp'
import futer from '../../assets/integrados/exploradora.webp'

const Blog = () => {
  const textoIntro = `<b>La autora «Saiyan Yulick AF» nos ha enviado un nuevo personaje esta vez con unos datos, al cual denominamos «La Exploradora».<br/>`

  const subtitulo = `<b>Explica su autor:</b>`

  const textoRaza = `<b>Se sabe que es humana por su apariencia, es blanca, alvina de ojos celestes y su ropa blanca y negra.</b>No se sabe más al respecto`

  const textoIdioma = `<b>Diseño realizado por OtBot.</b>`

  const textoFinal = `<div class="headline-top"><b>¿Como aparecera la Mujer Ochentera en OT.VERS.?</b></div>
                      <div class="headline-bottom"><b>¡¡NO SE LO PIERDAN!!</b></div>`

  return (
    <div className="contenedor">
      <div className="acomodo">
        <img src={portada} alt="Portada" className="portadaimg" />
        <img src={perfil} alt="Perfil" className="perfilimg" />
      </div>

      <div className="introsection">
        <img src={boceto} alt="Boceto" className="bocetoimg" />
        <div className="introtext" dangerouslySetInnerHTML={{ __html: textoIntro }} />
      </div>

      <div className="sub">
        <div className="subtitulo" dangerouslySetInnerHTML={{ __html: subtitulo }} />
      </div>

      <div className="contenido">


        <div className="sectionleft">
          <div className="text" dangerouslySetInnerHTML={{ __html: textoRaza }} />
          <img src={presentacion} alt="Lilix" className="imgmedium" />
        </div>

        <div className="sectionbelow">
          <img src={caracteristicas} alt="Lilix Idioma" className="imgwide" />
          <div className="text" dangerouslySetInnerHTML={{ __html: textoIdioma }} />
        </div>

      </div>

      <div className="futer">

        <div className="sectionheadline">
          <img src={futer} alt="Lilix Saiyan" className="headlineimg" />
          <div className="headlinetext" dangerouslySetInnerHTML={{ __html: textoFinal }} />
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
        </div>
      </section>
          </article>
    )
  }
*/

