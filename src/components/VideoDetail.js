import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }
  const videoSRC = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe title="video player" src={videoSRC} />
      </div>
      <div className="ui segment">
        <h4 className="header"> {video.snippet.title} </h4>
        <p> {video.snippet.description} </p>
      </div>
    </div>
  );
};

export default VideoDetail;
