import { useSelector } from "react-redux";

import "./User.scss";
import OffCanvas from "../OffCanvas/OffCanvas";

function User() {
  let user = useSelector((state) => state.user);
  return (
    <div className="user-container">
      {user && user.image !== "" ? (
        <div
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasUser"
          aria-controls="offcanvasUser"
          className="user-image"
          style={{ backgroundImage: `url(${user?.image})` }}
        ></div>
      ) : (
        <div
          className="user-information"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasUser"
          aria-controls="offcanvasUser"
        >
          <i className="fa-solid fa-user"></i> &nbsp; {user?.firstName + " " + user?.lastName}
        </div>
      )}
      <OffCanvas />
    </div>
  );
}

export default User;
