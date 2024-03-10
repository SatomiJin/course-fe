import { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import LoginButtonComponent from "../../LoginButtonComponent/LoginButtonComponent";
import "./HeaderComponent.scss";
import * as constants from "../../../constant";
import User from "../../User/User";
function HeaderComponent() {
  let user = useSelector((state) => state.user);
  let navigate = useNavigate();
  let location = useLocation();
  let [activeNav, setActiveNav] = useState({
    name: location.pathname.slice(1),
    active: true,
  });
  const handleRedirect = (name) => {
    setActiveNav({
      name: name,
      active: true,
    });
    if (name === "home") {
      navigate("/");
    } else {
      navigate(`/${name}`);
    }
  };
  return (
    <div className="header-component-container">
      <div className="header-content">
        <div className="header-logo"></div>
        <div className="header-nav row">
          <div className="header-nav-left col-8">
            <ul>
              {constants.navItem.map((itemNav, index) => {
                return (
                  <li
                    className={activeNav.name === itemNav && activeNav.active === true ? "active" : ""}
                    onClick={() => handleRedirect(itemNav)}
                    key={index}
                  >
                    {itemNav}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="header-nav-right col-4">
            {user && (user?.firstName || user?.lastName) ? <User /> : <LoginButtonComponent />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;
