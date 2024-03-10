import "./VideoIntroComponent.scss";
import YouTube from "react-youtube";
function VideoLessonComponent(props) {
  let option = {
    height: props.height,
    width: props.width,
    playerVars: {
      autoplay: props.autoplay,
    },
  };
  return (
    <div className="video-lesson-container">
      <YouTube
        style={{ padding: 0, margin: 0 }}
        title={props.title}
        className="video-lesson"
        videoId={props.videoId}
        opts={option}
      ></YouTube>
    </div>
  );
}

export default VideoLessonComponent;
