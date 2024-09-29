import React, { useState } from 'react';
import { FaAppleAlt, FaRunning, FaHeartbeat, FaStickyNote, FaFastBackward } from 'react-icons/fa';
import FoodLogModal from '../Modals/FoodLogModal';
import ExerciseLogModal from '../Modals/ExerciseLogModal';
import './DiaryActions.css'; 
import Calendar from '../Calendar'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const DiaryActions = () => {
    const [showFoodModal, setShowFoodModal] = useState(false);
    const [showExerciseModal, setShowExerciseModal] = useState(false);
    const [mealsOfTheWeek, setMealsOfTheWeek] = useState([]);
    const [exercisesOfTheWeek, setExercisesOfTheWeek] = useState([]); // State for exercises

    const handleShowFood = () => setShowFoodModal(true);
    const handleCloseFood = () => setShowFoodModal(false);
    
    const handleShowExercise = () => setShowExerciseModal(true);
    const handleCloseExercise = () => setShowExerciseModal(false);

    const handleMealsUpdate = (newMeals) => {
        setMealsOfTheWeek(newMeals);
        console.log("new meals", newMeals);
    };

    const handleExerciseUpdate = (newExercises) => {
        setExercisesOfTheWeek(newExercises); // Update state with new exercises
        console.log("new exercises", newExercises);
    };
    

    return (
        <div className="d-flex justify-content-center mb-2">
            <div className="d-flex flex-row">
                <div className="me-3" style={{ width: '660px', marginLeft: '-245px'}}> 
                    <div className="card" style={{
                        backgroundColor: 'white',
                        marginTop: '50px',
                        height: '323px',
                        padding: '10px',
                        borderRadius: '10px',
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                    }}>
                        <div className="card-body">
                            <div className="d-flex align-items-center justify-content-between flex-wrap mb-3">
                                <button type="button" className="btn" style={{ backgroundColor: '#8984D8', color: 'white' }} title="Log a serving to your diary" onClick={handleShowFood}>
                                    <FaAppleAlt /> Food
                                </button>
                                <button type="button" className="btn" style={{ backgroundColor: '#8984D8', color: 'white' }} title="Log an exercise to your diary" onClick={handleShowExercise}>
                                    <FaRunning /> Exercise
                                </button>
                                <button type="button" className="btn" style={{ backgroundColor: '#8984D8', color: 'white' }} title="Log a biometric to your diary">
                                    <FaHeartbeat /> Biometric
                                </button>
                                <button type="button" className="btn" style={{ backgroundColor: '#8984D8', color: 'white' }} title="Log a note to your diary">
                                    <FaStickyNote /> Journal
                                </button>
    
                            </div>

                            <h5>Meals of the Week</h5>
                            {showFoodModal && (
                                <FoodLogModal
                                    show={showFoodModal}
                                    handleClose={handleCloseFood}
                                    onMealsUpdate={handleMealsUpdate} 
                                />
                            )}
                            
                            <div className="meals-of-the-week" style={{ marginBottom: '20px' }}>
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

                            {/* Render the ExerciseLogModal */}
                            {showExerciseModal && (
    <ExerciseLogModal
        show={showExerciseModal}
        handleClose={handleCloseExercise}
        exercises={exercisesOfTheWeek} // Pass the current exercises to the modal
        onExerciseUpdate={handleExerciseUpdate} // Pass the update function
    />
)}

                            
                            <div className="mb-3">
                                <div className="d-flex">
                                    {/* Any additional content can go here */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ width: '200px' }}>
                    <Calendar />
                </div>
                
            </div>
        </div>
    );
};

export default DiaryActions;
