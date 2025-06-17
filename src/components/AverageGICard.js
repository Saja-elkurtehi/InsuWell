import React, { useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

const AverageGICard = () => {
    const [meals] = useState([
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
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
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
                labels: {
                    boxWidth: 12,
                    font: { size: 12 },
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
        <div style={{
            backgroundColor: 'white',
            padding: '16px',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            width: '100%',
            boxSizing: 'border-box',
        }}>
            <h5 style={{ marginBottom: '16px' }}>Average Glycemic Index (GI)</h5>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <div style={{ flex: '1 1 200px', minWidth: '150px', height: '250px' }}>
                    <Pie data={data} options={options} />
                </div>
                <div style={{ flex: '2 1 300px', paddingLeft: '24px', paddingTop: '12px' }}>
                    <p>
                        Average GI: <strong style={{ color: '#2ecc71' }}>{calculateAverageGI()}</strong>
                    </p>
                    <div style={{
                        backgroundColor: '#cee5f6',
                        padding: '12px',
                        border: '1px solid #ddd',
                        borderRadius: '10px',
                        marginTop: '20px',
                        fontSize: '14px',
                        boxShadow: '0 0 8px rgba(0, 0, 0, 0.05)',
                    }}>
                        <strong style={{ color: '#3498db' }}>Note:</strong>
                        <p style={{ marginTop: '8px' }}>
                            Glycemic Index (GI) is a measure of how quickly a food raises blood glucose levels. 
                            Foods with a high GI are digested and absorbed quickly, leading to rapid spikes in blood sugar.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AverageGICard;
