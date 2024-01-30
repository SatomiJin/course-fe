import { useSelector } from "react-redux";

import "./User.scss";
import OffCanvas from "../OffCanvas/OffCanvas";
import { useEffect, useState } from "react";

function User() {
  let user = useSelector((state) => state.user);
  let [detailUser, setDetailUser] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    gender: "",
    image: "",
  });
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
      {detailUser && detailUser.image !== "" ? (
        <div
          className="offcanvas-container"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasUser"
          aria-controls="offcanvasUser"
        >
          <div className="user-image" style={{ backgroundImage: `url(${detailUser?.image})` }}></div>
          {detailUser?.firstName + " " + detailUser?.lastName}
        </div>
      ) : (
        <div
          className="user-information"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasUser"
          aria-controls="offcanvasUser"
        >
          <i className="fa-solid fa-user"></i> &nbsp; {detailUser?.firstName + " " + detailUser?.lastName}
        </div>
      )}
      <OffCanvas />
    </div>
  );
}

export default User;
