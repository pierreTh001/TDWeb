import React from "react";
import "./Home.scss";
import ModelViewer from "../../Shared/ModelViewer/ModelViewer";
import TDButton from "../../Shared/TDButton/TDButton";
import AnimationInspector from "../../Shared/ModelViewer/AnimationInspector";

function Home() {
  return (
    <>
      <div className="mainBloc">
        <div className="mainBlocLeft">
          <div className="txt1">Votre meilleure site internet</div>
          <div className="txt2">Offrez à vos client une experience unique</div>
          <div className="txt3">
            Un site internet moderne, adapté à vos besoins et ceux de vos
            clients
          </div>
          <div className="btnBloc">
            <TDButton isPrimary={true} txt={"Nous Contacter"} />
            <TDButton isPrimary={false} txt={"Nous Decouvrir"} />
          </div>
        </div>
        <ModelViewer
          className="mainBlocRight"
          modelPath={"/3d/laptop.glb"}
          // modelPath={"/computer-model.glb"}
        />
      </div>
      {/* <div className="histoire">
        <h1>NOTRE HISTOIRE</h1>
        <span className="separator"></span>
        <div className="explain">
          <span>
            Bienvenue chez TD Web, une aventure née de la passion pour le
            développement logiciel.
          </span>
          <span>
            Notre entreprise a débuté comme une initiative individuelle visant à
            offrir des solutions numériques de qualité supérieure.
          </span>
          <span>
            Notre mission est de transformer les idées en réalités tangibles
            grâce à des services de développement sur mesure. Grâce à notre
            expertise technique et notre engagement envers l'excellence, nous
            avons rapidement gagné la confiance de nos clients.
          </span>
          <span>
            Aujourd'hui, TD Web offre une gamme de services allant du
            développement web et mobile à la gestion de projets complexes. Nous
            croyons que la clé de notre succès réside dans la collaboration
            étroite avec nos clients, et nous nous engageons à livrer des
            solutions uniques et durables.
          </span>
          <span>
            Explorez notre site pour découvrir comment nous pouvons transformer
            vos idées en projets réussis. Chez TD Web, notre histoire ne fait
            que commencer, et nous sommes ravis de la partager avec vous.
          </span>
        </div>
      </div> */}
    </>
  );
}

export default Home;
