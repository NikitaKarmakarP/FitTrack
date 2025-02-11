import React from "react";
import "./ExerciseVideos.css";

function ExerciseVideos() {
  return (
    <div className="exercise-videos">
      <h2>Exercise Video Tutorials</h2>
      <video controls width="80%">
        <source src="/videos/exercise-tutorial.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default ExerciseVideos;
