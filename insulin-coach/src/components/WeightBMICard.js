import React, { useState } from 'react';

const WeightBMICard = () => {
    const [weight, setWeight] = useState(70); // Example: 70 kg
    const [height, setHeight] = useState(1.75); // Example: 1.75 m

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

    return (
        <div className="card" style={cardStyle}>
            <div className="card-body">
                <h5 style={headerStyle}>Weight & BMI</h5>
                <div>
                    <label style={labelStyle}>Weight (kg): </label>
                    <input 
                        type="number" 
                        value={weight} 
                        onChange={(e) => setWeight(e.target.value)} 
                        style={inputStyle}
                    />
                </div>
                <div>
                    <label style={labelStyle}>Height (m): </label>
                    <input 
                        type="number" 
                        value={height} 
                        onChange={(e) => setHeight(e.target.value)} 
                        style={inputStyle}
                    />
                </div>
                <p>Your BMI: <strong>{bmi}</strong></p>
                <p style={{ color: '#007bff' }}>Category: <strong>{getBMICategory(bmi)}</strong></p>
                <small style={noteStyle}>
                    {getBMICategory(bmi) === "Underweight" && "You may need to gain weight for better health."}
                    {getBMICategory(bmi) === "Normal weight" && "You have a healthy body weight. Keep it up!"}
                    {getBMICategory(bmi) === "Overweight" && "You may want to consider some lifestyle changes."}
                    {getBMICategory(bmi) === "Obesity" && "It's important to seek advice from a healthcare provider."}
                </small>
            </div>
        </div>
    );
};

const cardStyle = {
    backgroundColor: 'white',
    padding: '15px',
    position: 'relative', // Set position to relative
    left: '657px', // Adjust the left position as needed
    borderRadius: '10px',
    marginTop: '-318px',
    boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
    width: '400px',
    height: '300px'
};


const inputStyle = {
    margin: '5px 0',
    padding: '5px',
    width: '100%',
    borderRadius: '5px',
    border: '1px solid #ccc',
};

const headerStyle = {
    marginBottom: '15px',
};

const labelStyle = {
    fontWeight: 'bold',
    marginTop: '10px',
};

const noteStyle = {
    marginTop: '10px',
    fontStyle: 'italic',
    color: '#6c757d',
};

export default WeightBMICard;
