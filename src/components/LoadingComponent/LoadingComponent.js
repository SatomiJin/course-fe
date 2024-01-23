import "./LoadingComponent.scss";
function LoadingComponent() {
  return (
    <div className="loading-container">
      <div className="scanner">
        <div className="fingarprint"></div>
        {/* <a title="wennew"> */}
        <div className="loading-text">Satomi Jin Loading...</div>
        {/* </a> */}
      </div>
    </div>
  );
}

export default LoadingComponent;
