import React from 'react';
import { PieChart, Pie, Tooltip, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';

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
        <div className="d-flex justify-content-center mb-2">
            <div className="d-flex flex-row">
                <div className="me-3" style={{ width: '660px', marginLeft: '-220px', marginTop: '-157px'}}>
                    <div className="card" style={cardStyle}>
                        <div className="card-body" style={{ padding: '10px 10px', height: '262px' }}>
                            <h5>Health Data</h5>
                            <div className="d-flex justify-content-between">
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
                                <div style={{ marginTop: '20px' , marginRight: '80px'}}>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const cardStyle = {
    backgroundColor: 'white',
    marginTop: '50px',
    padding: '10px',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
};

export default PieBarChartCard;
