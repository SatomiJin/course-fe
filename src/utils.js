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

export const getBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
};

export const handleGetVideoIdYb = (url) => {
  let urlSplit = "";
  let urlSplit2 = "";
  if (url) {
    urlSplit = url.split("v=")[1];
    urlSplit2 = urlSplit.split("&");
    return urlSplit2[0];
  }
};
