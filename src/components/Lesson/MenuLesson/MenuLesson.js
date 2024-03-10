import { useEffect, useState } from "react";

import * as utils from "../../../utils";
import ".//MenuLesson.scss";
import VideoLessonComponent from "../../VideoComponent/VideoLessonComponent";
import * as LessonService from "../../../service/LessonService";
import { useNavigate } from "react-router-dom";
function MenuLesson(props) {
  let navigate = useNavigate();
  let [listLesson, setListLesson] = useState([]);
  const handleGetAllLesson = async () => {
    let res = await LessonService.getAllLessonsOfCourse(props.idCourse.toUpperCase());
    if (res && res.status === "OK") {
      setListLesson(res.data);
    }
  };

  //useEffect
  useEffect(() => {
    handleGetAllLesson();
  }, []);
  return (
    <div className="menu-lesson-container">
      <div className="menu-body">
        {listLesson &&
          listLesson.length > 0 &&
          listLesson?.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => navigate(`/learning/${props.idCourse.toUpperCase()}/${item.id}`)}
                className="menu-content row"
              >
                <div className="video col-4">
                  <VideoLessonComponent
                    videoId={utils.handleGetVideoIdYb(item.urlLesson)}
                    width={"100%"}
                    height={"100"}
                  />
                </div>
                <div className="title col-8">{item.name}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default MenuLesson;
