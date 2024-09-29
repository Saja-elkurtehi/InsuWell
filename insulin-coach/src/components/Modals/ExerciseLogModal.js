// src/Modals/ExerciseLogModal.js
import React, { useState } from 'react';
import './ExerciseLogModal.css'; // Add custom styles if needed

const ExerciseLogModal = ({ show, handleClose, exercises = [], onExerciseUpdate }) => {
    const [exerciseName, setExerciseName] = useState('');
    const [duration, setDuration] = useState('');
    const [calories, setCalories] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Call the passed function to update exercises
        onExerciseUpdate((prevExercises) => [
            ...prevExercises,
            { name: exerciseName, duration, calories },
        ]);
        // Reset the form fields
        setExerciseName('');
        setDuration('');
        setCalories('');
        handleClose(); // Close the modal after submission
    };

    return (
        <div className={`modal ${show ? 'show' : ''}`} style={{ display: show ? 'block' : 'none' }} aria-hidden={!show}>
            <div className="modal-dialog modal-custom">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Log Exercises</h5>
                        <button type="button" className="close" onClick={handleClose} aria-label="Close">
                            <span>&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="exerciseName" className="form-label">Exercise</label>
                                <input
                                    type="text"
                                    id="exerciseName"
                                    className="form-control"
                                    value={exerciseName}
                                    onChange={(e) => setExerciseName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="duration" className="form-label">Duration (minutes)</label>
                                <input
                                    type="number"
                                    id="duration"
                                    className="form-control"
                                    value={duration}
                                    onChange={(e) => setDuration(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="calories" className="form-label">Calories Burned</label>
                                <input
                                    type="number"
                                    id="calories"
                                    className="form-control"
                                    value={calories}
                                    onChange={(e) => setCalories(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">Add Exercise</button>
                        </form>
                        <table className="table mt-3">
                            <thead>
                                <tr>
                                    <th>Exercise</th>
                                    <th>Duration</th>
                                    <th>Calories Burned</th>
                                </tr>
                            </thead>
                            <tbody>
                                {exercises.map((exercise, index) => (
                                    <tr key={index}>
                                        <td>{exercise.name}</td>
                                        <td>{exercise.duration} minutes</td>
                                        <td>{exercise.calories} kcal</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExerciseLogModal;
