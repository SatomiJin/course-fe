import { textIntroduce } from "../../../constant";
import HeaderHome from "../../Header/HeaderHome/HeaderHome";
import "./HomeTopComponent.scss";
function HomeTopComponent() {
  return (
    <div className="home-top-container">
      <HeaderHome />
      <div className="home-top-content container">
        <div className="title">
          Library of online course
          <div className="title-other-color">Programming Language</div>
          From zero to hero
        </div>
        <div className="introduce-content">{textIntroduce}</div>
      </div>
    </div>
  );
}

export default HomeTopComponent;
