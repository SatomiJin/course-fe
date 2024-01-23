import ".//ListCourseComponent.scss";
import Course from "./Course/Course";
function ListCourseComponent() {
  return (
    <div className="list-component-container">
      <div className="title">Some Programming Course</div>
      <div className="list-component-body container">
        <div className="body-list-course" data-aos="fade-left" data-aos-duration="1000">
          <Course />
        </div>
      </div>
    </div>
  );
}

export default ListCourseComponent;
