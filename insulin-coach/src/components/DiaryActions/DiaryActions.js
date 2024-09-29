// src/components/DiaryActions.js
import React, { useState } from 'react';
import { FaAppleAlt, FaRunning, FaHeartbeat, FaStickyNote, FaFastBackward } from 'react-icons/fa';
import FoodLogModal from '../Modals/FoodLogModal';
import './DiaryActions.css'; 
import Calendar from '../Calendar'; // Use the simpler Calendar component
import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import 'bootstrap/dist/css/bootstrap.min.css';

const DiaryActions = () => {
    const [showModal, setShowModal] = useState(false);
    const [mealsOfTheWeek, setMealsOfTheWeek] = useState([]);

    //const [todos, setTodos] = useState({ breakfast: [], lunch: [], dinner: [], snacks: [] });
    //const [currentMeal, setCurrentMeal] = useState('breakfast');
    const [newTodo, setNewTodo] = useState('');

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const handleMealsUpdate = (newMeals) => {
        setMealsOfTheWeek(newMeals);
        console.log("new meals", newMeals);
    };

    /*const handleResetMeals = () => {
        setMealsOfTheWeek([]); 
    };*/


    /*const addTodo = () => {
        if (newTodo) {
            setTodos((prev) => ({
                ...prev,
                [currentMeal]: [...prev[currentMeal], newTodo],
            }));
            setNewTodo('');
        }
    };*/

    // Data for the pie chart
    const data = [
        { name: 'Calories', value: 400 },
        { name: 'Protein', value: 300 },
        { name: 'Carbs', value: 300 },
        { name: 'Fat', value: 200 },
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    return (
        <div className="d-flex justify-content-center mb-2">
            <div className="d-flex flex-row">
                <div className="me-3" style={{ width: '660px', marginLeft: '-245px'}}> 
                    <div className="card" style={{
                        backgroundColor: 'white',
                        marginTop: '50px',
                        padding: '10px',
                        borderRadius: '10px',
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                    }}>
                        <div className="card-body">
                            
                            <div className="d-flex align-items-center justify-content-between flex-wrap mb-3">
                                <button type="button" className="btn btn-primary m-1" title="Log a serving to your diary" onClick={handleShow}>
                                    <FaAppleAlt /> Food
                                </button>
                                 {/*<button type="button" className="btn btn-primary m-1" title="Log an exercise to your diary">
                                    <FaRunning /> Exercise
                                </button>*/}
                                <button type="button" className="btn btn-primary m-1" title="Log a biometric to your diary">
                                    <FaHeartbeat /> Biometric
                                </button>
                                {/*<button type="button" className="btn btn-primary m-1" title="Log a note to your diary">
                                    <FaStickyNote /> Journal
                                </button>
                                <button type="button" className="btn btn-primary m-1" title="Log a fast to your diary">
                                    <FaFastBackward /> Fast
                </button>*/}
                            </div>

                            <h5>Meals of the Week</h5>
                            {showModal && (
                                <FoodLogModal
                                    show={showModal}
                                    handleClose={() => setShowModal(false)}
                                    onMealsUpdate={handleMealsUpdate} 
                                />
                            )}
                            {/*<button onClick={handleResetMeals} className="btn btn-danger">
                                Reset Meals of the Week
                            </button>*/}

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

                            <div className="mb-3">
                                <div className="d-flex">
                                    
                                </div>
                            </div>

                            {/*Object.keys(todos).map((meal) => (
                                <div key={meal}>
                                    <h6>{meal.charAt(0).toUpperCase() + meal.slice(1)}:</h6>
                                    <ul>
                                        {todos[meal].map((todo, index) => (
                                            <li key={index}>{todo}</li>
                                        ))}
                                    </ul>
                                </div>
                                        ))*/}
                        </div>
                    </div>
                </div>

                <div style={{ width: '200px' }}> {/* Set width for calendar */}
                    <Calendar />
                </div>
                
            </div>

            {/*<FoodLogModal show={showModal} handleClose={handleClose} onMealsUpdate={handleMealsUpdate}/>*/}
        </div>
    );
};

export default DiaryActions;
