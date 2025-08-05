import React from "react";
import Video from "next-video";
import awesomeVideo from "@/videos/field.mp4";
function VideoBg() {
  return (
    <>
      <div className=" fixed left-0 top-0  h-screen w-screen mx-auto  ">
        <Video
          src={awesomeVideo}
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          className="w-screen! h-screen  "
        />
      </div>
    </>
  );
}

export default VideoBg;
