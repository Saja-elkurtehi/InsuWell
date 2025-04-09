import React, { useState } from 'react';

const InsulinDosageCard = () => {
    const [dosage] = useState([
        { type: 'Basal', amount: 10 },
        { type: 'Bolus (Breakfast)', amount: 5 },
        { type: 'Bolus (Lunch)', amount: 6 },
    ]);

    return (
        <div style={cardStyle}>
            <h5 style={{ marginBottom: '12px' }}>Insulin Dosage</h5>
            <ul style={{ paddingLeft: '18px' }}>
                {dosage.map((dose, index) => (
                    <li key={index} style={{ marginBottom: '6px' }}>
                        {dose.type}: <strong>{dose.amount} units</strong>
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

export default InsulinDosageCard;
