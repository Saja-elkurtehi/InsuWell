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
    <div
      className="card"
      style={{
        backgroundColor: 'white',
        marginTop: '50px',
        padding: '10px',
        marginLeft: '5px',
        borderRadius: '10px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        width: '400px', // Set a larger width for the calendar card
        ':hover': { // Add a hover effect
          boxShadow: '0 0 15px rgba(0, 0, 0, 0.2)',
          cursor: 'pointer',
          color: '#8984D8'
        }
      }}
    >
      <div className="card-body">
        <h5 className="card-title">Calendar</h5>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 350 }}
          selectable
          onSelectSlot={handleSelectSlot}
        />
      </div>
    </div>
  );
};

export default MyCalendar;