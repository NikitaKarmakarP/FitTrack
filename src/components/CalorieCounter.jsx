import React from "react";
import "./CalorieCounter.css";

function CalorieCounter() {
  return (
    <div className="calorie-counter">
      <h2>Calorie Counter</h2>
      <img src="/images/meal-plan.jpg" alt="Meal Plan" className="meal-plan-image" />
      <p>Daily calorie suggestions and tracking will be displayed here.</p>
    </div>
  );
}

export default CalorieCounter;
