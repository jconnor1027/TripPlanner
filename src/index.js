const mapboxgl = require("mapbox-gl");

mapboxgl.accessToken = 'pk.eyJ1IjoiamNvbm5vcjEwMjciLCJhIjoiY2szNHA1aWNuMTd5OTNuczVsdW4wNmxhaCJ9.t8Y8CRJgqfo7AGBSwB9AOA';

const map = new mapboxgl.Map({
  container: "map",
  center: [-87.6354, 41.8885], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});
