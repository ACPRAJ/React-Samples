import React from "react";
import ReactPlayer from "react-player";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const onEventOccured = (action) => {
  toast.success(`Player event: ${action}`, {
    position: toast.POSITION.TOP_CENTER,
  });
};

function VideoPlayerComponent() {
  return (
    <div>
      <ReactPlayer
        url={
          "https://www.youtube.com/watch?v=7sDY4m8KNLc&list=PLC3y8-rFHvwhAh1ypBvcZLDO6I7QTY5CM&index=12"
        }
        controls
        onPause={() => onEventOccured("Pause")}
        onReady={() => onEventOccured("Ready")}
        onPlay={() => onEventOccured("Play")}
      />
    </div>
  );
}

export default VideoPlayerComponent;
