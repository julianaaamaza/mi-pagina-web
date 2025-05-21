// Controla el scroll(desplazamiento) para esconder el header(encabezado) cuando 
// vamos hacia abajo y mostrarlo cuando subimos
let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > lastScroll && currentScroll > 50) {
    // desplazamiento hacia abajo: oculta el header
    header.style.transform = 'translateY(-100%)';
    header.style.transition = 'transform 0.3s ease';
  } else {
    // desplazamiento hacia arriba: muestra el header
    header.style.transform = 'translateY(0)';
    header.style.transition = 'transform 0.3s ease';
  }
  lastScroll = currentScroll;
});

// Escucha el evento de submit del formulario para manejar los datos
document.getElementById("form-contacto").addEventListener("submit", function (e) {
  e.preventDefault();

  // Capturar los datos del formulario
  const datosFormulario = {
    nombre: this.nombre.value,
    email: this.email.value,
    edad: this.edad.value,
    fecha: this.fecha.value,
    tipo: this.tipo.value,
    suscripcion: this.suscripcion.checked
  };

  // Mostrar alerta de confirmación
  alert("🕯️ GRACIAS POR UNIRTE. YA NO HAY VUELTA ATRÁS 🕯️.");

  // Mostrar los datos como JSON en la consola
  console.log(JSON.stringify(datosFormulario, null, 2));

  // Limpiar el formulario
  this.reset();
});


// Establece un borde rojo en todo el body de la pag
document.body.style.border = '2px solid red';

document.querySelector('header').style.border = '2px solid red';


