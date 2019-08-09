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

export const fetchUserData = (fetchUrl, successCallback) => {
  fetch(fetchUrl, {
    method: "GET"
  })
    .then(async res => {
      return {
        response: await res.json(),
        status: res.status,
        statusText: res.statusText
      };
    })
    .then(jsonRes => {
      if (jsonRes.status === 200 || jsonRes.status === 4) {
        successCallback(jsonRes);
      } else {
        console.log(jsonRes.statusText);
      }
    })
    .catch(err => {
      console.log(err.toString());
    });
};
