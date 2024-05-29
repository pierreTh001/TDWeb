import React from "react";
import "./HowItsWork.scss";
import SharedIconColor from "../../../Shared/SharedIconColor/SharedIconColor";

function HowItsWork() {
  return (
    <div className="howItsWork">
      <h1>Comment nous fonctionnons ?</h1>
      <div className="desc">
        <SharedIconColor
          text={"Prennez rendez vous"}
          iconName={"calendar_month"}
          color="#91c478"
        />
        <div className="separatorWork"></div>
        <SharedIconColor
          text={"Première proposition"}
          iconName={"draw"}
          color="#78adc4"
        />
        <div className="separatorWork"></div>
        <SharedIconColor
          text={"Mise en ligne"}
          iconName={"rocket_launch"}
          color="##787bc4"
        />
        <div className="separatorWork"></div>
        <SharedIconColor
          text={"Suivi"}
          iconName={"communication"}
          color="#c4ba78"
        />
      </div>
    </div>
  );
}

export default HowItsWork;
