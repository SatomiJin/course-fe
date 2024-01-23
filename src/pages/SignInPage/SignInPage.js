import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";

import { updateUser } from "../../redux/Slides/userSlide";
import * as UserService from "../../service/UserService";
import "./SignInPage.scss";
import { toast } from "react-toastify";
import LoadingComponent from "../../components/LoadingComponent/LoadingComponent";
const SignInPage = () => {
  let navigate = useNavigate();
  let [isLoading, setIsLoading] = useState(false);
  // let location = useLocation();
  let dispatch = useDispatch();
  let [detailUser, setDetailUser] = useState({});
  let [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  // const mutation = useMutationHook(async (data) => await UserService.signIn(data));
  // let { data } = mutation;
  //function
  const handleRedirect = (e) => {
    if (e.target.name === "home") {
      navigate("/");
    }
  };
  const handleSignIn = async () => {
    setIsLoading(true);
    let res = await UserService.signIn(userInfo);

    setDetailUser(res);
  };
  const handleOnchange = (e) => {
    let copyState = { ...userInfo };
    copyState[e.target.name] = e.target.value;
    setUserInfo({
      ...copyState,
    });
  };
  const handleGetDetailUser = async (email, token) => {
    let storage = localStorage.getItem("refresh_token");
    const refresh_token = JSON.parse(storage);
    let res = await UserService.getDetailUser({ email: email, token: token });
    dispatch(updateUser({ ...res.data, access_token: token, refresh_token: refresh_token }));
  };
  //useEffect

  useEffect(() => {
    if (detailUser.status === "ERROR") {
      setIsLoading(false);
      toast.error(detailUser.message);
    }
    if (detailUser && detailUser.status === "OK") {
      setIsLoading(false);
      navigate("/");
      toast.success(detailUser.message);

      localStorage.setItem(
        "access_token",
        JSON.stringify(detailUser && detailUser.access_token !== "" && detailUser.access_token)
      );
      localStorage.setItem(
        "refresh_token",
        JSON.stringify(detailUser && detailUser.refresh_token !== "" && detailUser.refresh_token)
      );
      if (detailUser && detailUser.access_token) {
        const decoded = jwtDecode(detailUser.access_token);
        if (decoded && decoded.email !== "") {
          handleGetDetailUser(decoded.email, detailUser.access_token);
        }
      }
    }
  }, [detailUser]);
  return (
    <div className="sign-in-container">
      {/* <ToastComponent /> */}
      {isLoading === true && <LoadingComponent />}
      <div className="sign-in-content">
        <div className="sign-in-title">START WITH KOUTAJIN NOW...!</div>
        <div className="sign-in-form py-3 row">
          <div className="input-container">
            <input
              type="text"
              onChange={(e) => handleOnchange(e)}
              id="emailInput"
              value={userInfo.email}
              name="email"
              className="custom-input"
            />
            <label
              htmlFor="emailInput"
              className={userInfo && userInfo.email.length > 0 ? "label-custom" : "custom-label"}
            >
              Email
            </label>
          </div>
          <div className="input-container py-4">
            <input
              type="password"
              onChange={(e) => handleOnchange(e)}
              name="password"
              value={userInfo.password}
              id="passwordInput"
              className="custom-input"
            />
            <label
              htmlFor="passwordInput"
              className={userInfo && userInfo.password.length > 0 ? "label-custom" : "custom-label"}
            >
              Password
            </label>
          </div>
          <div className="sign-in-text">
            <div className="sign-up">Sign up now!</div>
            <div className="forgot-password">I can't remember password!</div>
          </div>
          <div className="sign-in-button row">
            <button className="btn btn-lg btn-login" onClick={handleSignIn}>
              Login
            </button>
            <button className="btn btn-lg btn-home my-2" name="home" onClick={(e) => handleRedirect(e)}>
              <i className="fa-solid fa-house-chimney"></i> Home
            </button>
          </div>
          <div className="text-center py-3">Or Sign In with:</div>
          <div className="sign-in-social">
            <button className="google">
              <i className="fa-brands fa-google-plus-g"></i>
            </button>
            <button className="facebook">
              <i className="fa-brands fa-facebook-f"></i>
            </button>
            <button className="microsoft">
              <i className="fa-brands fa-windows"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
