export const getXCoordinateOfCircle = (center, radius, i, n) => {
  return center + radius * Math.cos((i * 2 * Math.PI) / n);
};

export const getYCoordinateOfCircle = (center, radius, i, n) => {
  return center + radius * -Math.sin((i * 2 * Math.PI) / n);
};

export const clearCanvas = canvas => {
  var context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
};
