import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import workoutData from "../data/workoutData";
import "./WorkoutTracker.css";

function WorkoutTracker() {
  return (
    <div className="workout-tracker">
      <h2>Workout Tracker</h2>
      <ResponsiveContainer width="90%" height={300}>
        <LineChart data={workoutData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="caloriesBurned" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
      <img src="/images/tracker.png" alt="Workout Tracker" className="tracker-image" />
    </div>
  );
}

export default WorkoutTracker;
