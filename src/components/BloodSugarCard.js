import React, { useState } from 'react';

const BloodSugarCard = () => {
    const [readings] = useState([
        { time: 'Fasting', level: 95 },
        { time: 'After Breakfast', level: 120 },
        { time: 'After Lunch', level: 130 },
    ]);

    return (
        <div style={cardStyle}>
            <h5 style={{ marginBottom: '12px' }}>Blood Sugar Levels</h5>
            <ul style={{ paddingLeft: '18px' }}>
                {readings.map((reading, index) => (
                    <li key={index} style={{ marginBottom: '6px' }}>
                        {reading.time}: <strong>{reading.level} mg/dL</strong>
                    </li>
                ))}
            </ul>
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

export default BloodSugarCard;
