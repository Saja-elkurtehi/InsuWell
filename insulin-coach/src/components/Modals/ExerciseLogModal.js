import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ExerciseLogModal.css';

const ExerciseLogModal = ({ show, handleClose, onExerciseUpdate }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    const [activeExerciseId, setActiveExerciseId] = useState(null);
    const [exerciseDetails, setExerciseDetails] = useState({ caloriesBurned: null, duration: null });
    const [exercisesOfTheWeek, setExercisesOfTheWeek] = useState([]);

    const handleAddExercise = (exercise) => {
        setExercisesOfTheWeek([...exercisesOfTheWeek, exercise]);
        setActiveExerciseId(null);
        onExerciseUpdate([...exercisesOfTheWeek, exercise]);
    };

    const handleCloseModal = () => {
        handleClose();
        onExerciseUpdate(exercisesOfTheWeek);
    };

    const handleSearch = () => {
        // Simulate an API search result, replace this with real data fetching
        const dummyResults = [
            { id: 1, title: 'Running - 30 mins' },
            { id: 2, title: 'Cycling - 45 mins' },
            { id: 3, title: 'Swimming - 1 hour' }
        ];
        setResults(dummyResults);
    };

    const handleExerciseSelect = (exerciseId) => {
        setActiveExerciseId(exerciseId);
        const selectedExercise = results.find((exercise) => exercise.id === exerciseId);
        setExerciseDetails({
            caloriesBurned: Math.floor(Math.random() * 500) + 100,
            duration: selectedExercise ? selectedExercise.title.split(' - ')[1] : 'Unknown'
        });
    };

    return (
        <div className={`modal ${show ? 'show' : ''}`} style={{ display: show ? 'block' : 'none' }} aria-hidden={!show}>
            <div className="modal-dialog modal-custom">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Log Exercise</h5>
                        <button type="button" className="close" onClick={handleCloseModal} aria-label="Close">
                            <span>&times;</span>
                        </button>
                    </div>
                    <div className="modal-body1">
                        <div className="search-container">
                            <div className="modal-body">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Search for an exercise..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <button className="button" onClick={handleSearch}>
                                    Search
                                </button>
                            </div>

                            {results.length > 0 && (
                                <ul className="list-group mt-2">
                                    {results.map((exercise) => (
                                        <li
                                            key={exercise.id}
                                            className={`list-group-item clickable-item ${activeExerciseId === exercise.id ? 'active' : ''}`}
                                            onClick={() => handleExerciseSelect(exercise.id)}
                                        >
                                            {exercise.title}
                                            {activeExerciseId === exercise.id && (
                                                <button 
                                                    className="button btn-space" 
                                                    onClick={() => handleAddExercise(exercise)} 
                                                >
                                                    Add Exercise
                                                </button>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {exerciseDetails.caloriesBurned && (
                            <div className="mt-3">
                                <h6>Exercise Details:</h6>
                                <p>Calories Burned: {exerciseDetails.caloriesBurned}</p>
                                <p>Duration: {exerciseDetails.duration}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExerciseLogModal;
