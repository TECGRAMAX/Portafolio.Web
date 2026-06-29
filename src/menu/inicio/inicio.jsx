import './inicio.css'
import perfil from '../assets/perfil.svg'
import github from '../assets/github.svg'
import signal from '../assets/signal.svg'
import buasap from '../assets/whatssap.svg'
import linkedin from '../assets/linkedin.svg'
import { useState } from 'react';

const Inicio = () => {
    const [showChat, setShowChat] = useState(false);
    const [messages, setMessages] = useState([
        { sender: 'bot', text: '💬 Bienvenido a mi Portafolio estimado. ¿En qué le puedo ayudar?' }
    ]);
    const [input, setInput] = useState('');
    const [usedResponses, setUsedResponses] = useState(new Set());

    const handleLogoClick = () => {
        setShowChat(prev => !prev);
    };

    const handleSend = () => {
        if (input.trim() === '') return;

        const newMessage = { sender: 'user', text: input };
        setMessages(prev => [...prev, newMessage]);

        // 🔹 Normalizar texto: minúsculas y eliminar signos de puntuación
        const cleanedInput = input.toLowerCase().replace(/[.,;!?¿]/g, ' ');
        const words = cleanedInput.split(/\s+/).filter(Boolean);

        // Palabras clave
        const clavesPortafolio = ['portafolio', 'esto', 'trata', 'que', 'es', 'donde', 'estoy'];
        const clavesContrato = ['contrato', 'contratar', 'contratando', 'trabajo', 'trabajar', 'desarrollo', 'programar', 'empleo', 'emplear', 'empresa'];
        const clavesLenguajes = ['lenguajes', 'javascript', 'js', 'react', 'node', 'net', 'frontend', 'backend', 'c+', 'phyton', 'librerías', 'inteligencia', 'artificial', 'ia', 'ai'];
        const saludos = ['hola', 'buenas', 'qué', 'tal', 'hi', 'hello', 'saludos'];
        const despedidas = ['adios', 'adiós', 'chau', 'hasta', 'luego', 'nos', 'vemos', 'bye'];

        // Respuestas
        const respuestaPortafolio = '📌 Este es el Portafolio profesional base que sirve para el contrato -ya sea particular o Empresarial- de Maximiliano Leandro Simon Castaño. Los datos del desarrollador en cuestión puede verlos en la sección de Datos en PC, o tocar el primer icono de la barra de abajo en celular o Tableta.';
        const respuestaContrato = '💼 El objetivo de este Portafolio es justamente el empleo como desarrollador, además de poder incorporar a su proyecto u empresa, todo lo que la experiencia pueda aportarle.<br/>Para más información le recomiendo revisar la pestaña "Datos" en caso de estar en la PC, o ir al primer icono en la barra baja, si una Tableta o celular.';
        const respuestaLenguajes = '🖥️ Tal como dice en la pestaña "Datos" en caso de estar en la PC, o ir al primer icono en la barra baja, si una Tableta o celular, se tiene experiencia en lenguajes, librerías y estudio sobre la Inteligencia Artificial, más se combina con la experiencia en ser más rápido y el mercado que es cada vez más rápido.<br/>Al igual que este portafolio, se podrá realizar la WEB, aplicación (móvil o web), plataforma o trabajo en servidores, como también poner a su disposición los conocimientos en tecnología gracias a la Tecnicatura Electrónica que se posee; como también utilizar programación en bajo nivel (lenguaje de máquina), de ser requerido.';

        let responsesToSend = [];

        // 🔹 Recorrer palabra por palabra en orden
        for (let w of words) {
            if (despedidas.includes(w)) {
                responsesToSend.push('🙏 Gracias por usar el chatbot, Dios lo bendiga y guarde.');
                setTimeout(() => {
                    setMessages([]);
                    setShowChat(false);
                    setUsedResponses(new Set());
                }, 2000);
                break;
            }
            if (saludos.includes(w) && !responsesToSend.includes('💬 Bienvenido a mi Portafolio estimado. ¿En qué le puedo ayudar?')) {
                responsesToSend.push('💬 Bienvenido a mi Portafolio estimado. ¿En qué le puedo ayudar?');
            }
            if (clavesPortafolio.includes(w) && !usedResponses.has('portafolio')) {
                responsesToSend.push(respuestaPortafolio);
                usedResponses.add('portafolio');
            }
            if (clavesContrato.includes(w) && !usedResponses.has('contrato')) {
                responsesToSend.push(respuestaContrato);
                usedResponses.add('contrato');
            }
            if (clavesLenguajes.includes(w) && !usedResponses.has('lenguajes')) {
                responsesToSend.push(respuestaLenguajes);
                usedResponses.add('lenguajes');
            }
        }

        // Si no hubo coincidencias
        if (responsesToSend.length === 0) {
            responsesToSend.push('Soy un chat básico, por favor manténgase en lo laboral.');
        }

        // 🔹 Verificar si ya se usaron todas las respuestas automáticas (excepto despedida)
        const allResponsesUsed = ['portafolio', 'contrato', 'lenguajes'].every(r => usedResponses.has(r));
        if (allResponsesUsed) {
            responsesToSend = ['Es todo ¿Le gustaría saber algo más?'];
        }

        // Enviar todas las respuestas detectadas en orden
        setTimeout(() => {
            responsesToSend.forEach(resp => {
                setMessages(prev => [...prev, { sender: 'bot', text: resp }]);
            });
        }, 800);

        setInput('');
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    return (
        <section className={`Inicio ${showChat ? 'move-left' : ''}`}>
            <div className="contenedor-principal">
                <div className="perfil-contenedor" onClick={handleLogoClick}>
                    <div className={`logo ${!showChat ? 'latido' : ''}`}>
                        <img src={perfil} alt="Perfil" />
                    </div>
                    <article className="texto-perfil">
                        <p>ESPECIALISTA EN TECNOLOGÍA y DESARROLLO</p>
                    </article>
                </div>

                <div className="comunicacion">
                    <a target="_blank" href="https://github.com/TECGRAMAX?tab=repositories">
                        <img width='25px' src={github} alt="GitHub" />
                    </a>
                    <a target="_blank" href="sgnl://send?phone=+5492213043215">
                        <img width='25px' src={signal} alt="Signal" />
                    </a>
                    <a target="_blank" href="https://wa.me/+5492213043215">
                        <img width='25px' src={buasap} alt="WhatsApp" />
                    </a>
                    <a target="_blank" href="https://www.linkedin.com/in/tecgramax/">
                        <img width='25px' src={linkedin} alt="LinkedIn" />
                    </a>
                </div>

                <div className="botones-enlaces">
                    <a target="_blank" href="mailto:donmaximilianoiiidelaplata@gmail.com">GMAIL</a>
                    <a href="https://hunter.io/search" target="_blank">Hunter.io</a>
                </div>
            </div>

            {showChat && (
                <div className="chat-ia">
                    <div className="chat-messages">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`chat-message ${msg.sender}`}
                                dangerouslySetInnerHTML={{ __html: msg.text }}
                            />
                        ))}
                    </div>
                    <div className="chat-input">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Escribe tu mensaje..."
                        />
                        <button onClick={handleSend}>Enviar</button>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Inicio;
