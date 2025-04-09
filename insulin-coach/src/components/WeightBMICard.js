import React, { useState } from 'react';

const WeightBMICard = () => {
    const [weight, setWeight] = useState(70);
    const [height, setHeight] = useState(1.75);

    const calculateBMI = (weight, height) => {
        const bmi = (weight / (height * height)).toFixed(2);
        return bmi;
    };

    const getBMICategory = (bmi) => {
        if (bmi < 18.5) return "Underweight";
        if (bmi >= 18.5 && bmi < 24.9) return "Normal weight";
        if (bmi >= 25 && bmi < 29.9) return "Overweight";
        return "Obesity";
    };

    const bmi = calculateBMI(weight, height);
    const category = getBMICategory(bmi);

    return (
        <div style={cardStyle}>
            <h5 style={headerStyle}>Weight & BMI</h5>
            <div>
                <label style={labelStyle}>Weight (kg): </label>
                <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(Number(e.target.value))}
                    style={inputStyle}
                />
            </div>
            <div>
                <label style={labelStyle}>Height (m): </label>
                <input
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(Number(e.target.value))}
                    style={inputStyle}
                />
            </div>
            <p>Your BMI: <strong>{bmi}</strong></p>
            <p style={{ color: '#007bff' }}>
                Category: <strong>{category}</strong>
            </p>
            <small style={noteStyle}>
                {category === "Underweight" && "You may need to gain weight for better health."}
                {category === "Normal weight" && "You have a healthy body weight. Keep it up!"}
                {category === "Overweight" && "You may want to consider some lifestyle changes."}
                {category === "Obesity" && "It's important to seek advice from a healthcare provider."}
            </small>
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

const inputStyle = {
    margin: '5px 0 10px',
    padding: '6px',
    width: '100%',
    borderRadius: '5px',
    border: '1px solid #ccc',
};

const headerStyle = {
    marginBottom: '15px',
};

const labelStyle = {
    fontWeight: 'bold',
    display: 'block',
    marginTop: '10px',
};

const noteStyle = {
    marginTop: '10px',
    fontStyle: 'italic',
    color: '#6c757d',
};

export default WeightBMICard;
