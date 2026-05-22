import './proyectos.css'
import otvers from './img/otvers.png'
import simonas from './img/simonas.png'
import pboc from './img/pboc.png'
import img2 from '../assets/img2.webp'
import img3 from '../assets/img3.webp'
import img4 from '../assets/img4.webp'

import html from '../assets/html.svg'
import css from '../assets/css.svg'
import js from '../assets/js.svg'
import vercel from '../assets/vercel.svg'

import reactjs from '../assets/react.svg'
import vite from '../assets/vite.svg'

import nada from '../assets/nada.svg'
import nulo from '../assets/nulo.svg'

const Proyectos = () => {

    const tarjetas = [
        {
            image:[otvers],
            name:'Página de historietas básica',
            descrip:'Página de historietas con función de donaciones.',
            tecno:[html,css,js,reactjs,vite],
            urlv:['https://ot-vers-tiras.vercel.app/'],
        },
        {
            image:[simonas],
            name:'Página de ventas básica',
            descrip:'Página muy básica de productos con enlace a Instagram.',
            tecno:[html,css,js,reactjs,vite],
            urlv:['https://simonas-two.vercel.app/'],
        },
        {
            image:[pboc],
            name:'Detector de Comercios (boceto)',
            descrip:'Boceto Frontend de página de comercios',
            tecno:[html,css,js,reactjs,vite],
            urlv:['https://navegador-de-comencios-boceto.vercel.app'],
        },

        {
            image:[img2],
            name:' ...',
            descrip:'Breve Descripción',
            tecno:[nada,nada,nulo,nada,nada],
            urlv:['#'],
        },

        {
            image:[img3],
            name:' ...',
            descrip:'Breve Descripción',
            tecno:[nada,nada,nulo,nada,nada],
            urlv:['#'],
        },

        
        {
            image:[img4],
            name:' ...',
            descrip:'Breve Descripción',
            tecno:[nada,nada,nulo,nada,nada],
            urlv:['#'],
        },
    ]

    const mantener = (e) => {
        e.preventDefault();
    }

    return (
        <section className="Proyectos">

            <h2>PROYECTOS</h2>

            <div className="cards">

                {
                    tarjetas.map((card,index) => {
                        const noHayEnlace = card.urlv[0] === '#';
                        const almoadilla = noHayEnlace ? { onClick: mantener, style: { cursor: 'default' } } : { target: "_blank", href: card.urlv[0] };

                        return(
                            <div key={index} className="card">

                                <div className="img">
                                    <a {...almoadilla}>
                                        <img width='100%' src={card.image} alt="" />
                                    </a>
                                </div>

                                <h3>{card.name}</h3>

                                <p className="descripcion">{card.descrip}</p>

                                <div className="tecno">
                                    <img width='30px' src={card.tecno[0]} alt="" />
                                    <img width='30px' src={card.tecno[1]} alt="" />
                                    <img width='30px' src={card.tecno[2]} alt="" />
                                    <img width='30px' src={card.tecno[3]} alt="" />
                                    <img width='30px' src={card.tecno[4]} alt="" />
                                </div>

                                <div className="enlaces">
                                    <a {...almoadilla}>
                                        <img width='120px' src={vercel} alt="" />
                                    </a>
                                </div>

                            </div>
                        )
                    })
                }

            </div>
        </section>
    )
}

export default Proyectos;
