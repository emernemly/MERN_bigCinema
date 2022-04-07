import React from "react";
import { useParams } from "react-router-dom";

const Movies = () => {
  const { _id } = useParams();
  console.log(_id);
  return (
    <div>
      <video id="videoPlayer" height="90%" width="100%" controls muted autoPlay>
        <source src={`/video/${_id}`} type="video/mp4" />
      </video>
    </div>
  );
};

export default Movies;
