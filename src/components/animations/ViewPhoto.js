import "./ViewPhoto.scss";
function ViewPhoto(src) {
  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div
            style={{ backgroundImage: src && src?.src && `url(${src.src})` }}
            className="modal-body view-avatar"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default ViewPhoto;
