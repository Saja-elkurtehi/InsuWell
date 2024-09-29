import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const NutrientChart = ({ nutrients }) => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null); // Create a ref to hold the chart instance

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');
        const nutrientNames = nutrients.map(nutrient => nutrient.name);
        const nutrientValues = nutrients.map(nutrient => nutrient.amount);

        // Destroy the previous chart instance if it exists
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        // Create a new chart instance
        chartInstance.current = new Chart(ctx, {
            type: 'bar', // or 'doughnut', 'line', etc.
            data: {
                labels: nutrientNames,
                datasets: [{
                    label: 'Nutrient Amount',
                    data: nutrientValues,
                    backgroundColor: 'rgba(75, 192, 192, 0.6)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                }],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        });

        // Clean up chart on unmount
        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, [nutrients]);

    return (
        <canvas ref={chartRef} width="120" height="120" style={{padding: '30px', width: '100%', height: 'auto' }} />
    );
};

export default NutrientChart;
