function LoadingData() {
  return (
    <div className="loading-data-container">
      <div className="spinner-grow" style={{ width: "3rem", height: "3rem" }} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default LoadingData;
