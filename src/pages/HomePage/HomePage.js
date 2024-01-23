import HomeBottomComponent from "../../components/HomeComponent/HomeBottomComponent/HomeBottomComponent";
import HomeMiddleComponent from "../../components/HomeComponent/HomeMiddleComponent/HomeMiddleComponent";
import HomeTopComponent from "../../components/HomeComponent/HomeTopComponent/HomeTopComponent";
import Achievement from "../../components/animations/Achievement";
import ".//HomePage.scss";
function HomePage() {
  return (
    <div className="home-page-container">
      <div className="home-page-top">
        <HomeTopComponent />
      </div>
      <div className="home-page-middle">
        <HomeMiddleComponent />
      </div>
      <div className="home-page-middle-achievement">
        <div className="home-middle-achievement">
          <Achievement />
        </div>
      </div>
      <div className="home-page-bottom">
        <HomeBottomComponent />
      </div>
    </div>
  );
}

export default HomePage;
