import axios from "axios";

export const axiosJWT = axios.create();

export const signIn = async (data) => {
  let res = await axios.post(`${process.env.REACT_APP_API_URL}user/sign-in`, data);
  return res.data;
};

export const getDetailUser = async (data) => {
  console.log("data", data);
  let res = await axios.get(`${process.env.REACT_APP_API_URL}user/get-detail-user`, {
    headers: {
      token: `Bearer ${data.token}`,
      email: data.email,
    },
  });

  return res.data;
};

// /refresh-token
export const refreshTokenService = async (refresh_token) => {
  let res = await axios.post(`${process.env.REACT_APP_API_URL}user/refresh-token`, {
    headers: {
      token: `Bearer ${refresh_token}`,
    },
  });
  return res.data;
};

//sign up
export const signUpUser = async (data) => {
  let res = await axios.post(`${process.env.REACT_APP_API_URL}user/sign-up`, data);
  return res.data;
};
