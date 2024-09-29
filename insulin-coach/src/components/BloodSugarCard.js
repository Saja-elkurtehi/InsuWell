import React, { useState } from 'react';

const BloodSugarCard = () => {
    const [readings, setReadings] = useState([
        { time: 'Fasting', level: 95 },
        { time: 'After Breakfast', level: 120 },
        { time: 'After Lunch', level: 130 },
    ]);

    return (
        <div className="card" style={cardStyle}>
            <div className="card-body">
                <h5>Blood Sugar Levels</h5>
                <ul>
                    {readings.map((reading, index) => (
                        <li key={index}>
                            {reading.time}: {reading.level} mg/dL
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const cardStyle = {
    backgroundColor: 'white',
    padding: '15px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
    width: '400px',
};

export default BloodSugarCard;
