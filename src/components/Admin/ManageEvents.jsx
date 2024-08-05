// src/components/Admin/ManageEvents.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManageEvents = () => {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ title: '', date: '', description: '' });

  useEffect(() => {
    axios.get('http://localhost:3000/admin/events')
      .then(response => setEvents(response.data))
      .catch(error => console.error('Error fetching events:', error));
  }, []);

  const handleAddEvent = () => {
    axios.post('http://localhost:3000/admin/events', newEvent)
      .then(response => setEvents([...events, response.data]))
      .catch(error => console.error('Error adding event:', error));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Manage Events</h2>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Title"
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
          className="mr-2 p-2 border"
        />
        <input
          type="date"
          placeholder="Date"
          value={newEvent.date}
          onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
          className="mr-2 p-2 border"
        />
        <input
          type="text"
          placeholder="Description"
          value={newEvent.description}
          onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
          className="mr-2 p-2 border"
        />
        <button onClick={handleAddEvent} className="p-2 bg-blue-600 text-white">Add Event</button>
      </div>
      <table className="w-full bg-white shadow-md rounded mb-6">
        <thead>
          <tr>
            <th className="border p-2">Title</th>
            <th className="border p-2">Date</th>
            <th className="border p-2">Description</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id}>
              <td className="border p-2">{event.title}</td>
              <td className="border p-2">{event.date}</td>
              <td className="border p-2">{event.description}</td>
              <td className="border p-2">
                <button className="p-1 bg-red-600 text-white">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageEvents;
