// momentos.js

// Mostrar pantalla de carga antes de mostrar la página
window.addEventListener('load', () => {
  const loader = document.createElement('div');
  loader.className = 'pantalla-carga';

  const kitty = document.createElement('img');
  kitty.src = 'kitty-cargando.gif'; // Usa un gif o imagen girando de Hello Kitty
  kitty.alt = 'Cargando';
  kitty.className = 'kitty-cargando';

  loader.appendChild(kitty);
  document.body.appendChild(loader);

  setTimeout(() => {
    loader.remove();
    iniciarAnimaciones();
  }, 5000);
});

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

  // Corazones flotantes mágicos al hacer clic en una imagen
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

        setTimeout(() => {
          heart.remove();
        }, 2000);
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

    .pantalla-carga {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background-color: #fff0f6;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9999;
    }

    .kitty-cargando {
      width: 120px;
      height: 120px;
      animation: girar 2s linear infinite;
    }

    @keyframes girar {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
  `;
  document.head.appendChild(style);
}
