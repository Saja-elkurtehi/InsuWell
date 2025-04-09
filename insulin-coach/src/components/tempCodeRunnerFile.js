import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarPage = () => {
    const [date, setDate] = useState(new Date());

    const onChange = (selectedDate) => {
        setDate(selectedDate);
        console.log('Selected date:', selectedDate);
    };

    return (
        <div style={containerStyle}>
            <h5 style={{ marginBottom: '16px' }}>My Calendar</h5>
            <div style={cardStyle}>
                <Calendar onChange={onChange} value={date} />
            </div>
        </div>
    );
};

const containerStyle = {
    backgroundColor: 'white',
    padding: '16px',
    borderRadius: '10px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    width: '100%',
    boxSizing: 'border-box',
};

const cardStyle = {
    display: 'flex',
    justifyContent: 'center',
};

export default CalendarPage;
