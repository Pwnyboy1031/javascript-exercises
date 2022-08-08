const ftoc = function(begTemp) {
  return parseFloat(((begTemp - 32) * (5/9)).toFixed(1));
};

const ctof = function(begTemp) {
  return parseFloat((begTemp * (9/5) + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
