import { useSelector } from "react-redux";
import "./OffCanvas.scss";
function OffCanvas() {
  let user = useSelector((state) => state.user);
  const bodyOptions = () => {
    return (
      <div className="options row">
        <button className="btn btn-lg col-12">
          <i className="fa-solid fa-user"></i> My Profile
        </button>
        <button className="btn btn-lg col-12">
          <i className="fa-solid fa-book"></i> My Course
        </button>
        <button className="btn btn-lg col-12">
          <i className="fa-solid fa-gear"></i> Management
        </button>
        <button className="btn btn-lg col-12">
          <i className="fa-solid fa-right-from-bracket"></i> Sign Out
        </button>
      </div>
    );
  };
  return (
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasUser" aria-labelledby="offcanvasUserLabel">
      <div className="offcanvas-header">
        <div id="offcanvasUserLabel" className="title">
          User's Information
        </div>
        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <div className="offcanvas-body-top row">
          <div className="image-user col-4">
            <div
              className="image"
              style={{ backgroundImage: user && user?.image !== "" && `url(${user.image})` }}
            ></div>
          </div>
          <div className="user-info col-8">
            <ul>
              <li>
                <i className="fa-solid fa-user"></i> &nbsp;
                {user?.firstName + " " + user?.lastName}
              </li>
              <li>
                <i className="fa-solid fa-venus-mars"></i> &nbsp;
                {user?.gender}
              </li>
              <li>
                <i className="fa-solid fa-mobile"></i> &nbsp;
                {user?.phoneNumber}
              </li>
            </ul>
          </div>
        </div>
        <div className="offcanvas-body-bottom">{bodyOptions()}</div>
      </div>
    </div>
  );
}

export default OffCanvas;
