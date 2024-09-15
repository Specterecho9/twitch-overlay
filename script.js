// Initial values
let sr = 5490;
let kills = 0;
let assists = 0;
let srGained = 0;
let placement = "Top 12";
let stars = 1;

// Elements
const srValueElement = document.getElementById("sr-value");
const progressBar = document.getElementById("progress-bar");
const killsElement = document.getElementById("kills");
const assistsElement = document.getElementById("assists");
const srGainedElement = document.getElementById("sr-gained");
const placementElement = document.getElementById("placement");
const starsElement = document.getElementById("stars");

// Update SR value and progress bar
function updateSR(newSR) {
  sr = newSR;
  srValueElement.textContent = sr;
  let progress = ((sr - 5400) / (6500 - 5400)) * 100;
  progressBar.style.width = progress + "%";
}

// Update kills and assists
function updateKills(newKills, newAssists) {
  kills = newKills;
  assists = newAssists;
  killsElement.textContent = kills;
  assistsElement.textContent = assists;
  srGained = (kills + assists) * 10; // Example SR gained calculation
  srGainedElement.textContent = srGained;
}

// Update placement and stars
function updatePlacement(newPlacement, newStars) {
  placement = newPlacement;
  stars = newStars;
  placementElement.textContent = placement;
  starsElement.textContent = stars;
}

// Simulate real-time updates (replace with real game data or manual input)
setInterval(() => {
  updateSR(sr + 10); // Simulate SR gain
  updateKills(kills + 1, assists + 1); // Simulate kills/assists
  updatePlacement("Top 5", 2); // Simulate better placement
}, 5000); // Update every 5 seconds for demonstration
