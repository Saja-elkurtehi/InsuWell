// src/components/FoodLogModal.js
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './FoodLogModal.css'; 
import NutrientChart from '../Charts/NutrientChart'; 

const FoodLogModal = ({ show, handleClose }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    //const [mealDetails, setMealDetails] = useState(null); 
    const [mealDetails, setMealDetails] = useState({ ingredients: [], nutrition: null, properties: null});
    const API_KEY = '471ebaf8fe2e48c9892ec5a0a7f27d05'; 
    const LIMIT = 5;

    const handleSearch = async () => {
        // Here you can call your food API with the search term
        console.log('Searching for:', searchTerm);
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
            console.log(response.data);
            setResults(response.data.results || []);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleMealSelect = async (mealId) => {
        try {
            const [ingredientsResponse, nutritionResponse] = await Promise.all([
                axios.get(`https://api.spoonacular.com/recipes/${mealId}/ingredientWidget.json`, {
                    params: { apiKey: API_KEY }
                }),
                axios.get(`https://api.spoonacular.com/recipes/${mealId}/nutritionWidget.json`, {
                    params: { apiKey: API_KEY }
                })
            ]);
    
            // Store the meal details
            setMealDetails({
                ingredients: ingredientsResponse.data.ingredients,
                nutrition: nutritionResponse.data.nutrients,
                properties: nutritionResponse.data.properties
            });

            //console.log("data", nutritionResponse.data);
            console.log("nutrients", nutritionResponse.data.nutrients);
            console.log("properties", nutritionResponse.data.properties);
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
                        <button type="button" className="close" onClick={handleClose} aria-label="Close">
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
                            
                            {results.length == 0 && (
                                <div className="no-results">
                                    No results found - check your spelling, try alternatives
                                    </div>
                                    
                                )}

                            {results.length > 0 && (
                                <ul className="list-group mt-2">
                                    {results.map((meal) => (
                                        <li
                                            key={meal.id}
                                            className="list-group-item clickable-item"
                                            onClick={() => handleMealSelect(meal.id)}
                                        >
                                            {meal.title}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                        <div className="row mt-3">
                            {mealDetails.ingredients.length >0 && (
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
                                </div>
                            )}  
                        </div>

                        {mealDetails.nutrition && Array.isArray(mealDetails.nutrition) && (
                            <div className="mt-3">
                                <h6>Nutrition Information:</h6>
                                <NutrientChart nutrients={mealDetails.nutrition} />
                                 {/*<ul>
                                    {mealDetails.nutrition.map((nutrient, index) => (
                                         <li key={index}>
                                            {nutrient.name}: {nutrient.amount} {nutrient.unit}
                                            {nutrient.percentOfDailyNeeds && (
                                                <span> ({nutrient.percentOfDailyNeeds.toFixed(2)}% of Daily Needs)</span>
                                            )}
                                        </li>
                                    ))}
                                            </ul>*/}
                            </div>
                        )}
                        {/* {mealDetails.properties && Array.isArray(mealDetails.properties) && (
                            <div className="mt-3">
                                <h6>Additional Properties:</h6>
                                <ul>
                                    {mealDetails.properties.map((property, index) => (
                                        <li key={index}>
                                            {property.name}: {property.amount} {property.unit}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                                    )}*/}


                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodLogModal;
