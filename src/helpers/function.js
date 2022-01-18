export function sortItems(items) {
  items.sort(function (a, b) {
    //sort by lat, secondary by y
    return a.lat === b.lat
      ? parseFloat(a.lon) - parseFloat(b.lon)
      : parseFloat(a.lat) - parseFloat(b.lat);
  });
  return items;
}

function deg2rad(degrees) {
  let radians = degrees * (Math.PI / 180);
  return radians;
}

export function calculateDistance(lat1, lon1, lat2, lon2) {
  let deltaLat = lat2 - lat1;
  let deltaLon = lon2 - lon1;
  let earthRadius = 6371; // 6371 in meters.
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
