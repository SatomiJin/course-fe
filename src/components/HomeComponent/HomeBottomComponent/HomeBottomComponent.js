import "./HomeBottomComponent.scss";

function HomeBottomComponent() {
  return (
    <div className="home-bottom-container">
      <div className="home-bottom-content row">
        <div className="content-left col-6">
          <div className="content-left-logo"></div>
          <div className="content-left-descriptions">
            KoutaJin is an online platform that helps users to learn, practice coding skills and join the online coding
            contests.
          </div>
          <div className="content-left-contact">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-youtube"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-twitch"></i>
          </div>
        </div>
        <div className="content-right col-6 row">
          <div className="col-4">
            <ul>
              <div className="title">LINKS</div>
              <li>Learning</li>
              <li>Training</li>
              <li>Course</li>
            </ul>
          </div>
          <div className="col-4">
            <ul>
              <div className="title">INFORMATION</div>
              <li>About Us</li>
              <li>Terms of Use</li>
            </ul>
          </div>
          <div className="col-4">
            <ul>
              <div className="title">HELPS</div>
              <li>Helps</li>
              <li>Discussion</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBottomComponent;
