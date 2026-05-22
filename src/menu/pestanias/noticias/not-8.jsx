import '../estilos/blogdos.css'
import { useState} from 'react';
import perfil from '../../assets/integrados/JavierRosero/perfil.webp'
import portada from '../../assets/integrados/JavierRosero/portada.webp'
import boceto from '../../assets/integrados/JavierRosero/a35boceto.webp'
import presentacion from '../../assets/integrados/JavierRosero/a35.webp'
import caracteristicas from '../../assets/integrados/JavierRosero/a35segundo.webp'
import futer from '../../assets/integrados/a35prin.webp'

const Blog = () => {
  const textoIntro = `<b>El Autor «Javier Rosero» nos ha enviado un nuevo personaje denominado como «Androide 35».<br/>`

  const subtitulo = `<b>Explica su autor:</b>`

  const textoRaza = `Se sabe que es un Androide hubicado luego de la saga de Moro, según nos lo describen, es realizado por el difunto Dr Gero. No se sabe más al respecto`

  const textoIdioma = `<b>Diseño realizado por OtBot.</b>`

  const textoFinal = `<div class="headline-top"><b>¿Como aparecera A35 en OT.VERS.?</b></div>
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