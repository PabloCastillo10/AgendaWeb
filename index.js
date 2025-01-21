const contactDetails = {
  "70503020": {
    nombre: "Pablo",
    apellido: "Castillo",
    correo: "pablocastillo@gmail.com",
    telefono: "70503020"
  },
  "69401020": {
    nombre: "Ian",
    apellido: "Alfaro",
    correo: "ianalfaro@gmail.com",
    telefono: "69401020"
  },
  "56732353": {
    nombre: "Cuxum",
    apellido: "Hernandéz",
    correo: "cuxumhernandez@gmail.com",
    telefono: "56732353"
  },
  "52412121": {
    nombre: "Kevin",
    apellido: "Gutierrez",
    correo: "kevingutierrez@gmail.com",
    telefono: "52412121"
  },
  "71204010": {
    nombre: "Pablo",
    apellido: "Ochoa",
    correo: "pabloochoa@gmail.com",
    telefono: "71204010"
  }
};


const params = new URLSearchParams(window.location.search);
const numero = params.get("numero");

if (numero && contactDetails[numero]) {
  const details = contactDetails[numero];
  const ul = document.getElementById("contact-details");

 
  ul.innerHTML = `
    <li><strong>Nombre:</strong> ${details.nombre}</li>
    <li><strong>Apellido:</strong> ${details.apellido}</li>
    <li><strong>Correo:</strong> ${details.correo}</li>
    <li><strong>Teléfono:</strong> ${details.telefono}</li>
  `;
  ul.classList.add("fade-in"); 
} else {
 
  document.querySelector(".container").innerHTML = `
    <h1 class="text-danger">Contacto no encontrado</h1>
    <a href="contacto.html" class="btn btn-light mt-4">Regresar</a>
  `;
}