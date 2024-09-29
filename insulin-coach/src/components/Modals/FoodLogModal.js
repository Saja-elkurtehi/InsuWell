import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './FoodLogModal.css'; 
import NutrientChart from '../Charts/NutrientChart'; 

const FoodLogModal = ({ show, handleClose, onMealsUpdate }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    const [activeMealId, setActiveMealId] = useState(null);
    const [mealDetails, setMealDetails] = useState({ ingredients: [], nutrition: null, properties: null });
    const [mealsOfTheWeek, setMealsOfTheWeek] = useState([]);
    const API_KEY = '7355e5542e7c42b393e61a630fb0b6ed'; 
    const LIMIT = 5;

    const handleAddMeal = (meal) => {
        setMealsOfTheWeek([...mealsOfTheWeek, meal]);
        setActiveMealId(null); 
        onMealsUpdate([...mealsOfTheWeek, meal]);
    };

    const handleCloseModal = () => {
        handleClose();
        onMealsUpdate(mealsOfTheWeek); 
    };

    const handleResetMeals = () => {
        setMealsOfTheWeek([]);
    };

    const handleSearch = async () => {
        try {
            const response = await axios.get(
                `https://api.spoonacular.com/recipes/complexSearch`,
                {
                    params: {
                        query: searchTerm,
                        apiKey: API_KEY,
                        number: LIMIT,
                    },
                }
            );
            setResults(response.data.results || []);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleMealSelect = async (mealId) => {
        setActiveMealId(mealId);
        try {
            const [ingredientsResponse, nutritionResponse] = await Promise.all([
                axios.get(`https://api.spoonacular.com/recipes/${mealId}/ingredientWidget.json`, {
                    params: { apiKey: API_KEY }
                }),
                axios.get(`https://api.spoonacular.com/recipes/${mealId}/nutritionWidget.json`, {
                    params: { apiKey: API_KEY }
                })
            ]);
    
            setMealDetails({
                ingredients: ingredientsResponse.data.ingredients,
                nutrition: nutritionResponse.data.nutrients,
                properties: nutritionResponse.data.properties
            });
        } catch (error) {
            console.error('Error fetching meal details:', error.message);
        }
    };

    

    return (
        <div className={`modal ${show ? 'show' : ''}`} style={{ display: show ? 'block' : 'none' }} aria-hidden={!show}>
            <div className="modal-dialog modal-custom">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Log Meals</h5>
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
                                    placeholder="Search for a meal.."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <button className="button" onClick={handleSearch}>
                                    Search
                                </button>
                            </div>

                            {results.length === 0 && (
                                <div className="no-results">
                                    No results found - check your spelling, try alternatives
                                </div>
                            )}

                            {results.length > 0 && (
                                <ul className="list-group mt-2">
                                    {results.map((meal) => (
                                        <li
                                            key={meal.id}
                                            className={`list-group-item clickable-item ${activeMealId === meal.id ? 'active' : ''}`}
                                            onClick={() => handleMealSelect(meal.id)}
                                        >
                                            {meal.title}
                                            {activeMealId === meal.id && (
                                                <button 
                                                    className="button btn-space" 
                                                    onClick={() => handleAddMeal(meal)} 
                                                >
                                                    Add Meal
                                                </button>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            )}
                            <button onClick={handleResetMeals} className="btn-reset">Reset Meals of the Week</button>
                        </div>

                        <div className="row mt-3">
                            {mealDetails.ingredients.length > 0 && (
                                <div className="col-md-6">
                                    <h6>Ingredients:</h6>
                                    <ul>
                                        {mealDetails.ingredients.map((ingredient, index) => (
                                            <li key={index}>
                                                {ingredient.name} ({ingredient.amount.metric.value} {ingredient.amount.metric.unit})
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}   
                            
                            {mealDetails.properties && Array.isArray(mealDetails.properties) && (
                                <div className="col-md-6">
                                    <h6>Additional Properties:</h6>
                                    <ul>
                                        {mealDetails.properties.map((property, index) => (
                                            <li key={index}>
                                                {property.name}: {property.amount} {property.unit}
                                            </li>
                                        ))}
                                    </ul>
                                    {/* General message about good/balanced GL */}
                                    <div className="gl-info">
                                        <h6>Glycemic Load Guidelines:</h6>
                                        <p>
                                            A balanced glycemic load (GL) per meal should ideally fall within a range of <strong>10 to 20</strong>.
                                            A GL below 10 is considered low, and a GL above 20 is high. Keeping your meals within this range can help maintain steady blood sugar levels, which is beneficial for long-term health.
                                        </p>
                                        <p>
                                           -- Monitoring your GL can aid in managing energy levels, reducing the risk of chronic diseases like diabetes, and supporting weight management.
                                        </p>
                                    </div>
                                </div>
                            )}  
                        </div>

                        {mealDetails.nutrition && Array.isArray(mealDetails.nutrition) && (
                            <div className="mt-3">
                                <h6>Nutrition Information:</h6>
                                <NutrientChart nutrients={mealDetails.nutrition} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodLogModal;
