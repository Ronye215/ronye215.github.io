// Extrae parámetros de la URL
const params = new URLSearchParams(window.location.search);
const driveId = params.get('driveId');
const title = params.get('title');

const video = document.getElementById('videoPlayer');
const overlay = document.getElementById('titleOverlay');

// URL embebible de Google Drive para video
video.src = `https://drive.google.com/file/d/${driveId}/preview`;
overlay.textContent = title;

