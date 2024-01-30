import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import * as UserService from "../../service/UserService";
import "./SignUpPage.scss";
import LoadingComponent from "../../components/LoadingComponent/LoadingComponent";
function SignUpPage() {
  let navigate = useNavigate();
  let [isLoading, setIsLoading] = useState(false);
  let [detailSignUp, setDetailSignUp] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    firstName: "",
    lastName: "",
    gender: "male",
  });

  //function
  const handleOnchange = (e) => {
    let copyState = { ...detailSignUp };
    copyState[e.target.name] = e.target.value;
    setDetailSignUp({ ...copyState });
  };
  const signUpUser = async () => {
    setIsLoading(true);
    let res = await UserService.signUpUser(detailSignUp);
    if (res && res.status === "OK") {
      toast.success("Sign up account successfully!");
      setIsLoading(false);
      navigate("/sign-in");
      setDetailSignUp({
        email: "",
        password: "",
        confirmPassword: "",
        phoneNumber: "",
        firstName: "",
        lastName: "",
        gender: "male",
      });
    }
  };

  const handleRedirect = (e) => {
    if (e.target.name === "home") {
      navigate("/");
    }
    if (e.target.name === "signIn") {
      navigate("/sign-in");
    }
  };
  return (
    <div className="sign-up-container">
      {isLoading === true ? <LoadingComponent /> : <></>}
      <div className="sign-up-box">
        <div className="sign-up-logo my-3"></div>
        <div className="sign-up-title">
          Register as a member <br /> KoutaJin
        </div>
        <div className="sign-up-form row">
          <div className="form-group col-9">
            <label>Email:</label>
            <input
              type="text"
              onChange={(e) => handleOnchange(e)}
              name="email"
              value={detailSignUp?.email}
              className="form-control"
            />
          </div>
          <div className="form-group col-3">
            <label>Phone number:</label>
            <input
              type="text"
              onChange={(e) => handleOnchange(e)}
              name="phoneNumber"
              value={detailSignUp?.phoneNumber}
              className="form-control"
            />
          </div>
          {/* password */}
          <div className="form-group col-6">
            <label>Password:</label>
            <input
              type="password"
              onChange={(e) => handleOnchange(e)}
              name="password"
              value={detailSignUp?.password}
              className="form-control"
            />
          </div>
          <div className="form-group col-6">
            <label>Confirm Password:</label>
            <input
              type="password"
              onChange={(e) => handleOnchange(e)}
              name="confirmPassword"
              value={detailSignUp?.confirmPassword}
              className="form-control"
            />
          </div>
          {/* info */}
          <div className="form-group col-4">
            <label>First name:</label>
            <input
              type="text"
              onChange={(e) => handleOnchange(e)}
              name="firstName"
              value={detailSignUp?.firstName}
              className="form-control"
            />
          </div>
          <div className="form-group col-4">
            <label>Last name:</label>
            <input
              type="text"
              onChange={(e) => handleOnchange(e)}
              name="lastName"
              value={detailSignUp?.lastName}
              className="form-control"
            />
          </div>
          <div className="form-group col-4">
            <label>Gender:</label>
            <select
              className="form-select"
            c
              value={detailSignUp?.gender}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other..</option>
            </select>
          </div>

          <div className="list-button">
            <button className="btn btn-register" onClick={() => signUpUser()}>
              <i className="fa-solid fa-right-to-bracket"></i> Sign up now!
            </button>
            <button className="btn btn-back" name="home" onClick={(e) => handleRedirect(e)}>
              <i className="fa-solid fa-arrow-rotate-left"></i> Back to sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
