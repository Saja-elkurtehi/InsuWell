import React, { useState } from 'react';
import { FaGlassWhiskey } from 'react-icons/fa'; // Using a cup icon from React Icons

const WaterIntakeCard = () => {
    const [cupsFilled, setCupsFilled] = useState(0);
    const totalCups = 5;
    const waterIntake = cupsFilled * 600; // Each cup represents 600ml of water
    const goal = 3000;

    const handleCupClick = (index) => {
        setCupsFilled(index + 1);
    };

    return (
        <div style={cardStyle}>
            <h5 style={{ marginBottom: '12px' }}>Water Intake</h5>
            <div style={cupContainerStyle}>
                {Array.from({ length: totalCups }, (_, index) => (
                    <FaGlassWhiskey
                        key={index}
                        onClick={() => handleCupClick(index)}
                        style={{
                            fontSize: '30px',
                            cursor: 'pointer',
                            marginRight: '10px',
                            color: index < cupsFilled ? '#8984D8' : '#e0e0e0',
                        }}
                    />
                ))}
            </div>
            <div style={{ fontSize: '18px', marginBottom: '10px' }}>
                {waterIntake} ml / {goal} ml
            </div>
            <div className="progress" style={{ height: '30px', backgroundColor: '#f0f0f0' }}>
                <div
                    className="progress-bar"
                    role="progressbar"
                    style={{
                        width: `${(waterIntake / goal) * 100}%`,
                        backgroundColor: '#8984D8',
                    }}
                    aria-valuenow={waterIntake}
                    aria-valuemin={0}
                    aria-valuemax={goal}
                />
            </div>
            <p style={{ marginTop: '10px' }}>
                {((waterIntake / goal) * 100).toFixed(0)}% of your daily goal
            </p>
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
};

const cupContainerStyle = {
    display: 'flex',
    marginBottom: '10px',
    flexWrap: 'wrap',
};

export default WaterIntakeCard;
