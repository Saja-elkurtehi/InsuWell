// src/components/DiaryActions.js
import React, { useState } from 'react';
import { FaAppleAlt, FaRunning, FaHeartbeat, FaStickyNote, FaFastBackward } from 'react-icons/fa';
import FoodLogModal from '../Modals/FoodLogModal';
import Calendar from '../Calendar'; // Use the simpler Calendar component
import { PieChart, Pie, Tooltip, Cell } from 'recharts'; // Import Recharts for the pie chart
import 'bootstrap/dist/css/bootstrap.min.css';

const DiaryActions = () => {
    const [showModal, setShowModal] = useState(false);
    const [todos, setTodos] = useState({ breakfast: [], lunch: [], dinner: [], snacks: [] });
    const [currentMeal, setCurrentMeal] = useState('breakfast');
    const [newTodo, setNewTodo] = useState('');

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const addTodo = () => {
        if (newTodo) {
            setTodos((prev) => ({
                ...prev,
                [currentMeal]: [...prev[currentMeal], newTodo],
            }));
            setNewTodo('');
        }
    };

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
                <div className="me-3" style={{ width: '660px', marginLeft: '20px'}}> 
                    <div className="card" style={{
                        backgroundColor: 'white',
                        marginTop: '50px',
                        padding: '10px',
                        borderRadius: '10px',
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                    }}>
                        <div className="card-body">
                            <h5>Meals of the Week</h5>
                            <div className="d-flex align-items-center justify-content-between flex-wrap mb-3">
                                <button type="button" className="btn btn-primary m-1" title="Log a serving to your diary" onClick={handleShow}>
                                    <FaAppleAlt /> Food
                                </button>
                                <button type="button" className="btn btn-primary m-1" title="Log an exercise to your diary">
                                    <FaRunning /> Exercise
                                </button>
                                <button type="button" className="btn btn-primary m-1" title="Log a biometric to your diary">
                                    <FaHeartbeat /> Biometric
                                </button>
                                <button type="button" className="btn btn-primary m-1" title="Log a note to your diary">
                                    <FaStickyNote /> Journal
                                </button>
                                <button type="button" className="btn btn-primary m-1" title="Log a fast to your diary">
                                    <FaFastBackward /> Fast
                                </button>
                            </div>

                            <div className="mb-3">
                                <div className="d-flex">
                                    <select className="form-select me-2" value={currentMeal} onChange={(e) => setCurrentMeal(e.target.value)}>
                                        <option value="breakfast">Breakfast</option>
                                        <option value="lunch">Lunch</option>
                                        <option value="dinner">Dinner</option>
                                        <option value="snacks">Snacks</option>
                                    </select>
                                    <input
                                        type="text"
                                        className="form-control me-2"
                                        placeholder="Add item..."
                                        value={newTodo}
                                        onChange={(e) => setNewTodo(e.target.value)}
                                    />
                                    <button className="btn btn-success" onClick={addTodo}>Add</button>
                                </div>
                            </div>

                            {Object.keys(todos).map((meal) => (
                                <div key={meal}>
                                    <h6>{meal.charAt(0).toUpperCase() + meal.slice(1)}:</h6>
                                    <ul>
                                        {todos[meal].map((todo, index) => (
                                            <li key={index}>{todo}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div style={{ width: '200px' }}> {/* Set width for calendar */}
                    <Calendar />
                </div>
                
            </div>

            <FoodLogModal show={showModal} handleClose={handleClose} />
        </div>
    );
};

export default DiaryActions;
