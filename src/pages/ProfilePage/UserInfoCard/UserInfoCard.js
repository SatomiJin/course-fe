import { useSelector } from "react-redux";

import "./UserInfoCard.scss";
function UserInfoCard() {
  let user = useSelector((state) => state.user);
  return (
    <div className="user-info-card-container row">
      <div className="content-left col-4">
        <div className="content-left-image"></div>
        <button className="btn btn-lg btn-danger">Change avatar</button>
      </div>
      <div className="content-right col-8">
        <div className="content-right-list">
          <ul>
            <li>
              <i className="fa-regular fa-envelope"></i> {user?.email}
            </li>
            <li>
              <i className="fa-regular fa-user"></i> {user?.firstName + " " + user?.lastName}
            </li>
            <li>
              <i className="fa-solid fa-venus-mars"></i> {user?.gender}
            </li>
            <li>
              <i className="fa-solid fa-square-phone"></i> {user?.phoneNumber}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UserInfoCard;
