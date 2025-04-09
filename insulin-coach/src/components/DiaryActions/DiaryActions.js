import React, { useState } from 'react';
import { FaAppleAlt, FaRunning, FaHeartbeat, FaStickyNote } from 'react-icons/fa';
import FoodLogModal from '../Modals/FoodLogModal';
import ExerciseLogModal from '../Modals/ExerciseLogModal';
import './DiaryActions.css';
import { getHeight } from 'rsuite/esm/DOMHelper';

const DiaryActions = () => {
    const [showFoodModal, setShowFoodModal] = useState(false);
    const [showExerciseModal, setShowExerciseModal] = useState(false);
    const [mealsOfTheWeek, setMealsOfTheWeek] = useState([]);
    const [exercisesOfTheWeek, setExercisesOfTheWeek] = useState([]);

    const handleMealsUpdate = (newMeals) => {
        setMealsOfTheWeek(newMeals);
        console.log("new meals", newMeals);
    };

    const handleExerciseUpdate = (newExercises) => {
        setExercisesOfTheWeek(newExercises);
        console.log("new exercises", newExercises);
    };

    return (
        <div style={cardStyle}>
            {/* Top action buttons */}
            <div className="d-flex flex-wrap justify-content-between mb-3 gap-2">
                <button className="btn" style={btnStyle} onClick={() => setShowFoodModal(true)}>
                    <FaAppleAlt /> Food
                </button>
                <button className="btn" style={btnStyle} onClick={() => setShowExerciseModal(true)}>
                    <FaRunning /> Exercise
                </button>
                <button className="btn" style={btnStyle}>
                    <FaHeartbeat /> Biometric
                </button>
                <button className="btn" style={btnStyle}>
                    <FaStickyNote /> Journal
                </button>
            </div>

            {/* Meals Section */}
            <h5>Meals of the Week</h5>
            {showFoodModal && (
                <FoodLogModal
                    show={showFoodModal}
                    handleClose={() => setShowFoodModal(false)}
                    onMealsUpdate={handleMealsUpdate}
                />
            )}

            <div className="meals-of-the-week">
                <div className="meal-cards-container">
                    <div className="meal-cards">
                        {mealsOfTheWeek.map((meal, index) => (
                            <div className="meal-card" key={index}>
                                <img src={meal.image} alt={meal.title} className="meal-image" />
                                <div className="meal-title">{meal.title}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Exercises Modal */}
            {showExerciseModal && (
                <ExerciseLogModal
                    show={showExerciseModal}
                    handleClose={() => setShowExerciseModal(false)}
                    exercises={exercisesOfTheWeek}
                    onExerciseUpdate={handleExerciseUpdate}
                />
            )}

            {/* Placeholder for future bottom content */}
            <div className="mb-3">
                <div className="d-flex">
                    {/* Future content can go here */}
                </div>
            </div>
        </div>
    );
};

const cardStyle = {
    backgroundColor: 'white',
    padding: '16px',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    width: '100%',
    boxSizing: 'border-box',
    height: ' 350px'
};

const btnStyle = {
    backgroundColor: '#8984D8',
    color: 'white',
};

export default DiaryActions;
