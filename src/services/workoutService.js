const Workout = require('../database/Workout');

const getAllWorkouts = () => {
    return Workout.getAllWorkouts(); // Llama al método getAllWorkouts() del objeto Workout
};

const getOneWorkout = (workoutId) => {
    return Workout.getOneWorkout(workoutId); // Llama al método getOneWorkout() del objeto Workout pasando workoutId como argumento
};

const createOneWorkout = (workoutData) => {
    return Workout.createOneWorkout(workoutData); // Llama al método createOneWorkout() del objeto Workout pasando workoutData como argumento
};

const updateOneWorkout = (workoutId, updatedWorkoutData) => {
    return Workout.updateOneWorkout(workoutId, updatedWorkoutData); // Llama al método updateOneWorkout() del objeto Workout pasando workoutId y updatedWorkoutData como argumentos
};

const deleteOneWorkout = (workoutId) => {
    return Workout.deleteOneWorkout(workoutId); // Llama al método deleteOneWorkout() del objeto Workout pasando workoutId como argumento
};

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createOneWorkout,
    updateOneWorkout,
    deleteOneWorkout,
};
