import { useState } from "react";

import ".//HeaderComponent.scss";
import * as constants from "../../../constant";
import { useLocation, useNavigate } from "react-router-dom";
import User from "../../User/User";
function HeaderComponent() {
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
            <User />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderComponent;
