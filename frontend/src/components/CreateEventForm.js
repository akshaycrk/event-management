import React, { useState } from 'react';
import axios from 'axios';

const CreateEventForm = () => {
    const [eventData, setEventData] = useState({
        name: '',
        date: '',
        location: '',
        description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEventData({
            ...eventData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/events/create', eventData);
            alert('Event Created Successfully');
        } catch (error) {
            alert('Error creating event');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Event Name" onChange={handleChange} required />
            <input type="date" name="date" onChange={handleChange} required />
            <input type="text" name="location" placeholder="Event Location" onChange={handleChange} required />
            <textarea name="description" placeholder="Event Description" onChange={handleChange}></textarea>
            <button type="submit">Create Event</button>
        </form>
    );
};

export default CreateEventForm;
