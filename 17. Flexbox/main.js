let viewer = document.getElementById("viewer");
let chi = document.getElementById("chi");
let col = document.getElementById("col");
let gol = document.getElementById("gol");
let gre = document.getElementById("gre");
let mac = document.getElementById("mac");
let nia = document.getElementById("nia");
let pyr = document.getElementById("pyr");
let taj = document.getElementById("taj");

chi.addEventListener(
  "mouseenter",
  function(event) {
    viewer.style.backgroundImage = "url('img/Chichen_1920x1080.png')";
  },
  false
);

col.addEventListener(
  "mouseenter",
  function(event) {
    viewer.style.backgroundImage = "url('img/Colosseum_1920x1080.png')";
  },
  false
);

gol.addEventListener(
  "mouseenter",
  function(event) {
    viewer.style.backgroundImage = "url('img/Golden_Gate_1920x1080.png')";
  },
  false
);

gre.addEventListener(
  "mouseenter",
  function(event) {
    viewer.style.backgroundImage = "url('img/Great_Wall_1920x1080.png')";
  },
  false
);

mac.addEventListener(
  "mouseenter",
  function(event) {
    viewer.style.backgroundImage = "url('img/Machu_Pichu_1920x1080.png')";
  },
  false
);

nia.addEventListener(
  "mouseenter",
  function(event) {
    viewer.style.backgroundImage = "url('img/Niagara_Falls_1920x1080.png')";
  },
  false
);

pyr.addEventListener(
  "mouseenter",
  function(event) {
    viewer.style.backgroundImage = "url('img/Pyramids_1920x1080.png')";
  },
  false
);

taj.addEventListener(
  "mouseenter",
  function(event) {
    viewer.style.backgroundImage = "url('img/Taj_Mahal_1920x1080.png')";
  },
  false
);
