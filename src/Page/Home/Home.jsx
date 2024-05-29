import React from "react";
import "./Home.scss";
import ModelViewer from "../../Shared/ModelViewer/ModelViewer";
import TDButton from "../../Shared/TDButton/TDButton";
import AnimationInspector from "../../Shared/ModelViewer/AnimationInspector";
import ScrollArrow from "../../Shared/ScrollArrow/ScrollArrow";
import HowItsWork from "./HowItsWork/HowItsWork";

function Home() {
  return (
    <>
      <div className="mainBlocParent">
        <div className="mainBloc">
          <div className="mainBlocLeft">
            <div className="txt1">Votre meilleure site internet</div>
            <div className="txt2">
              Offrez à vos client une experience unique
            </div>
            <div className="txt3">
              Un site internet moderne, adapté à vos besoins et ceux de vos
              clients
            </div>
            <div className="btnBloc">
              <TDButton isPrimary={true} txt={"Nous Contacter"} />
              <TDButton isPrimary={false} txt={"Nous Decouvrir"} />
            </div>
          </div>
          <ModelViewer className="mainBlocRight" modelPath={"/3d/laptop.glb"} />
        </div>
        <ScrollArrow />
      </div>
      <HowItsWork />
    </>
  );
}

export default Home;
