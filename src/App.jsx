import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import WorkoutTracker from "./components/WorkoutTracker";
import CalorieCounter from "./components/CalorieCounter";
import ExerciseVideos from "./components/ExerciseVideos";
import CustomWorkoutPlan from "./components/CustomWorkoutPlan";
import Achievements from "./components/Achievements";

function App() {
  return (
    <div className="app">
      <Navbar />
      <WorkoutTracker />
      <CalorieCounter />
      <ExerciseVideos />
      <CustomWorkoutPlan />
      <Achievements />
    </div>
  );
}

export default App;
