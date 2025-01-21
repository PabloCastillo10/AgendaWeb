const email = localStorage.getItem('emailUsuario') || "No definido";
const password = localStorage.getItem('passwordUsuario') || "No definido";
document.getElementById('perfilEmail').textContent = email;
document.getElementById('perfilPassword').textContent = password;