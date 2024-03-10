import axios from "axios";

export const getAllCourse = async () => {
  let res = await axios.get(`${process.env.REACT_APP_API_URL}course/get-all-course`);
  return res.data;
};

export const getDetailCourse = async (courseId) => {
  let res = await axios.get(`${process.env.REACT_APP_API_URL}course/get-detail-course`, {
    headers: {
      id: courseId,
    },
  });
  return res.data;
};
