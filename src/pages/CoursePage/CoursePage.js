import ListCourseComponent from "../../components/ListCourseComponent/ListCourseComponent";
import "./CoursePage.scss";
function CoursePage() {
  return (
    <div className="course-page-container">
      <div className="course-page-background-header"></div>
      <div className="course-page-courses">
        <ListCourseComponent />
      </div>
    </div>
  );
}

export default CoursePage;
