import '../estilos/blog.css'
import { useState} from 'react';
import perfil from '../../assets/integrados/blog/tpd-a.webp'
import portada from '../../assets/integrados/blog/tpd-b.webp'
import boceto from '../../assets/integrados/blog/parikaboc.jpg'
import parika from '../../assets/integrados/blog/Parika.png'
import parikacompleta from '../../assets/integrados/blog/Parikafondo.png'
import fondo from '../../assets/integrados/blog/Parikapres.png'

const Blog = () => {
  const textoIntro = `<b>El autor y su marca «The piggy draws» nos trajo voluntariamente un nuevo personaje, esta vez de la raza «SAIYAN».<br/>
    Será incluida en una futura narrativa de otvers.</b>`

  const subtitulo = `<b>Explica su autor:</b>`

  const textoRaza = `<b>De la raza Saiyan, no tiene más contenido más que su nombre: «Parika».</b>`

  const textoIdioma = `<b>El diseño en digital es traido por Otbot.</b>`

  const textoFinal = `<div class="headline-top"><b>¿Como aparecera PARIKA en OT.VERS.?</b></div>
                      <div class="headline-bottom"><b>¡¡NO SE LO PIERDAN!!</b></div>`

  return (
    <div className="blog">
      <div className="presentacion">
        <img src={portada} alt="Portada" className="imgportada" />
        <img src={perfil} alt="Perfil" className="imgperfil" />
      </div>

      <div className="seccionint">
        <img src={boceto} alt="Boceto" className="imgboceto" />
        <div className="textoint" dangerouslySetInnerHTML={{ __html: textoIntro }} />
      </div>

      <div className="autor">
        <div className="explica" dangerouslySetInnerHTML={{ __html: subtitulo }} />
      </div>

      <div className="mediosec">

        <div className="secderecha">
          <div className="texto" dangerouslySetInnerHTML={{ __html: textoRaza }} />
          <img src={parika} alt="Parika" className="imgmedio" />
        </div>

        <div className="amplio">
          <img src={parikacompleta} alt="Parika-Fondo" className="imgamp" />
          <div className="texto" dangerouslySetInnerHTML={{ __html: textoIdioma }} />
        </div>
      </div>

      <div className="fondoprin">

        <div className="fondo">
          <img src={fondo} alt="Lilix Saiyan" className="fondoimg" />
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

