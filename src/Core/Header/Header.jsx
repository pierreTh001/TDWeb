import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <>
      <div className="headerText">
        <div className="name">
          <img
            src="/public/Img/logo td.png"
            alt="logo"
            className="logoHeader"
          />
          <span className="companyName">TD Web</span>
          <div className="separatorHeader"></div>
        </div>
        <div>
          <Link to="/">Notre histoire</Link>
          <Link to="/">Notre expertise</Link>
          <Link to="/">Carrière</Link>
          <Link to="/">Contact</Link>
        </div>
      </div>
    </>
  );
}

export default Header;
