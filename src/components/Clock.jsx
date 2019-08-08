import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  getXCoordinateOfCircle,
  getYCoordinateOfCircle,
  clearCanvas
} from "../utils";

function Clock(props) {
  const canvasRef = React.createRef();
  var [secondsValue, setSecondsHand] = useState(0);
  var [minutesValue, setMinutesHand] = useState(0.0);
  var [hoursValue, setHoursHand] = useState(0);

  useEffect(() => {
    drawCircle();
    markTimeLine();
    setInterval(() => {
      clearCanvas(canvasRef.current);
      drawCircle();
      markTimeLine();
      drawMinutesHand(minutesValue);
      drawHourHand(hoursValue);
      drawSecondsHand(secondsValue);
    }, 1000);
  });

  const drawCircle = () => {
    var context = canvasRef.current.getContext("2d");
    context.beginPath();
    context.arc(
      canvasRef.current.width / 2,
      canvasRef.current.height / 2,
      canvasRef.current.width / 2,
      0,
      Math.PI * 2
    );
    context.strokeStyle = "black";
    context.stroke();
    context.closePath();
  };

  const markTimeLine = () => {
    var context = canvasRef.current.getContext("2d");
    context.beginPath();
    for (var i = 0; i < 12; i++) {
      context.strokeText(
        i,
        getXCoordinateOfCircle(
          canvasRef.current.width / 2,
          canvasRef.current.width / 2 - 10,
          i,
          12
        ),
        getYCoordinateOfCircle(
          canvasRef.current.width / 2,
          canvasRef.current.width / 2 - 10,
          i,
          12
        )
      );
    }
    context.strokeStyle = "black";
    context.closePath();
  };

  const drawSecondsHand = seconds => {
    var context = canvasRef.current.getContext("2d");
    context.beginPath();
    context.moveTo(canvasRef.current.width / 2, canvasRef.current.height / 2);
    context.lineTo(
      getXCoordinateOfCircle(
        canvasRef.current.width / 2,
        canvasRef.current.width / 2 - 10,
        seconds,
        12
      ),
      getYCoordinateOfCircle(
        canvasRef.current.width / 2,
        canvasRef.current.width / 2 - 10,
        seconds,
        12
      )
    );
    context.strokeStyle = "red";
    context.stroke();
    context.closePath();
    if (seconds < 12) {
      setSecondsHand(seconds + 1);
    } else {
      setSecondsHand(0);
      setMinutesHand(p => {
        return p + 0.1;
      });
    }
  };

  const drawHourHand = hours => {
    var context = canvasRef.current.getContext("2d");
    context.beginPath();
    context.moveTo(canvasRef.current.width / 2, canvasRef.current.height / 2);
    context.lineTo(
      getXCoordinateOfCircle(
        canvasRef.current.width / 2,
        canvasRef.current.width / 2 - 10,
        hours,
        12
      ),
      getYCoordinateOfCircle(
        canvasRef.current.width / 2,
        canvasRef.current.width / 2 - 10,
        hours,
        12
      )
    );
    context.strokeStyle = "green";
    context.stroke();
    context.closePath();
  };

  const drawMinutesHand = minutes => {
    var context = canvasRef.current.getContext("2d");
    context.beginPath();
    context.moveTo(canvasRef.current.width / 2, canvasRef.current.height / 2);
    context.lineTo(
      getXCoordinateOfCircle(
        canvasRef.current.width / 2,
        canvasRef.current.width / 2 - 10,
        minutes,
        12
      ),
      getYCoordinateOfCircle(
        canvasRef.current.width / 2,
        canvasRef.current.width / 2 - 10,
        minutes,
        12
      )
    );
    context.strokeStyle = "blue";
    context.stroke();
    context.closePath();
    if (minutes > 11.9) {
      setMinutesHand(0.0);
      setHoursHand(p => {
        return p + 1;
      });
    }
  };

  return (
    <div className={props.className}>
      <canvas width={160} height={160} ref={canvasRef} />
    </div>
  );
}

Clock.propTypes = {
  className: PropTypes.string.isRequired
};

export default Clock;
