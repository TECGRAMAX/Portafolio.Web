import './datos.css'
import { Link } from 'react-router-dom';

import foto from './img/foto.png'


import github from './img/github.svg'
import vercel from './img/vercel.svg'

import javascript from './img/javascript.svg'
import jquery from './img/jquery.svg'
import nodejs from './img/nodejs.svg'
import reactjs from './img/reactjs.svg'

import html from './img/html.svg'
import css from './img/css.svg'
import mysql from './img/mysql.svg'

import tailwindcss from './img/tailwindcss.svg'
import babeljs from './img/babeljs.svg'
import nextjs from './img/nextjs.svg'
import startbootstrap from './img/startbootstrap.svg'
import stackoverflow from './img/Stackoverflow.svg'

import notepad from './img/notepad.svg'
import sublimetext from './img/sublime.svg'
import visualstudiocode from './img/visualstudiocode.svg'


const Datos = () => {
    return (
        <section className="Datos">
           <article className="intro">
                <div className="img">
                    <img src={foto} alt="" />
                </div>

                <h1>
                    ¿Qué esperas de tu código?<br/>
                    ¿Cómo imaginas tu proyecto?<br/>
                    ¿Qué impresión quieres causar al cliente?<br/><br/>
                    Resolvamos ello.
                </h1>
                <p className="p">
                    Soy desarrollador de Software con completa disponibilidad para su equipo.
                </p>

           </article>
            <div className="edu">
                <h2>DATOS:</h2>

                <Link to='/Proyectos'>
                    <div>
                        <h3>TECNOLOGÍAS:</h3>
                        <h5>
                            <img width='40px' src={github} alt="" />
                            <img width='110px' height='40px' src={vercel} alt="" />
                            <br/>
                            <img width='40px' src={javascript} alt="" />
                            <img width='110px' height='40px' src={jquery} alt="" />
                            <img width='110px' height='40px' src={nodejs} alt="" />
                            <img width='110px' height='40px' src={reactjs} alt="" />
                            <br/>
                            <img width='40px' src={html} alt="" />
                            <img width='40px' src={css} alt="" />
                            <img width='75px' height='30px' src={mysql} alt="" />
                            <br/>
                            <img width='110px' height='40px' src={tailwindcss} alt="" />
                            <img width='90px' height='35px' src={babeljs} alt="" />
                            <img width='65px' height='40px' src={nextjs} alt="" />
                            <br/>
                            <img width='120px' height='30px' src={startbootstrap} alt="" />
                            <img width='120px' height='30px' src={stackoverflow} alt="" />
                            <br/>
                            <img width='40px' src={notepad} alt="" />
                            <img width='40px' src={sublimetext} alt="" />
                            <img width='40px' src={visualstudiocode} alt="" />
                        </h5>
                    </div>
                </Link>

                <div>
                    <h3>FORMACIÓN ACADÉMICA:</h3>
                        <h4>03/07/2014 <br/> _Tecnicatura en Electrónica, 
                        <br/>en la EETNº6 Albert Thomas</h4>
                    <h3>CURSOS:</h3>
                    <h4>
                        13/11/2016<br/>
                        _Reparación de PC, calle 2 y 46 Instituto.<br/>
                        22/10/2017<br/>
                        _Manejo de Word y Exel.<br/>
                    </h4>
                <a href="./cv.pdf" download="cv.pdf">DESCARGAR CV</a>
                </div>
            </div>
        </section>
    )
}

export default Datos;