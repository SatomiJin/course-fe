import UserInfoCard from "./UserInfoCard/UserInfoCard";
import "./ProfilePage.scss";
function ProfilePage() {
  return (
    <div className="profile-user-container">
      <div className="profile-user-body row">
        <div className="body-left col-5">
          <UserInfoCard />
        </div>
        <div className="body-right col-7"></div>
      </div>
    </div>
  );
}

export default ProfilePage;
