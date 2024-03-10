import { useLocation, useNavigate } from "react-router-dom";

import * as LessonService from "../../../service/LessonService";
import "./ListLessonComponent.scss";
import { useEffect, useState } from "react";
function ListLessonComponent() {
  let location = useLocation();
  let navigate = useNavigate();
  let idCourse = location.pathname.split("/")[2];
  let [listLesson, setListLesson] = useState([]);
  const handleGetListLesson = async () => {
    let res = await LessonService.getAllLessonsOfCourse(idCourse.toUpperCase());
    if (res && res.status === "OK") {
      setListLesson(res.data);
    }
  };

  //useEffect
  useEffect(() => {
    handleGetListLesson();
  }, []);

  return (
    <div className="list-lesson-container">
      <div className="dropdown">
        <button
          className="btn btn-list-lesson dropdown-toggle"
          type="button"
          id="dropdownMenuButton2"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          List Lesson of Course
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
          {listLesson &&
            listLesson.length > 0 &&
            listLesson.map((item, index) => {
              return (
                <li onClick={() => navigate(`/learning/${idCourse}/${item.id}`)} className="dropdown-item" key={index}>
                  {item.name.toUpperCase()}
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default ListLessonComponent;
