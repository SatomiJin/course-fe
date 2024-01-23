import { useNavigate } from "react-router-dom";
import LoginButtonComponent from "../../LoginButtonComponent/LoginButtonComponent";
import "./HeaderHome.scss";
function HeaderHome() {
  let navigate = useNavigate();
  //function
  const handleRedirect = (name) => {
    if (name === "learning") navigate("/learning");
    if (name === "home") navigate("/");
  };
  return (
    <div className="header-home-container py-3">
      <div className="header-home-content row">
        <div className="header-home-content-left col-9">
          <ul>
            <li onClick={() => handleRedirect("home")}>Home</li>
            <li onClick={() => handleRedirect("learning")}>Learning</li>
            <li>Introduce</li>
            <li>Contact</li>
            <li>Discussion</li>
            <li>Game</li>
          </ul>
        </div>
        <div className="header-home-content-right col-3">
          <LoginButtonComponent />
        </div>
      </div>
    </div>
  );
}

export default HeaderHome;
