function round(value, precision) {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

const ftoc = function(fahrenheit) {
let celcius = (fahrenheit -32)/1.8000;
return round (celcius,1);
}

const ctof = function(celcius) {
let fahrenheit = (celcius*1.8000)+32;
return round(fahrenheit,1);
}

module.exports = {
  ftoc,
  ctof
}
