function VideoIntroComponent(props) {
  return (
    <div className="video-container">
      <iframe
        width={props.width}
        height={props.height}
        style={{ borderRadius: "1rem" }}
        src="https://www.youtube.com/embed/h7cOOfpdEfk?list=RDntF3kNK4rMw"
        title="Youtube Video"
        // frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen={true}
      ></iframe>
    </div>
  );
}

export default VideoIntroComponent;
