/* Define map */
let map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: -1,
    maxZoom: 1
});
let bounds = [[0,0], [760,1920]];
let imageSource = 'https://i.imgur.com/IFK5QBJ.png';
/* let imageSource = 'north_ward.png'; */
let image = L.imageOverlay(imageSource, bounds).addTo(map);
map.fitBounds(bounds);

/* Add marker */
let y = 460;
let x = 965;
let zoom = 1;
let sol = L.latLng([ y, x ]);
L.marker(sol, {
    title: 'Trollskull Manor',
    riseOnHover: true
}).addTo(map);
map.setView( [y, x], zoom);
