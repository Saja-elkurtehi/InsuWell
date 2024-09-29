import React, { useState } from 'react';
import { FaGlassWhiskey } from 'react-icons/fa'; // Using a cup icon from React Icons

const WaterIntakeCard = () => {
    const [cupsFilled, setCupsFilled] = useState(0);
    const totalCups = 5;
    const waterIntake = cupsFilled * 600; // Each cup represents 600ml of water
    const goal = 3000; 

    const handleCupClick = (index) => {
        setCupsFilled(index + 1); // Set the number of cups filled based on the clicked cup
    };

    return (
        <div className="card" style={{ ...cardStyle, width: '400px' }}>
            <div className="card-body" style={{ padding: '10px' }}>
                <h5>Water Intake</h5>
                <div style={cupContainerStyle}>
                    {Array.from({ length: totalCups }, (_, index) => (
                        <FaGlassWhiskey
                            key={index}
                            onClick={() => handleCupClick(index)}
                            style={{
                                fontSize: '30px',
                                cursor: 'pointer',
                                marginRight: '10px',
                                marginTop: '20px',
                                color: index < cupsFilled ? '#007bff' : '#e0e0e0', // Filled cups are blue, unfilled are gray
                            }}
                        />
                    ))}
                </div>
                <div style={{ fontSize: '18px', marginBottom: '10px' }}>
                    {waterIntake} ml / {goal} ml
                </div>
                <div className="progress" style={{ height: '30px' }}>
                    <div 
                        className="progress-bar" 
                        role="progressbar" 
                        style={{ width: `${(waterIntake / goal) * 100}%`, backgroundColor: '#007bff' }}
                        aria-valuenow={waterIntake}
                        aria-valuemin={0}
                        aria-valuemax={goal}
                    />
                </div>
                <p style={{ marginTop: '10px' }}>
                    {((waterIntake / goal) * 100).toFixed(0)}% of your daily goal
                </p>
            </div>
        </div>
    );
};

const cardStyle = {
    backgroundColor: 'white',
    marginTop: '-177px',
    position: 'relative',
    left: '657px',
    padding: '10px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
};

const cupContainerStyle = {
    display: 'flex',
    justifyContent: 'flex-start', // Align cups to the left
    marginBottom: '10px',
};

export default WaterIntakeCard;
