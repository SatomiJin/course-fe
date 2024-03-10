import "./Achievement.scss";
import { useNavigate } from "react-router-dom";
const Achievement = () => {
  let navigate = useNavigate();
  return (
    <div className="achievement-container">
      <div className="container py-5">
        <div className="achievement-content row" data-aos="flip-right" data-aos-duration="1000" data-aos-delay="200">
          <div className="achievement-content-block col-3">
            <div className="block">
              <div className="achievement-content-icon">
                <i className="fa-solid fa-arrow-rotate-left"></i>
              </div>
              <div className="achievement-content-auto-increment">16</div>
              <div className="achievement-content-title">Working Hours</div>
            </div>
          </div>

          <div className="achievement-content-block col-3">
            <div className="block">
              <div className="achievement-content-icon">
                <i className="fa-solid fa-gift"></i>
              </div>
              <div className="achievement-content-auto-increment">675</div>
              <div className="achievement-content-title">Scholarship</div>
            </div>
          </div>

          <div className="achievement-content-block col-3">
            <div className="block">
              <div className="achievement-content-icon">
                <i className="fa-solid fa-users"></i>
              </div>
              <div className="achievement-content-auto-increment">10000</div>
              <div className="achievement-content-title">Registered students</div>
            </div>
          </div>

          <div className="achievement-content-block col-3">
            <div className="block">
              <div className="achievement-content-icon">
                <i className="fa-solid fa-medal"></i>
              </div>
              <div className="achievement-content-auto-increment">890</div>
              <div className="achievement-content-title">Awarded Certificates</div>
            </div>
          </div>
          <div className="achievement-content-button">
            <button onClick={() => navigate("/learning")} className="btn btn-info btn-lg">
              Learn programming now!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
