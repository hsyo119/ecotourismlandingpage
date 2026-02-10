// Initialize map
var map = L.map('map').setView([35.3, 133.7], 9);

// OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add test marker
L.marker([35.3, 133.7]).addTo(map).bindPopup("Okayama Center").openPopup();

// GPX
let gpxLayer = null;

const routes = {
  kuma: "routes/kuma.gpx",
  nagi: "routes/nagi.gpx",
  hiruzen: "routes/hiruzen.gpx"
};

const routeDifficulty = { kuma: "easy", nagi: "medium", hiruzen: "medium" };
const difficultySpeed = { easy: 4, medium: 3, hard: 2 };
const mountainFactor = 1.5;

document.getElementById("routeSelect").addEventListener("change", function() {
  const route = this.value;
  if (!route) return;

  if (gpxLayer) map.removeLayer(gpxLayer);

  gpxLayer = new L.GPX(routes[route], {
    async: true,
    marker_options: { startIconUrl: null, endIconUrl: null, shadowUrl: null }
  })
  .on("loaded", function(e) {
    const gpx = e.target;
    map.fitBounds(gpx.getBounds());

    let distanceKm = gpx.get_distance() / 1000;
    distanceKm *= mountainFactor;

    const speed = difficultySpeed[routeDifficulty[route]] || 3;
    const totalMinutes = Math.max(distanceKm / speed * 60, 20);
    const hours = Math.floor(totalMinutes / 60);
    const minutes = Math.round(totalMinutes % 60);

    document.getElementById("distance").innerText = distanceKm.toFixed(2) + " km";
    document.getElementById("time").innerText = `${hours}h ${minutes}m`;
  })
  .on("error", function(err) {
    console.error("Failed to load GPX:", err);
  })
  .addTo(map);
});

