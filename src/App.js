import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import OnlyHeader from "./components/Layout/OnlyHeader";
import DefaultLayout from "./components/Layout/DefaultLayout";
import { resetUser, updateUser } from "./redux/Slides/userSlide";
import * as utils from "./utils";
import * as UserService from "./service/UserService";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleDecoded = () => {
    let storageData = (user && user.access_token) || localStorage.getItem("access_token");
    let decoded = {};
    if (storageData && utils.isJsonString(storageData) && !user.access_token) {
      storageData = JSON.parse(storageData);
      decoded = jwtDecode(storageData);
    }
    return { decoded, storageData };
  };

  //useEffect
  useEffect(() => {
    const { decoded, storageData } = handleDecoded();
    if (decoded && decoded.email) {
      handleGetDetailUser(decoded.email, storageData);
    }
  }, []);
  const handleGetDetailUser = async (email, token) => {
    let storageRefreshToken = localStorage.getItem("refresh_token");
    let refreshToken = JSON.parse(storageRefreshToken);
    let res = await UserService.getDetailUser({ email, token });
    dispatch(updateUser({ ...res.data, access_token: token, refreshToken: refreshToken }));
  };

  UserService.axiosJWT.interceptors.request.use(
    async (config) => {
      const currentTime = new Date();
      const { decoded } = handleDecoded();
      let storageRefreshToken = localStorage.getItem("refresh_token");
      const refreshToken = JSON.parse(storageRefreshToken);
      let decodedRefreshToken = jwtDecode(refreshToken);
      if (decoded && decoded.exp < currentTime.getTime() / 1000) {
        if (decodedRefreshToken && decodedRefreshToken.exp > currentTime.getTime() / 1000) {
          const data = await UserService.refreshTokenService(refreshToken);
          config.headers["token"] = `Bearer ${data && data.access_token}`;
        } else {
          dispatch(resetUser());
        }
      }
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );

  return (
    <div className="App">
      <Router>
        <Routes>
          {routes.map((item, index) => {
            let Page = item.page;
            let Layout =
              item.isShowHeader && item.isShowFooter ? DefaultLayout : item.isShowHeader ? OnlyHeader : Fragment;
            return (
              <Route
                key={index}
                path={item.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              ></Route>
            );
          })}
        </Routes>
      </Router>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
