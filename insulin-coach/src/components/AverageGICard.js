import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the components
Chart.register(ArcElement, Tooltip, Legend);

const AverageGICard = () => {
    const [meals, setMeals] = useState([
        { name: 'Breakfast', gi: 55 },
        { name: 'Lunch', gi: 50 },
        { name: 'Dinner', gi: 60 },
    ]);

    const calculateAverageGI = () => {
        const totalGI = meals.reduce((sum, meal) => sum + meal.gi, 0);
        return (totalGI / meals.length).toFixed(2);
    };

    const data = {
        labels: meals.map(meal => meal.name),
        datasets: [
            {
                data: meals.map(meal => meal.gi),
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#4BC0C0',
                    '#9966FF'
                ],
                hoverBackgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#4BC0C0',
                    '#9966FF'
                ],
                borderColor: '#fff',
                borderWidth: 2,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
                display: true,
                labels: {
                    boxWidth: 12, // adjust the width of the legend boxes
                    font: {
                        size: 12, // adjust the font size of the legend labels
                    },
                },
            },
            tooltip: {
                callbacks: {
                    label: (tooltipItem) => `${tooltipItem.label}: GI ${tooltipItem.raw}`,
                },
            },
        },
    };

    return (
        <div className="card" style={{
            backgroundColor: 'white',
            padding: '15px',
            borderRadius: '10px',
            marginTop: '-35px',
            boxShadow: '0 0 15px rgba(0, 0, 0, 0.1)',
            marginBottom: '20px',
            marginLeft: '-20px',
            width: '660px',
            height: '345px',
            animation: 'fadeIn 1s',
        }}>
            <h5>Average Glycemic Index (GI)</h5>
            <div className="card-body" style={{ display: 'flex', alignItems: 'flex-start' }}>
                <div style={{ position: 'relative', height: '250px', width: '150px' }}>
                    <Pie data={data} options={options} />
                </div>
                <div style={{ marginLeft: '40px', marginTop: '30px' }}>
                    <ul>
                    </ul>
                    <p>
                        Average GI: <strong style={{ color: '#2ecc71' }}>{calculateAverageGI()}</strong>
                    </p>
                    <p style={{ marginTop: '20px' }}>
                    <div style={{
                        backgroundColor: '#cee5f6',
                        padding: '10px',
                        marginLeft: '-5px',
                        border: '1px solid #ddd',
                        borderRadius: '10px',
                        width: '380px',
                        margin: '10px',
                        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                    }}>
                        <strong style={{ color: '#3498db' }}>Note:</strong>
                        <p style={{ fontSize: '14px' }}>Glycemic Index (GI) is a measure of how quickly a food raises blood glucose levels. Foods with a high GI are digested and absorbed quickly, leading to rapid spikes in blood sugar.</p>
                    </div>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AverageGICard;