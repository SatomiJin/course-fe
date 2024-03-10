import "./Course.scss";
import logo from "../../../assets/image/logo/AWS-Cloud-Practitioner-Web-Image.png";
import { useNavigate } from "react-router-dom";
function Course({ detail }) {
  let navigate = useNavigate();
  const handleRedirectCourse = () => {
    navigate(`/learning/${detail.courseId.toLowerCase().replace(/\s/g, "-")}`, {
      state: detail.courseId,
    });
  };
  return (
    <div className="card-course-container" onClick={() => handleRedirectCourse()}>
      <div className="card" style={{ width: "20rem" }}>
        <img src={detail && detail?.image !== "" ? detail?.image : logo} className="card-img-top" alt="..." />
        <div className="card-body">
          <div className="card-title">{detail && detail?.name}</div>
          <p className="card-text">{detail && detail?.description}</p>
        </div>
        <div className="card-body">
          <div className="price-of-course">{detail && detail?.price === 0 ? "Free" : detail.price}</div>
        </div>
      </div>
    </div>
  );
}

export default Course;
