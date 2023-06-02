export const calculateDistance = (lat, long, point) => {
  const earthRadius = 3959;
  const dLat = (point.lat - lat) * Math.PI / 180;
  const dLon = (point.long - long) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat * Math.PI / 180) * Math.cos(point.lat * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = earthRadius * c;

  return distance.toFixed(1);
}

 