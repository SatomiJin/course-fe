import "./Course.scss";
import logo from "../../../assets/image/logo/AWS-Cloud-Practitioner-Web-Image.png";
function Course() {
  return (
    <div className="card-course-container">
      <div className="card" style={{ width: "20rem" }}>
        <img src={logo} className="card-img-top" alt="..." />
        <div className="card-body">
          <div className="card-title">Amazon Web Services</div>
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
        </div>
        <div className="card-body">
          <div className="price-of-course">Free</div>
        </div>
      </div>
    </div>
  );
}

export default Course;
