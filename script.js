
const fullImgBox = document.getElementById("FulImgBox"),
fulImg = document.getElementById("fulImg")

function openFulImg(reference){
    fulImgBox.style.display = "flex";
    FulImg.src = reference
}

function closeImage(){    
    fulImgBox.style.display = "none";
}
const formulario = document.querySelector('form');

formulario.addEventListener('submit', function (event) {
  event.preventDefault(); // Evitar que el formulario se envíe de forma convencional
  // Variable para el correo destinario
  const destinario = "destinatario@example.com"
  // Obtener los valores de los campos
  
  const nombre = document.getElementById('nombre').value;
  const email = document.getElementById('email').value;
  const mensaje = document.getElementById('mensaje').value;

  // Crear el enlace "mailto"
  const enlaceMailto = `mailto:${destinario}?subject=Mensaje%20de%20${encodeURIComponent(nombre)}&body=${encodeURIComponent(mensaje)}%0D%0A%0D%0A${encodeURIComponent(email)}`;

  // Abrir el cliente de correo predeterminado con el enlace "mailto"
  window.location.href = enlaceMailto;
});