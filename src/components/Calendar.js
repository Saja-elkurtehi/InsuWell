import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [events, setEvents] = useState([]);

  const handleSelectSlot = ({ start, end }) => {
    const title = window.prompt('New Event name');
    if (title) {
      setEvents([...events, { start, end, title }]);
    }
  };

  return (
    <div style={cardStyle}>
      <h5 style={{ marginBottom: '10px' }}>Calendar</h5>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '250px' }}
        selectable
        onSelectSlot={handleSelectSlot}
      />
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
  height: '350px'
};



export default MyCalendar;
