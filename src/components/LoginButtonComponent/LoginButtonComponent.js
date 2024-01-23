import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "./LoginButtonComponent.scss";
import UserOptions from "../UserOptions/UserOptions";

const LoginButtonComponent = () => {
  let user = useSelector((state) => state.user);
  let navigate = useNavigate();
  const handleRedirect = (e) => {
    if (e.target.name === "signIn") {
      navigate("/sign-in");
    }
    if (e.target.name === "signUp") {
      navigate("/sign-up");
    }
  };
  //useEffect
  return (
    <div className="login-button-container">
      <div className="list-button">
        {user && (user.firstName || user?.lastName) === "" ? (
          <>
            <button className="btn btn-lg btn-login" onClick={(e) => handleRedirect(e)} name="signIn">
              Login
            </button>
            <button className="btn btn-lg btn-info btn-res" onClick={(e) => handleRedirect(e)} name="signUp">
              Register
            </button>
          </>
        ) : (
          <UserOptions />
        )}
      </div>
    </div>
  );
};

export default LoginButtonComponent;
