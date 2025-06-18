// Aquí defines tu listado de películas con enlace de Google Drive embebible
const movies = [
  {
    title: 'Destino Final 1',
    driveId: '1YiVBq3w9acS-JNb0QqjrATxznO4MUWlA'
  },
  {
    title: 'Destino Final 2',
    driveId: '1tZsQ-1oI1VIjAIo-2bg3qgQpCu713X2W'
  },
  {
    title: 'Destino Final 3',
    driveId: '1E81kLupBvhy7JA7m_NSKEkfd4wlASYDT'
  },
  {
    title: 'Destino Final 4',
    driveId: '1mZRmHIvUS4LOCEGsfR58Hy4H5QG83RbZ'
  },
  {
    title: 'Destino Final 5',
    driveId: '1BHYCC52Pd6BTOlfHMN9SRwsMbRVJvSXo'
  },
  {
    title: 'Destino final Lazos de sangre',
    driveId: '1SwapVM4w_R4NCeZ4S8Mqp7Ker4LdyK6y'
  },
  // Agrega más objetos según necesites
];

const listContainer = document.getElementById('movie-list');

movies.forEach(movie => {
  const item = document.createElement('div');
  item.className = 'movie-item';
  item.innerHTML = `
    <img src="https://drive.google.com/thumbnail?id=${movie.driveId}" alt="${movie.title}">
    <h3>${movie.title}</h3>
  `;
  item.addEventListener('click', () => {
    // Abre player.html en nueva pestaña pasando parámetro
    window.open(`player.html?driveId=${movie.driveId}&title=${encodeURIComponent(movie.title)}`, '_blank');
  });
  listContainer.appendChild(item);
});
