import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { workoutData } from '../data/workoutData';

function WorkoutTracker() {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4">Workout Tracker</h2>
      <LineChart width={600} height={300} data={workoutData}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="caloriesBurned" stroke="#8884d8" />
      </LineChart>
    </div>
  );
}

export default WorkoutTracker;
