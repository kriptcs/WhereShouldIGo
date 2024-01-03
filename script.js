//----------------------------------------------FUNCTIONS

//---------------------------MAIN PAGE FUNCTIONS
//COLORING THE CONTINENT BUTTONS
for (let i = 0; i <= 6; i++) {
  btn[i] = document.querySelector("#btn" + i);
}

for (let i = 0; i <= 6; i++) {
  countHandler[i] = true;
}
coloringAll(0);
function coloringAll(j) {
  if (ok1 == 0) {
    if (countHandler[j] === true) {
      btn[j].style.color = "white";
      countHandler[j] = false;
      continent[j] = j;
      ok = 1;
    } else if (countHandler[j] === false) {
      btn[j].style.color = "rgb(102, 102, 102)";
      countHandler[j] = true;
      continent[j] = "";
      ok = 0;
    }
  }
}

function coloring(j) {
  if (ok == 0) {
    if (countHandler[j] === true) {
      btn[j].style.color = "white";
      countHandler[j] = false;
      continent[j] = j;
      ok1 = 1;
    } else if (countHandler[j] === false) {
      btn[j].style.color = "rgb(102, 102, 102)";
      countHandler[j] = true;
      continent[j] = "";
      ok1 = 0;
    }
  }
}

//Randomize and Filter the results

randomize();
function randomize() {
  var contArray = [],
    j = 0,
    continentListArray = [];
  for (let i = 0; i < 7; i++) {
    if (continent[i] == "0")
      contArray.push("EU", "AS", "NA", "SA", "AF", "OC", "AN");
    if (continent[i] == "1") contArray.push("EU");
    if (continent[i] == "2") contArray.push("AS");
    if (continent[i] == "3") contArray.push("NA");
    if (continent[i] == "4") contArray.push("SA");
    if (continent[i] == "5") contArray.push("AF");
    if (continent[i] == "6") contArray.push("OC");
  }

  while (j <= contArray.length) {
    for (let i = 0; i < list.length; i++) {
      if (list[i].continent == contArray[j]) {
        continentListArray.push(list[i]);
      }
    }
    j++;
  }

  RandomNo = Math.floor(Math.random() * continentListArray.length);

  localStorage.setItem(
    "name",
    JSON.stringify(continentListArray[RandomNo].name)
  );
  localStorage.setItem(
    "description",
    JSON.stringify(continentListArray[RandomNo].description)
  );
  short_name = continentListArray[RandomNo].short_name;
  weather(short_name);

  document.getElementById("countryname").innerHTML =
    continentListArray[RandomNo].name;
  localStorage.setItem("latitude", continentListArray[RandomNo].lat);
  localStorage.setItem("longitude", continentListArray[RandomNo].lng);
}

//---------------------------- STREET VIEW PAGE FUNCTIONS
// Street view box

//google maps api
function initialize() {
  //credit https://developers.google.com/maps/documentation/javascript/streetview
  latitude = JSON.parse(localStorage.latitude);
  longitude = JSON.parse(localStorage.longitude);
  panorama = new google.maps.StreetViewPanorama(
    document.getElementById("street-view"),
    {
      position: { lat: latitude, lng: longitude },
      pov: { heading: 165, pitch: 0 },
      zoom: 1,
    }
  );

  AddText();
}

//Connecting Arrays to MAPS Page
function AddText() {
  Name = JSON.parse(localStorage.name);
  Description = JSON.parse(localStorage.description);
  Temperature = JSON.parse(localStorage.temperature);
  document.getElementById("Titlebox").innerHTML = Name;
  document.getElementById("infotext").innerHTML = Description;
  document.getElementById("description1").innerHTML = Temperature;
}

// Info box toggler
function infoBoxToggler() {
  let Selector = document.getElementById("infotext");
  if (Selector.style.display === "flex") {
    Selector.style.display = "none";
  } else {
    Selector.style.display = "flex";
  }
}

// WEATHER API
// SOURCE RAPID API - https://rapidapi.com/community/api/open-weather-map
// + GOOGLE JQUERY HOSTED LIBRARY - https://developers.google.com/speed/libraries
function weather(short_name) {
  const settings = {
    async: true,
    crossDomain: true,
    url:
      "https://community-open-weather-map.p.rapidapi.com/weather?q=" +
      short_name +
      "&lat=0&lon=0&units=%22metric%22%20",
    method: "GET",
    headers: {
      "x-rapidapi-key": "2de3316188msh788a37ee7a73af9p1f4899jsn6bcc3980f382",
      "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
    },
  };

  $.ajax(settings).done(function (response) {
    JSON.stringify(response);
    Temperature = Math.round(response.main.temp - 273);
    localStorage.setItem("temperature", Temperature);
  });
}

//ASK THE USER FOR THEIR LOCATION AND STORE THAT IN LOCAL STORAGE
function getLocation() {
  // SOURCE - BIG DATA CLOUD SDK: https://github.com/bigdatacloudapi/js-reverse-geocode-client

  let reverseGeocoder = new BDCReverseGeocode();
  reverseGeocoder.getClientLocation(function (result) {
    localStorage.setItem("getLat", result.latitude);
    localStorage.setItem("getLong", result.longitude);
    geolocation();
  });
}

//CALCULATE DISTANCE BETWEEN USER AND LOCATION
function geolocation() {
  var lat1 = JSON.parse(localStorage.getLat);
  var lon1 = JSON.parse(localStorage.getLong);

  var lat2 = JSON.parse(localStorage.latitude);
  var lon2 = JSON.parse(localStorage.longitude);

  const R = 6371e3; // metres
  const φ1 = (lat1 * Math.PI) / 180; // φ, λ in radians
  const φ2 = (lat2 * Math.PI) / 180;
  const Δφ = ((lat2 - lat1) * Math.PI) / 180;
  const Δλ = ((lon2 - lon1) * Math.PI) / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const d = R * c;
  document.getElementById("Location").innerHTML = Math.round(d / 1000) + " km";
}
