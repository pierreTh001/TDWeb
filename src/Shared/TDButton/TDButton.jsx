import "./TDButton.scss";

const TDButton = ({ txt, isPrimary }) => {
  return (
    <button className={isPrimary ? "tdButton tdPrimaryButton" : "tdButton"}>
      {txt}
    </button>
  );
};

export default TDButton;
