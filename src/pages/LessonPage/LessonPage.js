import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import * as LessonService from "../../service/LessonService";
import * as utils from "../../utils";
import VideoLessonComponent from "../../components/VideoComponent/VideoLessonComponent";
import MenuLesson from "../../components/Lesson/MenuLesson/MenuLesson";
import "./LessonPage.scss";
function LessonPage() {
  let location = useLocation();
  let idLesson = location.pathname.split("/")[3];
  let idCourse = location.pathname.split("/")[2];
  let [idVideo, setIdVideo] = useState("");

  let [lessonDetail, setLessonDetail] = useState({});
  const handleGetDetailLesson = async () => {
    let res = await LessonService.getLessonById(idCourse, idLesson);
    if (res && res.status === "OK") {
      setLessonDetail(res.data);
    }
  };

  //useEffect
  useEffect(() => {
    handleGetDetailLesson();
  }, [location]);
  useEffect(() => {
    if (lessonDetail && lessonDetail.urlLesson !== "") {
      setIdVideo(utils.handleGetVideoIdYb(lessonDetail.urlLesson));
    }
  }, [lessonDetail]);

  return (
    <div className="lesson-page-container p-4">
      <div className="lesson-page-body row">
        <div className="body-left col-8">
          <VideoLessonComponent height={400} width={"100%"} title={lessonDetail.name} autoPlay={0} videoId={idVideo} />
          <div className="video-name">
            #{lessonDetail && lessonDetail?.lessonNumber} - {lessonDetail && lessonDetail.name}
          </div>
        </div>
        <div className="body-right col-4">
          <MenuLesson idCourse={idCourse} />
        </div>
      </div>
    </div>
  );
}

export default LessonPage;
