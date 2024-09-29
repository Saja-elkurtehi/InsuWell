import React from 'react';

const WaterIntakeCard = () => {
    const waterIntake = 2000; // Example: total water intake in ml
    const goal = 3000; // Example: daily goal in ml

    return (
        <div className="card" style={{ ...cardStyle, width: '400px' }}> 
            <div className="card-body" style={{ padding: '10px' }}>
                <h5>Water Intake</h5>
                <div style={{ fontSize: '24px', marginBottom: '10px' }}>
                    {waterIntake} ml / {goal} ml
                </div>
                <div className="progress" style={{ height: '20px' }}>
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
    marginTop: '50px',
    padding: '10px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
};

export default WaterIntakeCard;
