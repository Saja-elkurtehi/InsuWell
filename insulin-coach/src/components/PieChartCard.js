import React from 'react';
import {
    PieChart, Pie, Tooltip, Cell,
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend
} from 'recharts';

const PieBarChartCard = () => {
    const pieData = [
        { name: 'Calories', value: 400 },
        { name: 'Protein', value: 300 },
        { name: 'Carbs', value: 300 },
        { name: 'Fat', value: 200 },
    ];

    const barData = [
        { name: 'Calories', value: 400 },
        { name: 'Protein', value: 300 },
        { name: 'Carbs', value: 300 },
        { name: 'Fat', value: 200 },
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    return (
        <div style={cardStyle}>
            <h5 style={{ marginBottom: '16px' }}>Health Data</h5>
            <div style={chartContainerStyle}>
                {/* Pie Chart */}
                <PieChart width={200} height={200}>
                    <Pie
                        data={pieData}
                        cx={100}
                        cy={100}
                        innerRadius={50}
                        outerRadius={80}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                    >
                        {pieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>

                {/* Bar Chart */}
                <BarChart width={250} height={200} data={barData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
            </div>
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

const chartContainerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    gap: '20px',
};

export default PieBarChartCard;
