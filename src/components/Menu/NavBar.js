import "./NavBar.scss";
import User from "../User/User";
function NavBar() {
  return (
    <div className="navbar-container">
      <div className="navbar-content container">
        <div className="navbar-content__menu row">
          <div className="options col-8">
            <ul className="list-option">
              <li className="options-item">Home</li>
              <li className="options-item">User management</li>
              <li className="options-item">Course management</li>
              <li className="options-item">Lesson management</li>
            </ul>
          </div>
          <div className="user-info col-4">
            <User />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
