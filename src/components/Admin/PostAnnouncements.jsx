// src/components/Admin/PostAnnouncements.jsx
import React, { useState } from 'react';
import axios from 'axios';

const PostAnnouncements = () => {
  const [announcement, setAnnouncement] = useState('');

  const handlePostAnnouncement = () => {
    axios.post('http://localhost:3000/admin/announcements', { announcement })
      .then(response => {
        setAnnouncement('');
        alert('Announcement posted successfully!');
      })
      .catch(error => console.error('Error posting announcement:', error));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Post Announcements</h2>
      <textarea
        value={announcement}
        onChange={(e) => setAnnouncement(e.target.value)}
        placeholder="Write your announcement here..."
        className="w-full p-2 border mb-4"
        rows="5"
      ></textarea>
      <button onClick={handlePostAnnouncement} className="p-2 bg-blue-600 text-white">Post Announcement</button>
    </div>
  );
}

export default PostAnnouncements;
