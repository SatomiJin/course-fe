import { useEffect, useState } from "react";

import Course from "./Course/Course";
import * as CourseService from "../../service/CourseService";
import "./ListCourseComponent.scss";
function ListCourseComponent() {
  let [listCourse, setListCourse] = useState([]);
  const getAllCourse = async () => {
    let res = await CourseService.getAllCourse();
    if (res && res.status === "OK") {
      setListCourse(res.data);
    }
  };

  //useEffect
  useEffect(() => {
    getAllCourse();
  }, []);
  return (
    <div className="list-component-container">
      <div className="title">Some Programming Course</div>
      <div className="list-component-body container">
        <div className="body-list-course" data-aos="fade-left" data-aos-duration="1000">
          {listCourse &&
            listCourse.length > 0 &&
            listCourse.map((item, index) => {
              return <Course key={index} detail={item} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default ListCourseComponent;
