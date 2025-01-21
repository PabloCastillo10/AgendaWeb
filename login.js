const form = document.querySelector('.login');

form.addEventListener('submit', function (event) {
  event.preventDefault();   
  const email = document.getElementById('exampleInputEmail1').value;
  const password = document.getElementById('exampleInputPassword1').value;
  if (email.trim() === "" || password.trim() === "") {
    alert("Por favor, completa todos los campos.");
    return;
  }
  localStorage.setItem('emailUsuario', email);
  localStorage.setItem('passwordUsuario', password);
  window.location.href = 'contacto.html';
});