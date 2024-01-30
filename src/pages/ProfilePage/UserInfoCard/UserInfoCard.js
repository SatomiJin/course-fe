import { useSelector } from "react-redux";

import "./UserInfoCard.scss";
import { useEffect, useState } from "react";
function UserInfoCard() {
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
    <div className="user-info-card-container row" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="200">
      <div className="content-left col-4">
        <div
          style={{ backgroundImage: detailUser && detailUser?.image !== "" && `url(${user?.image})` }}
          className="content-left-image"
        ></div>
      </div>
      <div className="content-right col-8">
        <div className="content-right-list">
          <ul>
            <li>
              <i className="fa-regular fa-envelope"></i> {detailUser?.email}
            </li>
            <li>
              <i className="fa-regular fa-user"></i> {detailUser?.firstName + " " + user?.lastName}
            </li>
            <li style={{ textTransform: "capitalize" }}>
              <i className="fa-solid fa-venus-mars"></i> {detailUser?.gender}
            </li>
            <li>
              <i className="fa-solid fa-square-phone"></i> {detailUser?.phoneNumber}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UserInfoCard;
