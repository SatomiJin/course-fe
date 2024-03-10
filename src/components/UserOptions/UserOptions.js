import { useDispatch, useSelector } from "react-redux";
import "./UserOptions.scss";
import * as utils from "../../utils";
import { useNavigate } from "react-router-dom";
import { resetUser } from "../../redux/Slides/userSlide";
const UserOptions = () => {
  let user = useSelector((state) => state.user);
  let dispatch = useDispatch();
  let navigate = useNavigate();

  const handleChooseOption = async (option) => {
    if (option === "sign-out") {
      await utils.signOutUser();
      dispatch(resetUser());
      navigate("/");
    }
    if (option === "profile") {
      navigate("/user/profile");
    }
    if (option === "manage") navigate("/system/admin");
  };
  return (
    <div className="user-options-container dropdown">
      <div className="btn-group user-options-content">
        <button
          type="button"
          className="btn dropdown-toggle btn-dropdown"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {/* {user && user.image !== "" && (
            <div className="user-image" style={{ backgroundImage: `url(${user.image})` }}></div>
          )} */}
          <div className="user-name">
            {user && (user.firstName !== "" || user.lastName !== "") ? user.firstName + " " + user.lastName : "User"}
          </div>
        </button>
        <ul className="dropdown-menu dropdown-menu-lg-start">
          <li className="dropdown-item" onClick={() => handleChooseOption("profile")}>
            User's Profile
          </li>
          <li className="dropdown-item">User's course</li>
          {user && user.role === "R1" && (
            <li className="dropdown-item" onClick={() => handleChooseOption("manage")}>
              Management system
            </li>
          )}

          <li className="dropdown-item" onClick={() => handleChooseOption("sign-out")}>
            Sign Out
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserOptions;
