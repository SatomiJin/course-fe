import axios from "axios";

export const getAllLessonsOfCourse = async (courseId) => {
  let res = await axios.get(`${process.env.REACT_APP_API_URL}lesson/get-all-lessons`, {
    headers: {
      courseid: courseId,
    },
  });

  return res.data;
};

export const getLessonById = async (courseId, lessonId) => {
  let res = await axios.get(`${process.env.REACT_APP_API_URL}lesson/get-lesson-by-id`, {
    headers: {
      courseid: courseId.toUpperCase(),
      lessonid: lessonId,
    },
  });
  return res.data;
};
