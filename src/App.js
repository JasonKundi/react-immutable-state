import { useState } from "react";
import { initialWorkouts, generateWorkout } from "./Workouts.js";
import "./App.css";

//exercise: "Hill Sprints",
//reps: 10,
//sets: 4,
//rest: 5,
//done: false

function App() {
  const [workouts, setWorkouts] = useState(initialWorkouts);

  const addNewWorkout = () => {
    const newWorkout = [...workouts];
    newWorkout.push({ generateWorkout,});
    setWorkouts(newWorkout);
    console.log("addNewWorkout:", newWorkout);
  };

  const deleteWorkout = (target) => {
    const workoutToDelete = workouts.filter(function (workout) {
      return workout !== target;
    });
    setWorkouts(workoutToDelete);

    console.log("deleteWorkout:", target);
  };

  const completeWorkout = (target) => {
    const markAsComplete = workouts.map(function(workout) {
      if (target === workout) {
        return {...workouts, done: true}
      }
      return workout
    })
    setWorkouts(markAsComplete)
    console.log("completeWorkout:", target);
  };

  return (
    <div className="App">
      <h1>🏋️‍♀️Workout Generator</h1>
      <button onClick={addNewWorkout}>Add New Workout</button>
      <ul>
        {workouts.map((workout, index) => (
          <li key={index}>
            <p>
              {workout.sets}x sets of{" "}
              <strong>
                {workout.reps}x{workout.exercise}
              </strong>{" "}
              with {workout.rest} seconds rest
            </p>
            {!workout.done && (
              <button onClick={(e) => completeWorkout(workout)}>Done</button>
            )}
            {workout.done && <p>✅</p>}
            <button onClick={(e) => deleteWorkout(workout)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
