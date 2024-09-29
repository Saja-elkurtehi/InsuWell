import React, { useState } from 'react';

const InsulinDosageCard = () => {
    const [dosage, setDosage] = useState([
        { type: 'Basal', amount: 10 },
        { type: 'Bolus (Breakfast)', amount: 5 },
        { type: 'Bolus (Lunch)', amount: 6 },
    ]);

    return (
        <div className="card" style={cardStyle}>
            <div className="card-body">
                <h5>Insulin Dosage</h5>
                <ul>
                    {dosage.map((dose, index) => (
                        <li key={index}>
                            {dose.type}: {dose.amount} units
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

export default InsulinDosageCard;
