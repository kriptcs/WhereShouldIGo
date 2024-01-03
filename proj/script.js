let panorama, latitude, longitude;
let list = { name: "", lat: "", lng: "" };

function text() {
  let a = document.getElementById("text");
  h1 = document.createElement("h1");
  node = document.createTextNode("HEllo");
  h1.appendChild(node);
  a.appendChild(h1);
}

function initialize() {
  //credit https://developers.google.com/maps/documentation/javascript/streetview

  latitude = JSON.parse(localStorage.lat);
  longitude = JSON.parse(localStorage.lng);
  console.log(latitude, longitude);
  panorama = new google.maps.StreetViewPanorama(
    document.getElementById("street-view"),
    {
      position: { lat: latitude, lng: longitude },
      pov: { heading: 165, pitch: 0 },
      zoom: 1,
    }
  );
}

function info(x) {
  if (x == 1) {
    localStorage.setItem("lat", "9.839523963227087");
    localStorage.setItem("lng", "124.17690138495948");
  }
  if (x == 2) {
    localStorage.setItem("lat", "42.809995201931244");
    localStorage.setItem("lng", "-114.77480120049758");
  }

  if (x == 3) {
    area.name = "NZ";
  }
}
