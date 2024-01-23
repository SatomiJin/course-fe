import MarqueeComponent from "../../MarqueeComponent/MarqueeComponent";
import "./HomeMiddleComponent.scss";
function HomeMiddleComponent() {
  return (
    <div className="home-middle-container">
      <div className="home-middle-content">
        <div className="content-1">
          <div className="home-middle-content-title">We support programming language</div>
          <div className="home-middle-marque">
            <MarqueeComponent />
          </div>
        </div>
        <div className="content-2" data-aos="zoom-in-up" data-aos-duration="1500" data-aos-delay="200">
          <div className="home-middle-content-title">
            Programming <br />
            is the in-demand skill for the future
          </div>
          <div className="content row">
            <div className="content-left col-6">
              <div className="content-left-img"></div>
            </div>
            <div className="content-right col-5">
              <div className="content-right-des">
                <div className="title">
                  <div className="image-1"></div>
                  <span>Develop creative thinking</span>
                </div>
                <div className="description">
                  Learning to code help you improve logical thinking and take you to a new level in solving problem
                </div>
              </div>
              <div className="content-right-des">
                <div className="title">
                  <div className="image-2"></div>
                  <span>Get to know the technology world</span>
                </div>
                <div className="description">
                  Learning to code to step into the world of information Technology and adapt to the Industry 4.0
                </div>
              </div>
              <div className="content-right-des">
                <div className="title">
                  <div className="image-3"></div>
                  <span>Get more job opportunities</span>
                </div>
                <div className="description">
                  Get more job opportunities Programming jobs are growing 50% faster than the overall job market with an
                  average salary of 30% higher than that of other jobs.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeMiddleComponent;
