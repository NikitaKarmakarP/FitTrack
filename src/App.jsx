import React from 'react';
import Navbar from './components/Navbar';
import WorkoutTracker from './components/WorkoutTracker';
import CalorieCounter from './components/CalorieCounter';
import ExerciseVideos from './components/ExerciseVideos';
import CustomWorkoutPlan from './components/CustomWorkoutPlan';
import Achievements from './components/Achievements';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto p-4">
        <WorkoutTracker />
        <CalorieCounter />
        <ExerciseVideos />
        <CustomWorkoutPlan />
        <Achievements />
      </main>
    </div>
  );
}

export default App;
