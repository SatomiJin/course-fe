import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { updateUser } from "../../../redux/Slides/userSlide";
import * as UserService from "../../../service/UserService";
import ViewPhoto from "../../..//components/animations/ViewPhoto";
import * as utils from "../../../utils";
import "./UserInfoForm.scss";
function UserInfoForm() {
  let user = useSelector((state) => state.user);
  let dispatch = useDispatch();
  let [detailUser, setDetailUser] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    gender: "male",
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
  //function
  const handleOnchange = (e) => {
    let copyState = { ...detailUser };
    copyState[e.target.name] = e.target.value;
    setDetailUser({
      ...copyState,
    });
  };
  const handleOnchangeImage = async (e) => {
    let data = e.target.files;
    let file = data[0];
    if (file) {
      let base64 = await utils.getBase64(file);
      setDetailUser({
        ...detailUser,
        image: base64,
      });
    }
  };
  const handleChangeInfo = async () => {
    let copyState = { ...detailUser };
    let res = await UserService.updateUserInfo(copyState, user?.access_token);
    if (res && res.status === "OK") {
      toast.success(res.message);
      dispatch(updateUser(copyState));
    } else {
      toast.error(res.message);
    }
  };
  return (
    <>
      <ViewPhoto src={detailUser && detailUser?.image} />
      <div className="user-info-form-container" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200">
        <div className="title">User's Information</div>
        <div className="user-info-form-content row">
          <div className="form-group col-12">
            <label>Email:</label>
            <input
              type="email"
              style={{ cursor: "not-allowed" }}
              className="form-control"
              name="email"
              value={detailUser.email}
              disabled
              readOnly
            />
          </div>

          <div className="form-group col-6">
            <label>First name:</label>
            <input
              type="text"
              className="form-control"
              name="firstName"
              value={detailUser.firstName}
              onChange={(e) => handleOnchange(e)}
            />
          </div>
          <div className="form-group col-6">
            <label>Last name:</label>
            <input
              type="text"
              className="form-control"
              name="lastName"
              onChange={(e) => handleOnchange(e)}
              value={detailUser.lastName}
            />
          </div>

          <div className="form-group col-4">
            <label>Phone number:</label>
            <input
              type="text"
              className="form-control"
              name="phoneNumber"
              onChange={(e) => handleOnchange(e)}
              value={detailUser.phoneNumber}
            />
          </div>

          <div className="form-group col-4">
            <label>Phone number:</label>
            <select
              className="form-select"
              onChange={(e) => handleOnchange(e)}
              name="gender"
              value={detailUser.gender}
              aria-label="Default select example"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group user-image col-4">
            <button className="btn btn-lg">
              <label htmlFor="image">{detailUser?.image === "" ? "Choose image" : "Changes image"}</label>
            </button>
            <div
              style={{ backgroundImage: detailUser && detailUser?.image && `url(${detailUser?.image})` }}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              className="user-avatar"
            ></div>
            <input type="file" id="image" name="image" onChange={(e) => handleOnchangeImage(e)} hidden />
          </div>

          <button className="btn-changes-info btn btn-lg btn-success col-12" onClick={() => handleChangeInfo()}>
            Save changes
          </button>
        </div>
      </div>
    </>
  );
}

export default UserInfoForm;
