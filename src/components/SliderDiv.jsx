import React, { useState } from "react";
import PropTypes from "prop-types";
function SliderDiv(props) {
  const initialPosition = { x: 0, y: 0 };
  var [mouseDirection, setMouseDirection] = useState({ direction: "none" });
  var [mouseMovePosition, setMouseMovePosition] = useState(initialPosition);
  var [mouseClicked, setMouseClicked] = useState(false);
  var [sliderWidth, setSliderWidth] = useState(0);
  var [sliderDisplay, setSliderDisplay] = useState("block");

  const onMouseDown = e => {
    //mouse down
    setMouseClicked(true);
    setSliderWidth(e.target.offsetWidth);
  };

  const onMouseUp = e => {
    //mouse up
    setMouseClicked(false);
    setMouseDirection({ direction: "none" });
  };

  const onMouseMove = e => {
    if (mouseClicked) {
      //Dragging started slide animation now
      if (mouseMovePosition.x > e.pageX) {
        setMouseDirection({ direction: "left" });
        setSliderWidth(sliderWidth - Math.abs(e.pageX - sliderWidth));
      } else {
        setMouseDirection({ direction: "right" });
        setSliderWidth(sliderWidth + (e.pageX - sliderWidth));
      }
      if (sliderWidth < window.innerWidth / 10) {
        setSliderDisplay("none");
      } else {
        setSliderDisplay("block");
      }
      setMouseMovePosition({ x: e.pageX, y: e.pageY });
    }
  };

  return (
    <div
      className={props.className}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      style={
        mouseDirection.direction !== "none"
          ? mouseDirection.direction === "left"
            ? {
                backgroundColor: "red",
                width: sliderWidth,
                display: sliderDisplay
              }
            : {
                backgroundColor: "green",
                width: sliderWidth,
                display: sliderDisplay
              }
          : { color: "black", display: sliderDisplay }
      }
    >
      {props.content}
    </div>
  );
}

SliderDiv.propTypes = {
  className: PropTypes.string.isRequired
};

export default SliderDiv;
