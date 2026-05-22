import '../estilos/blogtres.css'
import { useState} from 'react';
import perfil from '../../assets/integrados/SaiyanJeanPride/perfil.webp'
import portada from '../../assets/integrados/SaiyanJeanPride/portada.webp'
import boceto from '../../assets/integrados/SaiyanJeanPride/jeanboceto.webp'
import jean from '../../assets/integrados/SaiyanJeanPride/jean.webp'
import jeanuno from '../../assets/integrados/SaiyanJeanPride/jeansegundo.webp'
import jeandos from '../../assets/integrados/SaiyanJeanPride/jeantercero.webp'
import jeantres from '../../assets/integrados/jeanprin.webp'

const Blog = () => {
  const textoIntro = `<b>Gracias al permiso del autor y su marca «SAYAN PRIDE» será añadido a otvers el primer guerrero SAYAN «Jean».<br/>
    Saiyan futurista con buena conducta.</b>`

  const subtitulo = `<b>Explica su autor:</b>`

  const textoRaza = `<b>De la raza Saiyan en el año 3031, donde la pronunciación cambió a «Sayan» del planeta Vegeta (Ajeno al planeta Vegeta del canon), bajo el regente del universo Acit.</b>`

  const textoIdioma = `<b>En esta línea la Transformación del Super Saiyan Ordinario, es muy común.</b> Diseño por Otbot`

  const textoHabilidad = `<b>Para aumentar su control de la misma, a Jean le ordenan viajar a la tierra en la misión de «estar de vacaciones» donde entrena con Kamisama</b> Diseño por Otbot`

  const textoFinal = `<div class="headline-top"><b>¿Como aparecera JEAN en OT.VERS.?</b></div>
                      <div class="headline-bottom"><b>¡¡NO SE LO PIERDAN!!</b></div>`

  return (
    <div className="blogjean">
      <div className="presentacion">
        <img src={portada} alt="Portada" className="imgportada" />
        <img src={perfil} alt="Perfil" className="imgperfil" />
      </div>

      <div className="secboce">
        <img src={boceto} alt="Boceto" className="imgboceto"  />
        <div className="textoint" dangerouslySetInnerHTML={{ __html: textoIntro }} />
      </div>

      <div className="autoria">
        <div className="explica" dangerouslySetInnerHTML={{ __html: subtitulo }} />
      </div>

      <div className="centro">
        <div className="secderecha">
          <div className="texto" dangerouslySetInnerHTML={{ __html: textoRaza }} />
          <img src={jean} alt="Lilix" className="imgmedio" />
        </div>

        <div className="grande">
          <img src={jeanuno} alt="Lilix Idioma" className="imgwide" />
          <div className="texto" dangerouslySetInnerHTML={{ __html: textoIdioma }} />
        </div>

        <div className="otrogrande">
          <img src={jeandos} alt="Lilix Habilidad" className="imgamp" />
          <div className="text" dangerouslySetInnerHTML={{ __html: textoHabilidad }} />
        </div>

      </div>

      <div className="princip">
        <div className="fondo">
          <img src={jeantres} alt="Lilix Saiyan" className="fondoimg" />
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

