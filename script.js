// Efecto animado al hacer scroll en las secciones
const salas = document.querySelectorAll('.sala');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.3
});

salas.forEach(sala => {
  sala.classList.add('invisible');
  observer.observe(sala);
});

// Agregamos clases de animación para scroll y estrellas flotantes
const style = document.createElement('style');
style.textContent = `
  .invisible {
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.8s ease;
  }

  .visible {
    opacity: 1;
    transform: translateY(0);
  }

  @keyframes flotar {
    0% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0); }
  }

  .estrella {
    animation: flotar 5s ease-in-out infinite;
  }

  .mensaje-estrella {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.8);
    background: rgba(255, 255, 255, 0.95);
    color: #d63384;
    padding: 1.5rem 2rem;
    border-radius: 16px;
    box-shadow: 0 0 30px rgba(255, 182, 193, 0.6);
    font-size: 1.2rem;
    font-weight: bold;
    z-index: 999;
    display: none;
    text-align: center;
    animation: brillar 0.6s ease-out forwards;
  }

  @keyframes brillar {
    0% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0.2) rotate(-10deg);
      box-shadow: 0 0 0 rgba(255, 255, 255, 0);
    }
    60% {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1.05) rotate(3deg);
      box-shadow: 0 0 30px rgba(255, 182, 193, 0.8);
    }
    100% {
      transform: translate(-50%, -50%) scale(1) rotate(0deg);
    }
  }
`;
document.head.appendChild(style);

// Cielo de estrellas interactivas
const cielo = document.getElementById('cielo-estrellas');
const sonido = new Audio('ting.mp3');

const mensajes = [
  "Eres mi estrella favorita 💗",
  "Tu sonrisa es la mas linda del universo",
  "Gracias por existir, Roxii",
  "Quiero estar contigo por siempre",
  "Cada día contigo es magico sabias!",
  "Tus crespitos son arte puro",
  "Tus pequitas son mini estrellitas",
  "Mia y tu pero mas tu son mi ser vivo favorito😪",
  "Tú eres la reina que todo rey necesita en sus dias😪",
  "Te amo más que a todas estas estrellas"
];

for (let i = 0; i < 30; i++) {
  const estrella = document.createElement('div');
  estrella.classList.add('estrella');
  estrella.style.top = `${Math.random() * 100}%`;
  estrella.style.left = `${Math.random() * 100}%`;
  estrella.style.position = 'absolute';
  estrella.style.width = '8px';
  estrella.style.height = '8px';
  estrella.style.background = 'white';
  estrella.style.borderRadius = '50%';
  estrella.style.cursor = 'pointer';
  cielo.appendChild(estrella);

  const mensaje = document.createElement('div');
  mensaje.classList.add('mensaje-estrella');
  mensaje.innerText = mensajes[Math.floor(Math.random() * mensajes.length)];

  estrella.addEventListener('click', () => {
    const clonMensaje = mensaje.cloneNode(true);
    clonMensaje.style.display = 'block';
    document.body.appendChild(clonMensaje);

    sonido.currentTime = 0;
    sonido.play();

    setTimeout(() => {
      clonMensaje.remove();
    }, 3500);
  });
} 
