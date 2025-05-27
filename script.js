// ===========================
// Efecto scroll en el header (oscurecer y cambiar color)
// ===========================
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

const botonVolverArriba = document.getElementById("volverArriba");

// Mostrar el botón cuando se hace scroll hacia abajo
window.addEventListener("scroll", function() {
  if (window.scrollY > 200) {
    botonVolverArriba.style.display = "block";
  } else {
    botonVolverArriba.style.display = "none";
  }
});

// Función para hacer scroll hacia arriba cuando se hace clic en el botón
botonVolverArriba.addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Manejo del formulario de contacto
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();

  // Validación de los campos del formulario
  if (!nombre || !correo || !mensaje) {
    alert("Por favor completa todos los campos.");
    return;
  }

  // Validación básica de correo
  const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!correoValido.test(correo)) {
    alert("Por favor ingresa un correo válido.");
    return;
  }

  // Mostrar el mensaje de éxito
  const mensajeExito = document.getElementById("mensajeExito");
  mensajeExito.style.display = "block";

  // Ocultar después de 5 segundos
  setTimeout(() => {
    mensajeExito.style.display = "none";
},   3000);

// Limpiar el formulario
this.reset();
});

// ===========================
// Datos de especificaciones de vehículos
// ===========================
const especificacionesVehiculos = {
  "Lamborghini Huracán": {
    imagen: "img/Lamborghinii.jpg",
    especificaciones: [
      "Motor V10 de 5.2 L",
      "Potencia: 640 CV",
      "0-100 km/h en 2.9 s",
      "Velocidad máxima: 325 km/h",
      "Peso: 1.422 kg"
    ]
  },
  "Kawasaki Ninja H2R": {
    imagen: "img/H2R.jpg",
    especificaciones: [
      "Motor de 998 cc sobrealimentado",
      "Potencia: 310 CV",
      "0-100 km/h en 2.5 s",
      "Velocidad máxima: 400 km/h",
      "Peso: 216 kg"
    ]
  },
  "Mercedes-Benz AMG GT": {
    imagen: "img/Mercedes.jpg",
    especificaciones: [
      "Motor V8 biturbo de 4.0 L",
      "Potencia: 530 CV",
      "0-100 km/h en 3.8 s",
      "Velocidad máxima: 310 km/h",
      "Peso: 1.723 kg"
    ]
  },
  "Ferrari 488 GTB": {
    imagen: "img/Ferrari.jpg",
    especificaciones: [
      "Motor V8 biturbo de 3.9 L",
      "Potencia: 670 CV",
      "0-100 km/h en 3.0 s",
      "Velocidad máxima: 330 km/h",
      "Peso: 1.475 kg"
    ]
  },
  "BMW M1000RR": {
    imagen: "img/M1000RR.jpg",
    especificaciones: [
      "Motor de 999 cc",
      "Potencia: 212 CV",
      "0-100 km/h en 3.1 s",
      "Velocidad máxima: 314 km/h",
      "Peso: 192 kg"
    ]
  },
  "Porsche 911 Turbo S": {
    imagen: "img/911TurboS.jpg",
    especificaciones: [
      "Motor bóxer de 6 cilindros y 3.8 L",
      "Potencia: 650 CV",
      "0-100 km/h en 2.7 s",
      "Velocidad máxima: 330 km/h",
      "Peso: 1.640 kg"
    ]
  },
  "McLaren 720S": {
    imagen: "img/720S.jpg",
    especificaciones: [
      "Motor V8 biturbo de 4.0 L",
      "Potencia: 720 CV",
      "0-100 km/h en 2.9 s",
      "Velocidad máxima: 341 km/h",
      "Peso: 1.419 kg"
    ]
  },
  "Mercedes AMG Clase G63 Brabus": {
    imagen: "img/Brabus.jpg",
    especificaciones: [
      "Motor V8 biturbo de 4.0 L",
      "Potencia: 800 CV",
      "0-100 km/h en 4.1 s",
      "Velocidad máxima: 240 km/h",
      "Peso: 2.550 kg"
    ]
  },
  "Bugatti Divo": {
    imagen: "img/BugattiDivo.jpg",
    especificaciones: [
      "Motor W16 de 8.0 L",
      "Potencia: 1.500 CV",
      "0-100 km/h en 2.4 s",
      "Velocidad máxima: 380 km/h",
      "Peso: 1.960 kg"
    ]
  },
  "Koenigsegg Regera": {
    imagen: "img/KoenigseggRegera.jpg",
    especificaciones: [
      "Motor V8 biturbo de 5.0 L + 3 motores eléctricos",
      "Potencia combinada: 1.500 CV",
      "0-100 km/h en 2.8 s",
      "Velocidad máxima: 410 km/h",
      "Peso: 1.590 kg"
    ]
  },
  "BMW S1000RR": {
    imagen: "img/S1000RR.jpg",
    especificaciones: [
      "Motor de 999 cc",
      "Potencia: 210 CV",
      "0-100 km/h en 3.1 s",
      "Velocidad máxima: 303 km/h",
      "Peso: 197 kg"
    ]
  },
  "Ducati Superleggera V4": {
    imagen: "img/Ducatti.jpg",
    especificaciones: [
      "Motor V4 de 998 cc",
      "Potencia: 234 CV",
      "0-100 km/h en 2.6 s",
      "Velocidad máxima: 299 km/h",
      "Peso: 159 kg"
    ]
  }
};

// ===========================
// Modal de especificaciones
// ===========================
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".auto-card");
  const modal = document.getElementById("modalEspecificaciones");
  const close = modal.querySelector(".cerrar");
  
  // Cerrar el modal
  close.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // Cerrar el modal al presionar la tecla Escape
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      modal.style.display = "none";
    }
  });

  // Iterar sobre las tarjetas de autos
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const title = card.querySelector("h3").innerText;

      // Mostrar especificaciones del vehículo al hacer clic en la tarjeta
      const vehiculo = especificacionesVehiculos[title];
      if (vehiculo) {
        // Actualizar el contenido del modal
        document.getElementById("tituloVehiculo").textContent = title;
        document.getElementById("imagenVehiculo").src = vehiculo.imagen;
        document.getElementById("imagenVehiculo").alt = title;

        const listaEspecificaciones = document.getElementById("listaEspecificaciones");
        listaEspecificaciones.innerHTML = ""; // Limpiar la lista antes de agregar nuevas especificaciones
        vehiculo.especificaciones.forEach(spec => {
          const li = document.createElement("li");
          li.textContent = spec;
          listaEspecificaciones.appendChild(li);
        });

        // Mostrar el modal
        modal.style.display = "block";
      }
    });
  });
});

// Mostrar botón al hacer scroll con animación
window.onscroll = function() {
  const scrollBtn = document.getElementById("scrollTopBtn");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
};

// Volver arriba con scroll suave
document.getElementById("scrollTopBtn").onclick = function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Menú hamburguesa toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Opcional: cerrar menú al hacer clic en un enlace
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Abrir el modal y reproducir el video
function abrirVideo() {
  const modal = document.getElementById('modalVideo');
  const video = document.getElementById('videoPresentacion');

  modal.style.display = 'block';
  video.currentTime = 0;
  video.play();
}

// Cerrar el modal y detener el video
function cerrarVideo() {
  const modal = document.getElementById('modalVideo');
  const video = document.getElementById('videoPresentacion');

  video.pause();
  video.currentTime = 0;
  modal.style.display = 'none';
}

// Cerrar con tecla ESC
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    cerrarVideo();
  }
});

// Cerrar haciendo clic fuera del modal
window.addEventListener('click', function (e) {
  const modal = document.getElementById('modalVideo');
  const contenido = document.querySelector('.modal-contenido');

  if (e.target === modal) {
    cerrarVideo();
  }
});
