var arranged = [];

export function sortItems(items) {
  items.sort(function (a, b) {
    //sort by lat, secondary by y
    return a.lat === b.lat ? parseFloat(a.lon) - parseFloat(b.lon) : parseFloat(a.lat) - parseFloat(b.lat);
    //return Math.hypot(a.lat, a.lon) - Math.hypot(b.lat, b.lon);
  });
 return items;

  
   /* for (var i = 0; i < items.length; i++) {
    //check if was already added
    if (typeof items[i].wasAdded == "undefined") {
      arranged.push(items[i]);
      items[i].wasAdded = "true";

      for (let j = i + 1; j < items.length; j++) {
        if (
          items[i].lon > items[j].lon &&
          typeof items[j].wasAdded == "undefined"
        ) {
          arranged.push(items[j]);
          items[j].wasAdded = "true";
        }
      }
    }
  }
  console.log(arranged);  */

  //haversine(items.)
}

function haversine1(first,sec) {
  const R = 6371e3; // metres
  const φ1 = (first.lat1 * Math.PI) / 180; // φ, λ in radians
  const φ2 = (sec.lat2 * Math.PI) / 180;
  const Δφ = ((sec.lat2 - first.lat1) * Math.PI) / 180;
  const Δλ = ((sec.lon2 - first.lon1) * Math.PI) / 180;

  const a =
    Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
    Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const d = R * c;
  return d;
}

function deg2rad(degrees) {
  let radians = degrees * (Math.PI / 180);
  return radians;
}

export function haversine(lat1, lon1, lat2, lon2) {
  let deltaLat = lat2 - lat1;
  let deltaLon = lon2 - lon1;
  let earthRadius = 3959; // in miles 6371 in meters.
  let alpha = deltaLat / 2;
  let beta = deltaLon / 2;
  let a =
    Math.sin(deg2rad(alpha)) * Math.sin(deg2rad(alpha)) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(deg2rad(beta)) *
      Math.sin(deg2rad(beta));
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  let distance = earthRadius * c;
  return distance.toFixed(2);
}

/* function calculateDistance(lat1, lon1, lat2, lon2) {
  var R = 6371; // km
  var dLat = (lat2 - lat1).toRad();
  var dLon = (lon2 - lon1).toRad(); 
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) * 
          Math.sin(dLon / 2) * Math.sin(dLon / 2); 
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)); 
  var d = R * c;
  return d;
}
Number.prototype.toRad = function() {
  return this * Math.PI / 180;
}

navigator.geolocation.getCurrentPosition(({coords}) => {
  coords.latitude = parseFloat(coords.latitude)
  corrds.longitude = parseFloat(coords.longitude)

  locations.sort((p1, p2) => dist(coords, {latitude: parseFloat(p1.latitude), longitude: parseFloat (p1.longitude)}) - 
   dist(coords, {latitude: parseFloat(p2.latitude), longitude: parseFloat(p2.longitude)}))
}) */
