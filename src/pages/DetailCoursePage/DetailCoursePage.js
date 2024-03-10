import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import * as CourseService from "../../service/CourseService";
import VideoIntroComponent from "../../components/VideoComponent/VideoIntroComponent";
import ListLessonComponent from "../../components/Lesson/ListLessonComponent/ListLessonComponent";
import "./DetailCoursePage.scss";
function DetailCoursePage() {
  let location = useLocation();
  let courseId = location.pathname.split("/")[2];
  let [courseDetail, setCourseDetail] = useState({});

  const handleGetDetailCourse = async () => {
    let res = await CourseService.getDetailCourse(courseId);
    if (res && res.status === "OK") {
      setCourseDetail(res.data);
    }
  };
  //useEffect
  useEffect(() => {
    handleGetDetailCourse();
  }, []);

  return (
    <div className="detail-course-container">
      <div className="detail-course-body container py-3">
        <div className="detail-course-title">
          <div className="course-name">{courseDetail && courseDetail.name !== "" && courseDetail.name}</div>-
          <div className="course-price">
            <i className="fa-solid fa-money-bill-wave"></i>&nbsp;
            {courseDetail && courseDetail.price === 0 ? "FREE" : courseDetail?.price}
          </div>
        </div>
        <div className="detail-course-detail row">
          <div className="detail-left col-7">
            <div className="course-description row my-3">
              <div className="title">
                <i className="fa-solid fa-circle-info"></i> Course's Description
              </div>
              <div className="description my-2 mx-2 col-12">
                {courseDetail && courseDetail.description !== "" && courseDetail.description}
              </div>
              <div className="detail col-12"></div>
              <div className="list-course col-12">
                <ListLessonComponent />
              </div>
            </div>
          </div>
          <div className="detail-right col-5">
            <div className="detail-right-video">
              <VideoIntroComponent height={300} width="100%" />
            </div>
            <div className="detail-right-desc">
              <div className="detail-right-desc-price">
                {courseDetail && courseDetail.price !== "" && courseDetail?.price === 0 ? "Free" : courseDetail.price}
              </div>
              <div className="detail-right-desc-btn">
                <button className="btn btn-lg">Subscribe</button>
              </div>
              <ul>
                <li>
                  <i className="fa-solid fa-code"></i> Basic qualifications
                </li>
                <li>
                  <i className="fa-solid fa-graduation-cap"></i> Total {courseDetail && courseDetail?.lessonCount}{" "}
                  lessons
                </li>
                <li>
                  <i className="fa-solid fa-battery-full"></i> Learning anytime, everywhere
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailCoursePage;
