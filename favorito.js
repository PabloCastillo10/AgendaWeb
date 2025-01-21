const favorites = [
    {
      numero: "70503020",
      nombre: "Pablo",
      apellido: "Castillo",
      usuario: "pablocastillo@gmail.com"
    },
    {
      numero: "52412121",
      nombre: "Kevin",
      apellido: "Gutierrez",
      usuario: "kevingutierrez@gmail.com"
    }
  ];
  const favoritesContainer = document.getElementById("favorites-container");
  favorites.forEach(contact => {
    const card = `
      <div class="col-md-4">
        <div class="card bg-dark text-white h-100">
          <div class="card-body">
            <h5 class="card-title">${contact.nombre} ${contact.apellido}</h5>
            <p class="card-text">
              <strong>Número:</strong> ${contact.numero}<br>
              <strong>Correo:</strong> ${contact.usuario}
            </p>
        
          </div>
        </div>
      </div>
    `;
    favoritesContainer.innerHTML += card;
  });
  