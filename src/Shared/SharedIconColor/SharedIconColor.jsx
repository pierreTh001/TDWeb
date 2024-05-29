import React from "react";
import "./SharedIconColor.scss";

function SharedIconColor({ iconName, text, color }) {
  const divStyle = {
    backgroundColor: color,
  };
  return (
    <>
      <div className="descriptionBloc">
        <div className="descriptionIcon" style={divStyle}>
          <span className="material-symbols-outlined">{iconName}</span>
        </div>
        <span className="descriptionText">{text}</span>
      </div>
    </>
  );
}

export default SharedIconColor;
