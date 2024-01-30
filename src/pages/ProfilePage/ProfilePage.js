import UserInfoCard from "./UserInfoCard/UserInfoCard";
import "./ProfilePage.scss";
import UserInfoForm from "./UserInfoForm/UserInfoForm";

function ProfilePage() {
  return (
    <div className="profile-user-container">
      <div className="profile-user-body">
        <div className="body-left">
          <UserInfoCard />
        </div>
        <div className="body-right">
          <UserInfoForm />
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
