import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { resetUser } from "../../redux/Slides/userSlide";
import * as utils from "../../utils";
import "./User.scss";

function User() {
  let user = useSelector((state) => state.user);
  let location = useLocation();
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let [detailUser, setDetailUser] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    gender: "",
    image: "",
  });
  //function
  const handleSignOut = async () => {
    await utils.signOutUser();
    dispatch(resetUser());
    if (location.pathname === "/user/profile") {
      navigate("/");
    }
  };
  //useEffect
  useEffect(() => {
    if (user && user.role !== "") {
      setDetailUser({
        email: user?.email,
        firstName: user?.firstName,
        lastName: user?.lastName,
        phoneNumber: user?.phoneNumber,
        gender: user?.gender,
        image: user?.image,
      });
    }
  }, [user]);
  return (
    <div className="user-container">
      <div className="offcanvas-container">
        <div className="btn-group dropdown">
          <button type="button" className="btn" data-bs-toggle="dropdown" aria-expanded="false">
            <div
              className="user-image"
              id="dropdownMenuButton1"
              style={{ backgroundImage: detailUser && detailUser?.image !== "" && `url(${detailUser?.image})` }}
            ></div>

            {detailUser?.firstName + " " + detailUser?.lastName}
          </button>
          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" style={{ textDecoration: "none" }} to="/user/profile">
                <i className="fa-solid fa-address-card"></i> My Profile
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/user/my-course">
                <i className="fa-solid fa-list"></i> My Course
              </Link>
            </li>
            {user && user.role === "R1" && (
              <li>
                <Link className="dropdown-item" to="/system/admin">
                  <i className="fa-solid fa-gears"></i> Management System
                </Link>
              </li>
            )}
            <li onClick={() => handleSignOut()}>
              <Link className="dropdown-item">
                <i className="fa-solid fa-right-from-bracket"></i> Sign Out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default User;
