import { persistor } from "./redux/store";

export const isJsonString = (data) => {
  try {
    JSON.parse(data);
  } catch (e) {
    return false;
  }
  return true;
};

export const signOutUser = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  persistor.pause();
  persistor.flush().then(() => {
    return persistor.purge();
  });
};
