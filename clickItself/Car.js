import React from "react";

const Car = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "15px",
        backgroundColor: "greenyellow",
        color: "blueviolet",
        marginBottom: "15px"
      }}
    >
      <div>
        {props.carData.company} {props.carData.isClicked ? "Clicked" : ""}
      </div>
      <div>
        <button
          style={{ marginRight: "10px" }}
          onClick={() => props.clickHandler(props.carData.id, true)}
        >
          Click Me
        </button>
        {props.carData.year}
      </div>
    </div>
  );
};

export default Car;
