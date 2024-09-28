import React, { Component } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import the calendar styles
import './CalendarPage.css'; // Custom CSS for CalendarPage

class CalendarPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(), // Default to the current date
        };
    }

    onChange = (date) => {
        this.setState({ date });
        console.log('Selected date:', date); // You can handle the selected date as needed
    }

    render() {
        return (
            <div className="calendar-container">
                <h2>My Calendar</h2>
                <div className="calendar-card">
                    <Calendar
                        onChange={this.onChange}
                        value={this.state.date}
                    />
                </div>
            </div>
        );
    }
}

export default CalendarPage;
