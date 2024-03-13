const workoutService = require('../services/workoutService');

const getAllWorkouts = (req,res) =>  {
    const allWorkouts = workoutService.getAllWorkouts();
res.send({status:"OK", data: allWorkouts});
};

const getOneWorkout = (req,res) => {
    const oneWorkout = workoutService.getOneWorkout(req.params.workoutId);
res.send(`Get workout ${req.params.workoutId}`);
};

const createOneWorkout = (req,res) => {
    
    const createWorkout = workoutService.createNewWorkout(req.params.workoutId);
    res.send(`Create workout ${req.params.workoutId}`);
    };

    const updateOneWorkout = (req,res) => {
        const updateOneWorkout = workoutService.updateOneWorkout(req.params.workoutId);
        res.send(`Update workout ${req.params.workoutId}`);
        };

        const deleteOneWorkout = (req,res) => {
             workoutService.deleteOneWorkout(req.params.workoutId);
            res.send(`Delete workout ${req.params.workoutId}`);
            }
    
            module.exports = {
                getAllWorkouts,
                getOneWorkout,
                createOneWorkout,
                updateOneWorkout,
                deleteOneWorkout,
            }

        