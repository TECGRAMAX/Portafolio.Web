import './inicio.css'
import { Link } from 'react-router-dom';
import perfil from '../assets/perfil.svg'
import { useEffect } from 'react';

const Inicio = () => {
    useEffect(() => {
        // 🔹 Creamos un Worker para manejar todas las galaxias en un hilo separado
        const worker = new Worker(new URL('./galaxyWorker.js', import.meta.url));

        // 🔹 Configuración de cada galaxia
        // 👉 Mantuvimos los valores originales de la galaxia central (12000 estrellas, 5000 fondo)
        const canvasIds = [
            { id: "galaxy-center", scaleX: 0.4, scaleY: 0.2, arms: 5, totalStars: 7000, backgroundStars: 4000 }, // 🔹 mismos valores que bottom
            { id: "galaxy-top-left", scaleX: 0.6, scaleY: 0.3, arms: 5, totalStars: 7000, backgroundStars: 4000 },
            { id: "galaxy-top-right", scaleX: 0.6, scaleY: 0.3, arms: 5, totalStars: 7000, backgroundStars: 4000 },
            { id: "galaxy-bottom-left", scaleX: 0.4, scaleY: 0.2, arms: 5, totalStars: 7000, backgroundStars: 4000 },
            { id: "galaxy-bottom-right", scaleX: 0.4, scaleY: 0.2, arms: 5, totalStars: 7000, backgroundStars: 4000 }
        ];

        // 🔹 Convertimos cada canvas en OffscreenCanvas y lo enviamos al Worker
        canvasIds.forEach(cfg => {
            const canvas = document.getElementById(cfg.id);
            const offscreen = canvas.transferControlToOffscreen();
            worker.postMessage({ canvas: offscreen, config: cfg }, [offscreen]);
        });

        return () => {
            worker.terminate(); // 🔹 Cerramos el worker al desmontar el componente
        };
    }, []);

    return (
        <section className="Inicio">
            {/* 🔹 Canvases para todas las galaxias */}
            <canvas id="galaxy-center" className="galaxy center"></canvas>
            <canvas id="galaxy-top-left" className="galaxy top-left"></canvas>
            <canvas id="galaxy-top-right" className="galaxy top-right"></canvas>
            <canvas id="galaxy-bottom-left" className="galaxy bottom-left"></canvas>
            <canvas id="galaxy-bottom-right" className="galaxy bottom-right"></canvas>

            {/* 🔹 Perfil */}
            <div className="boton-perfil">
                <Link to='/Datos'>
                    <div className="logo">
                        <img src={perfil} alt="Perfil" />
                    </div>
                </Link>
            </div>

            {/* 🔹 Botones de enlaces */}
            <div className="botones-enlaces">
                <a target="_blank" href="mailto:donmaximilianoiiidelaplata@gmail.com">GMAIL</a>
                <a href="https://hunter.io/search" target="_blank">Hunter.io</a>
            </div>

            {/* 🔹 Texto principal */}
            <article className="full">
                <p>ESPECIALISTA EN TECNOLOGÍA y DESARROLLO</p>
            </article>
        </section>
    )
}

export default Inicio;
