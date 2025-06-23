// momentos.js

function iniciarAnimaciones() {
  const capturas = document.querySelectorAll('.captura');

  capturas.forEach((captura, index) => {
    captura.style.opacity = '0';
    captura.style.transform = 'scale(0.9)';
    captura.style.transition = 'all 0.8s ease';

    setTimeout(() => {
      captura.style.opacity = '1';
      captura.style.transform = 'scale(1)';
      captura.classList.add('brillar');
    }, 200 * index);
  });

  capturas.forEach(captura => {
    captura.addEventListener('click', (e) => {
      for (let i = 0; i < 5; i++) {
        const heart = document.createElement('div');
        heart.textContent = '💗';
        heart.style.position = 'fixed';
        heart.style.left = e.clientX + 'px';
        heart.style.top = e.clientY + 'px';
        heart.style.fontSize = `${Math.random() * 10 + 16}px`;
        heart.style.animation = 'subir 2s ease-out forwards';
        heart.style.pointerEvents = 'none';
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 2000);
      }
    });
  });

  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes subir {
      0% { transform: translateY(0); opacity: 1; }
      100% { transform: translateY(-100px); opacity: 0; }
    }
    .brillar {
      animation: brilloMagico 1.5s ease-in-out;
    }
    @keyframes brilloMagico {
      0% { filter: brightness(1); }
      50% { filter: brightness(1.5); }
      100% { filter: brightness(1); }
    }
    .efecto-roxi {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: rgba(255, 192, 203, 0.4);
      pointer-events: none;
      z-index: 9999;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      font-family: 'Comic Sans MS', cursive;
    }
    .mensaje-roxi {
      font-size: 2rem;
      color: #d60087;
      margin-top: 1rem;
      animation: brilloMagico 2s ease-in-out infinite;
      z-index: 10000;
    }
    .particula {
      position: absolute;
      font-size: 2rem;
      animation: flotando 2.5s ease-out forwards;
      pointer-events: none;
    }
    @keyframes flotando {
      0% {
        transform: translateY(0) scale(1);
        opacity: 1;
      }
      100% {
        transform: translateY(-100vh) scale(1.5);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
}

function crearEfectoHelloRoxi(callback) {
  const overlay = document.createElement('div');
  overlay.className = 'efecto-roxi';

  const mensaje = document.createElement('div');
  mensaje.className = 'mensaje-roxi';
  mensaje.textContent = 'Está cargando todo, Roxi 💕';
  overlay.appendChild(mensaje);

  const sonido = new Audio('ting.mp3');
  sonido.play();

  document.body.appendChild(overlay);

  const emojis = ['💖', '🎀', '😺', '🌸', '✨'];
  for (let i = 0; i < 40; i++) {
    const p = document.createElement('div');
    p.className = 'particula';
    p.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    p.style.left = Math.random() * 100 + 'vw';
    p.style.bottom = '0';
    p.style.fontSize = `${Math.random() * 16 + 16}px`;
    p.style.animationDelay = (Math.random() * 0.5) + 's';
    overlay.appendChild(p);
  }

  setTimeout(() => {
    overlay.remove();
    if (callback) callback();
  }, 2500);
}

function transicionConEfectoRoxi(urlDestino) {
  crearEfectoHelloRoxi(() => {
    window.location.href = urlDestino;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  iniciarAnimaciones();

  crearEfectoHelloRoxi();

  const linkVolver = document.querySelector('.volver a');
  if (linkVolver) {
    linkVolver.addEventListener('click', (e) => {
      e.preventDefault();
      transicionConEfectoRoxi(linkVolver.href);
    });
  }
});