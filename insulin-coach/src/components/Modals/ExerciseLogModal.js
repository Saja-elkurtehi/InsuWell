// src/Modals/ExerciseLogModal.js
import React from 'react';
import './ExerciseLogModal.css'; // Add custom styles if needed

const ExerciseLogModal = ({ show, handleClose, exercises }) => {
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
                        <table className="table">
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
