

var map = L.map('map').setView([4.6684065, -74.1067738], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Polígono representativo del barrio Normandía (coordenadas de ejemplo)
var normandiaCoords = [
    [4.663103, -74.109539],
    [4.671205, -74.100484],
    [4.674234, -74.104012],
    [4.666481, -74.111686],
    
];

var polygon = L.polygon(normandiaCoords, {
    color: 'blue',
    fillColor: '#3388ff',
    fillOpacity: 0.5
}).addTo(map);

polygon.bindPopup("Barrio Normandía");